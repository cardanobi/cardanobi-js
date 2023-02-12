'use strict'

import { handleError } from "../../../utils/Misc.js";
import { pools_ } from './stakes/pools.js';

export async function stakes_(options) {
    return new Promise((resolve, reject) => {
        const { no, pool_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "api/core/epochs/stakes";
        if (no) path = `api/core/epochs/${no}/stakes`;
        if (pool_hash) path = `api/core/epochs/stakes/pools/${pool_hash}`;
        if (no && pool_hash) path = `api/core/epochs/${no}/stakes/pools/${pool_hash}`;
        if (odata) {
            path = "api/core/odata/epochsstakes";
            if (no) path = `api/core/odata/epochsstakes/${no}`;
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

export class Stakes {
    constructor(client) {
        this.client = client;
    }

    pools_ = pools_;
}