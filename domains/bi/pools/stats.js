'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function stats(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/bi/pools/stats";
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