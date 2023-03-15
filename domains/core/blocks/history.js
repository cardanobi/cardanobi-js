'use strict'

import { handleError } from "../../../utils/Misc.js";

export async function history_(options) {
    return new Promise((resolve, reject) => {
        const { block_no, depth, query, odata } = options || { undefined, undefined, undefined, undefined };
        let queryParams = ["block_no", "depth"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = "api/core/blocks/history";

        if (odata) {
            path = "api/core/odata/blocks";
        }

        if (query_) path = path + "?" + query_;

        console.log(path);

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

export async function prev_(options) {
    return new Promise((resolve, reject) => {
        const { block_no, depth, query, odata } = options || { undefined, undefined, undefined, undefined };
        let queryParams = ["depth"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = "api/core/blocks/history/prev";
        if (block_no) path = path + "/" + block_no
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

export async function next_(options) {
    return new Promise((resolve, reject) => {
        const { block_no, depth, query, odata } = options || { undefined, undefined, undefined, undefined };
        let queryParams = ["depth"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = "api/core/blocks/history/next";
        if (block_no) path = path + "/" + block_no
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

export async function pools_(options) {
    return new Promise((resolve, reject) => {
        const { pool_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/blocks/history/pools/${pool_hash}`;
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

export class History {
    constructor(client) {
        this.client = client;
    }

    prev_ = prev_;
    next_ = next_;
    pools_ = pools_;
}