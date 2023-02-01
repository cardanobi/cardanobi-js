'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function info_(options) {
    return new Promise((resolve, reject) => {
        const { address, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/addresses/info";
        if (address) path = `api/core/addresses/${address}/info`;

        if (odata) {
            path = "api/core/odata/addressesinfo";
            if (address) path = path + "/" + address;
        }
        
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