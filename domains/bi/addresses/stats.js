'use strict'

import { handleError } from "../../../utils/Misc.js";
import { epochs_ } from './stats/epochs.js';

export async function stats_(options) {
    return new Promise((resolve, reject) => {
        const { address, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/bi/addresses/stats";
        if (address) path = `api/bi/addresses/${address}/stats`;
        if (odata) path = "api/bi/odata/addressesstats";
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