'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function latest_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/core/blocks/latest";
        
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

export async function pools_(options) {
    return new Promise((resolve, reject) => {
        const { pool_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/blocks/latest/pools/${pool_hash}`;
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

export async function transactions_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/core/blocks/latest/transactions";
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

export class Latest {
    constructor(client) {
        this.client = client;
    }

    pools_ = pools_;
    transactions_ = transactions_;
}