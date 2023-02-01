'use strict'

import { handleError } from "../../../../utils/Misc.js";

export async function offlinedata_(options) {
    return new Promise((resolve, reject) => {
        const { meta_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/pools/metadata/${meta_hash}/offlinedata`;
        
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