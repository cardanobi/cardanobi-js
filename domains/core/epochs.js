'use strict'

import { handleError } from "../../utils/Misc.js";
import { params_, Params } from './epochs/params.js';
import { stakes_, Stakes } from './epochs/stakes.js';
import { Latest } from './epochs/latest.js';

export async function latest_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/core/epochs/latest";
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

export class Epochs {
    constructor(client) {
        this.client = client;
        this.stakes = new Stakes(this.client);
        this.params = new Params(this.client);
        this.latest = new Latest(this.client);
    }

    params_ = params_;
    stakes_ = stakes_;
    latest_ = latest_;
}
