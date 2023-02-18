'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function slots_(options) {
    return new Promise((resolve, reject) => {
        const { epoch_no, slot_no, query, odata } = options || { undefined, undefined, undefined, undefined, undefined };
        let path = `api/core/blocks/epochs/${epoch_no}/slots/${slot_no}`;
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
    }

    slots_ = slots_;
}