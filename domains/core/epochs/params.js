'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function params_(options) {
    return new Promise((resolve, reject) => {
        const { no, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/epochs/params";
        if (no) path = `api/core/epochs/${no}/params`;

        if (odata) {
            path = "api/core/odata/epochsparams";
            if (no) path = path + "/" + no;
        }
        
        if (query) path = path + "?" + query;

        this.client.getPrivate(path)
            .then(resp => {
                resolve(resp);
            })
            .catch(err => {
                // reject(handleError(err));
                handleError(err);
            });
    });
}

export async function latest_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/core/epochs/params/latest";
        if (query) path = path + "?" + query;

        this.client.getPrivate(path)
            .then(resp => {
                resolve(resp);
            })
            .catch(err => {
                // reject(handleError(err));
                handleError(err);
            });
    });
}

export class Params {
    constructor(client) {
        this.client = client;
    }

    latest_ = latest_;
}