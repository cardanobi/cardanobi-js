'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function relays_(options) {
    return new Promise((resolve, reject) => {
        const { update_id, vrf_key_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "api/core/pools/relays/updates";
        if (update_id) path = `api/core/pools/relays/updates/${update_id}`;
        if (vrf_key_hash) path = `api/core/pools/${vrf_key_hash}/relays/updates`;

        if (odata) {
            path = "api/core/odata/poolsrelays";
            if (update_id) path = `api/core/odata/poolsrelays/${update_id}`;
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