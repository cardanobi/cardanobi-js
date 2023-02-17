'use strict'

import { latest_ } from './blocks/latest.js';
import { history_, History } from './blocks/history.js';
import { Pools } from './blocks/pools.js';
import { transactions_, Transactions } from './blocks/transactions.js';

export class Blocks {
    constructor(client) {
        this.client = client;
        this.history = new History(this.client);
        this.pools = new Pools(this.client);
        this.transactions = new Transactions(this.client);
    }

    latest_ = latest_;
    history_ = history_;
    transactions_ = transactions_;
}
