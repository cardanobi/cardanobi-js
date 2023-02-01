'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function updates_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, vrf_key_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "api/core/pools/updates";
        if (pool_id) path = `api/core/pools/${pool_id}/updates`;
        if (vrf_key_hash) path = `api/core/pools/${vrf_key_hash}/updates`;

        if (odata) {
            path = "api/core/odata/poolsupdates";
            if (pool_id) path = `api/core/odata/poolsupdates/${pool_id}`;
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