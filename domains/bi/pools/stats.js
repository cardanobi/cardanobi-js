'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function stats_(options) {
    return new Promise((resolve, reject) => {
        const { pool_hash, query } = options || { undefined, undefined };
        let path = "api/bi/pools/stats";
        if (pool_hash) path = `api/bi/pools/${pool_hash}/stats`;
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