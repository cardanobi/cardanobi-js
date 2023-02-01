'use strict'

import { handleError } from "../utils/Misc.js";
import { Pools } from './bi/pools.js';
import { Addresses } from './bi/addresses.js';
import { Epochs } from './bi/epochs.js';

export async function addressesstats_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, true:1 };
        let path = "api/bi/odata/addressesstats";
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

export async function epochsstakes_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, true:1 };
        let path = "api/bi/odata/epochsstakes";
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

export async function poolsstats_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, true:1 };
        let path = "api/bi/odata/poolsstats";
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

export class Bi {
    constructor(client) {
        this.client = client;
        this.pools = new Pools(this.client);
        this.addresses = new Addresses(this.client);
        this.epochs = new Epochs(this.client);
    }

    addressesstats_ = addressesstats_;
    epochsstakes_ = epochsstakes_;
    poolsstats_ = poolsstats_;
}
