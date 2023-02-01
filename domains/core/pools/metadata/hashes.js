'use strict'

import { handleError } from "../../../../utils/Misc.js";

export async function hashes_(options) {
    return new Promise((resolve, reject) => {
        const { meta_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/pools/metadata/hashes/";
        if (meta_hash) path = `api/core/pools/metadata/hashes/${meta_hash}`;
        
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