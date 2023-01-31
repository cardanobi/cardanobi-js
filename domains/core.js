'use strict'

import { Epochs } from './core/epochs.js';
import { handleError } from "../utils/Misc.js";

export async function epochs_(options) {
    return new Promise((resolve, reject) => {
        const { no, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/epochs";
        if (odata) path = "api/core/odata/epochs";
        if (no) path = path + "/" + no;
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

export async function epochsparams_(options) {
    return new Promise((resolve, reject) => {
        const { no, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/epochsparams";
        if (no) path = path + "/" + no;
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

export class Core {
    constructor(client) {
        this.client = client;

        this.epochs = new Epochs(client);
    }

    epochs_ = epochs_;
    epochsparams_ = epochsparams_;
}
