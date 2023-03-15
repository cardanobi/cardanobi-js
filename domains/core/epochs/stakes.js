'use strict'

import { handleError } from "../../../utils/Misc.js";
import { pools_ } from './stakes/pools.js';

export async function stakes_(options) {
    return new Promise((resolve, reject) => {
        const { epoch_no, pool_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let queryParams = ["epoch_no", "pool_hash"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = "api/core/epochs/stakes";
        if (epoch_no) path = `api/core/epochs/${epoch_no}/stakes`;
        if (pool_hash) path = `api/core/epochs/stakes/pools/${pool_hash}`;
        if (epoch_no && pool_hash) path = `api/core/epochs/${epoch_no}/stakes/pools/${pool_hash}`;
        if (query) path = path + "?" + query;

        if (odata) {
            path = "api/core/odata/epochsstakes";
            if (query_) path = path + "?" + query_;
        }
        

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

export class Stakes {
    constructor(client) {
        this.client = client;
    }

    pools_ = pools_;
}