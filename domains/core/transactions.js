'use strict'

export async function utxos_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/utxos`;
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

export async function stake_address_registrations_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/stake_address_registrations`;
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
export async function stake_address_delegations_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/stake_address_delegations`;
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

export async function withdrawals_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/withdrawals`;
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

export async function treasury_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/treasury`;
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

export async function reserves_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/reserves`;
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

export async function param_proposals_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/param_proposals`;
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

export async function retiring_pools_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/retiring_pools`;
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

export async function updating_pools_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/updating_pools`;
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

export async function metadata_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/metadata`;
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

export async function assetmints_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/assetmints`;
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

export async function redeemers_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}/redeemers`;
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

    utxos_ = utxos_;
    stake_address_registrations_ = stake_address_registrations_;
    stake_address_delegations_ = stake_address_delegations_;
    withdrawals_ = withdrawals_;
    treasury_ = treasury_;
    reserves_ = reserves_;
    param_proposals_ = param_proposals_;
    retiring_pools_ = retiring_pools_;
    updating_pools_ = updating_pools_;
    metadata_ = metadata_;
    assetmints_ = assetmints_;
    redeemers_ = redeemers_;
}
