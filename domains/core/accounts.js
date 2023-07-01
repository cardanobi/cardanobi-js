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

export async function staking_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/staking`;
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

export async function delegations_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/delegations`;
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

export async function registrations_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/registrations`;
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

export async function withdrawals_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/withdrawals`;
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

export async function mirs_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/mirs`;
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

export async function addresses_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/addresses`;
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

export async function assets_(options) {
    return new Promise((resolve, reject) => {
        const { stake_address, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/accounts/${stake_address}/assets`;
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
    staking_ = staking_;
    delegations_ = delegations_;
    registrations_ = registrations_;
    withdrawals_ = withdrawals_;
    mirs_ = mirs_;
    addresses_ = addresses_;
    assets_ = assets_;
}
