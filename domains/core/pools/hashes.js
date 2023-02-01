'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function hashes_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/core/pools/hashes";

        if (odata) {
            path = "api/core/odata/poolshashes";
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