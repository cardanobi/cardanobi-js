'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function offlinedata_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, ticker, meta_hash, query, odata } = options || { undefined, undefined, undefined, undefined, undefined };
        let path = "api/core/pools/offlinedata";
        if (pool_id) path = `api/core/pools/${pool_id}/offlinedata`;
        if (ticker) path = `api/core/pools/${ticker}/offlinedata`;
        if (meta_hash) path = `api/core/pools/metadata/${meta_hash}/offlinedata`;

        if (odata) {
            path = "api/core/odata/poolsofflinedata";
            if (pool_id) path = `api/core/odata/poolsofflinedata/${pool_id}`;
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