'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function stats_(options) {
    return new Promise((resolve, reject) => {
        const { pool_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/bi/pools/stats";
        if (pool_hash) path = `api/bi/pools/${pool_hash}/stats`;
        if (odata) path = "api/bi/odata/poolsstats";
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