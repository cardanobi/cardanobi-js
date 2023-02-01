'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function offlinefetcherrors_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/pools/offlinefetcherrors";
        if (pool_id) path = `api/core/pools/${pool_id}/offlinefetcherrors`;

        if (odata) {
            path = "api/core/odata/poolsofflinefetcherrors";
            if (pool_id) path = `api/core/odata/poolsofflinefetcherrors/${pool_id}`;
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