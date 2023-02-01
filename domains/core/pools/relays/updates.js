'use strict'

import { handleError } from "../../../../utils/Misc.js";

export async function updates_(options) {
    return new Promise((resolve, reject) => {
        const { update_id, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/pools/relays/updates";
        if (update_id) path = `api/core/pools/relays/updates/${update_id}`;
        
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