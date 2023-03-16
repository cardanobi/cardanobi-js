'use strict'

import { handleError } from "../utils/Misc.js";
import { Pools } from './bi/pools.js';
import { Addresses } from './bi/addresses.js';

export async function addressesstats_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, epoch_no, query, odata } = options || { undefined, undefined, undefined, true: 1 };
        let queryParams = ["stake_address", "epoch_no"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = "api/bi/odata/addressesstats";
        if (query_) path = path + "?" + query_;

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

export async function poolsstats_(options) {
    return new Promise((resolve, reject) => {
        const { epoch_no, pool_hash, query, odata } = options || { undefined, undefined, undefined, true: 1 };
        let queryParams = ["epoch_no", "pool_hash"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = "api/bi/odata/poolsstats";
        if (query_) path = path + "?" + query_;

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

export class Bi {
    constructor(client) {
        this.client = client;
        this.pools = new Pools(this.client);
        this.addresses = new Addresses(this.client);
    }

    addressesstats_ = addressesstats_;
    poolsstats_ = poolsstats_;
}
