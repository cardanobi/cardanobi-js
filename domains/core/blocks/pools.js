'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function latest_(options) {
    return new Promise((resolve, reject) => {
        const { pool_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/blocks/latest/pools";
        if (pool_hash) path = path + "/" + pool_hash;
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

export async function history_(options) {
    return new Promise((resolve, reject) => {
        const { pool_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/blocks/pools/${pool_hash}/history`;
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

export class Pools {
    constructor(client) {
        this.client = client;
    }

    latest_ = latest_;
    history_ = history_;
}