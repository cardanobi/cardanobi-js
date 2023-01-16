'use strict'

import { handleError } from "../../utils/Misc.js";

export async function epochs(options) {
    return new Promise((resolve, reject) => {
        const { id, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/epochs";
        if (odata) path = "api/core/odata/epochs";
        if (id) path = path + "/" + id;
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