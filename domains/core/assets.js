'use strict'

export async function history_(options) {
    return new Promise((resolve, reject) => {
        const { fingerprint, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/assets/${fingerprint}/history`;
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

export async function transactions_(options) {
    return new Promise((resolve, reject) => {
        const { fingerprint, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/assets/${fingerprint}/transactions`;
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
        let { fingerprint, order, page_no, page_size, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        if (!query) query = "orderby=quantity asc";
        let queryParams = ["order", "page_no", "page_size"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = `api/core/assets/${fingerprint}/addresses`;
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

export async function policies_(options) {
    return new Promise((resolve, reject) => {
        const { policy_hash, query, odata } = options || { undefined, undefined, undefined };

        let path = `api/core/assets/policies/${policy_hash}`;
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


export class Assets {
    constructor(client) {
        this.client = client;
    }

    history_ = history_;
    transactions_ = transactions_;
    addresses_ = addresses_;
    policies_ = policies_;
}
