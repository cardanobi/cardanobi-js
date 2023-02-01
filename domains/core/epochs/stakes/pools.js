'use strict'

import { handleError } from "../../../../utils/Misc.js";

export async function pools_(options) {
    return new Promise((resolve, reject) => {
        const { no, pool_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "api/core/epochs/stakes/pools/";
        if (pool_hash) path = `api/core/epochs/stakes/pools/${pool_hash}`;
        if (no && pool_hash) path = `api/core/epochs/${no}/stakes/pools/${pool_hash}`;
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