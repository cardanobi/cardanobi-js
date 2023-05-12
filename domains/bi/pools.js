'use strict'

import { handleError } from "../../utils/Misc.js";
import { stats_ } from './pools/stats.js';

export async function epochs_(options) {
    return new Promise((resolve, reject) => {
        const { epoch_no, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/bi/pools/stats/epochs/${epoch_no}`;
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

export class Stats {
    constructor(client) {
        this.client = client;
    }

    epochs_ = epochs_;
}

export class Pools {
    constructor(client) {
        this.client = client;
        this.stats = new Stats(this.client);
    }

    stats_ = stats_;
}
