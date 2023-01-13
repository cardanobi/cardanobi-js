'use strict'

import { handleError } from "../../utils/Misc.js";

export async function epochs(id) {
    console.log("epochs.epochs");
    return new Promise((resolve, reject) => {
        this.client.getPrivate(`api/core/epochs/${id}`)
            .then(resp => {
                resolve(resp);
            })
            .catch(err => {
                // reject(handleError(err));
                handleError(err);
            });
    });
}

export async function epochs2(id) {
    return new Promise((resolve, reject) => {
        this.client.getPrivate(`api/core/epochs2?$select=id,start_time&$skip=10`)
            .then(resp => {
                resolve(resp);
            })
            .catch(err => {
                // reject(handleError(err));
                handleError(err);
            });
    });
}