'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function metadata_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, meta_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "api/core/pools/metadata";
        if (pool_id) path = `api/core/pools/${pool_id}/metadata`;
        if (meta_hash) path = `api/core/pools/metadata/hash/${meta_hash}`;

        if (odata) {
            path = "api/core/odata/poolsmetadata";
            if (pool_id) path = `api/core/odata/poolsmetadata/${pool_id}`;
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