'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function stakes_(options) {
    return new Promise((resolve, reject) => {
        const { no, pool_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "api/bi/epochs/stakes";
        if (no) path = `api/bi/epochs/${no}/stakes`;
        if (pool_hash) path = `api/bi/epochs/stakes/pool/${pool_hash}`;
        if (no && pool_hash) path = `api/bi/epochs/${no}/stakes/pool/${pool_hash}`;
        if (odata) path = "api/bi/odata/epochsstakes";
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