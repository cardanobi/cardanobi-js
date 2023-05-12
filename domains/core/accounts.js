'use strict'

import { handleError } from "../../utils/Misc.js";

export async function rewards_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/rewards`;
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

export class Accounts {
    constructor(client) {
        this.client = client;
    }

    rewards_ = rewards_;
}
