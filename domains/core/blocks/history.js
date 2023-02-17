'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function history_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/core/blocks/history";

        if (odata) {
            path = "api/core/odata/blocks";
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

export async function prev_(options) {
    return new Promise((resolve, reject) => {
        const { block_no, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/blocks/history/prev";
        if (block_no) path = path + "/" + block_no
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

export async function next_(options) {
    return new Promise((resolve, reject) => {
        const { block_no, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/blocks/history/next";
        if (block_no) path = path + "/" + block_no
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

export class History {
    constructor(client) {
        this.client = client;
    }

    prev_ = prev_;
    next_ = next_;
}