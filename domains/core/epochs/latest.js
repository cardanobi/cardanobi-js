'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function pools_(options) {
    return new Promise((resolve, reject) => {
        const { pool_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/epochs/latest/stakes/pools/${pool_hash}`;
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

export class Stakes {
    constructor(client) {
        this.client = client;
    }

    pools_ = pools_;
}

export class Latest {
    constructor(client) {
        this.client = client;
        this.stakes = new Stakes(this.client);
    }
}