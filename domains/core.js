'use strict'

import { handleError } from "../utils/Misc.js";
import { Epochs } from './core/epochs.js';
import { Addresses } from './core/addresses.js';
import { Pools } from './core/pools.js';
import { Blocks } from './core/blocks.js';
import { Transactions } from './core/transactions.js';

export async function epochs_(options) {
    return new Promise((resolve, reject) => {
        const { no, query, odata } = options || { undefined, undefined, undefined };
        let path = "api/core/epochs";
        if (odata) path = "api/core/odata/epochs";
        if (no) path = path + "/" + no;
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

export async function epochsparams_(options) {
    return new Promise((resolve, reject) => {
        const { no, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/epochsparams";
        if (no) path = path + "/" + no;
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

export async function epochsstakes_(options) {
    return new Promise((resolve, reject) => {
        const { epoch_no, pool_hash, query, odata } = options || { undefined, undefined, undefined, true: 1 };
        let queryParams = ["epoch_no", "pool_hash"];
        let query_ = queryParams.filter(e => eval(e)).map(e => e + "=" + eval(e)).join("&");
        if (query) query_ = `${query_}&${query}`;

        let path = "api/core/odata/epochsstakes";
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

export async function poolshashes_(options) {
    return new Promise((resolve, reject) => {
        const { query, odata } = options || { undefined, true:1 };
        let path = "api/core/odata/poolshashes";
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

export async function poolsmetadata_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/poolsmetadata";
        if (pool_id) path = `api/core/odata/poolsmetadata/${pool_id}`;
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

export async function poolsofflinedata_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/poolsofflinedata";
        if (pool_id) path = `api/core/odata/poolsofflinedata/${pool_id}`;
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

export async function poolsofflinefetcherrors_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/poolsofflinefetcherrors";
        if (pool_id) path = `api/core/odata/poolsofflinefetcherrors/${pool_id}`;
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

export async function poolsupdates_(options) {
    return new Promise((resolve, reject) => {
        const { pool_id, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/poolsupdates";
        if (pool_id) path = `api/core/odata/poolsupdates/${pool_id}`;
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

export async function poolsrelays_(options) {
    return new Promise((resolve, reject) => {
        const { update_id, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/poolsrelays";
        if (update_id) path = `api/core/odata/poolsrelays/${update_id}`;
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

export async function addressesinfo_(options) {
    return new Promise((resolve, reject) => {
        const { address, query, odata } = options || { undefined, undefined, true:1 };
        let path = "api/core/odata/addressesinfo";
        if (address) path = path + "/" + address;
        
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

export async function blocks_(options) {
    return new Promise((resolve, reject) => {
        const { block_no, block_hash, epoch_no, slot_no, query, odata } = options || { undefined, undefined, undefined, undefined, undefined, undefined };
        let path = "api/core/blocks";
        if (block_no) path = path + "/" + block_no;
        else if (block_hash) path = path + "/" + block_hash;
        else if (epoch_no && slot_no) path = "api/core/blocks/epochs/"+epoch_no+"/slots/"+slot_no;
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

export async function transactions_(options) {
    return new Promise((resolve, reject) => {
        const { transaction_hash, query, odata } = options || { undefined, undefined, undefined };
        let path = `api/core/transactions/${transaction_hash}`;
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

export class Core {
    constructor(client) {
        this.client = client;

        this.epochs = new Epochs(client);
        this.addresses = new Addresses(client);
        this.pools = new Pools(client);
        this.blocks = new Blocks(this.client);
        this.transactions = new Transactions(this.client);
    }

    epochs_ = epochs_;
    epochsparams_ = epochsparams_;
    epochsstakes_ = epochsstakes_;
    poolshashes_ = poolshashes_;
    poolsmetadata_ = poolsmetadata_;
    poolsofflinedata_ = poolsofflinedata_;
    poolsofflinefetcherrors_ = poolsofflinefetcherrors_;
    poolsupdates_ = poolsupdates_;
    poolsrelays_ = poolsrelays_;
    addressesinfo_ = addressesinfo_;
    blocks_ = blocks_;
    transactions_ = transactions_;
}
