'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function stats_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, epoch_no, query, odata } = options || { undefined, undefined, undefined, undefined };
        let path = "api/bi/addresses/stats";
        if (stake_address) path = `api/bi/addresses/${stake_address}/stats`;
        if (epoch_no) path = `api/bi/addresses/stats/epochs/${epoch_no}`;
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