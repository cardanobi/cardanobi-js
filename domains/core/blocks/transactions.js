'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function latest_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, undefined };
        let path = "api/core/blocks/latest/transactions";
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

export async function transactions_(options) {
    return new Promise((resolve, reject) => {
        const { block_no, block_hash, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "";
        if (block_no) path = "api/core/blocks/"+block_no+"/transactions";
        else if (block_hash) path = "api/core/blocks/"+block_hash+"/transactions";
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

export class Transactions {
    constructor(client) {
        this.client = client;
    }

    latest_ = latest_;
}