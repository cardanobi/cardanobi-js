'use strict'

import { handleError } from "../../../../utils/Misc.js";

export async function epochs_(options) {
    return new Promise((resolve, reject) => {
        const { epoch_no, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/bi/addresses/stats/epochs/";
        if (epoch_no) path = `api/bi/addresses/stats/epochs/${epoch_no}`;
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