'use strict'

import { handleError } from "../../utils/Misc.js";
import { latest_, Latest } from './blocks/latest.js';
import { history_, History } from './blocks/history.js';
import { Pools } from './blocks/pools.js';
import { transactions_, Transactions } from './blocks/transactions.js';
import { Epochs } from './blocks/epochs.js';

export class Blocks {
    constructor(client) {
        this.client = client;
        this.history = new History(this.client);
        this.pools = new Pools(this.client);
        this.transactions = new Transactions(this.client);
        this.epochs = new Epochs(this.client);
        this.latest = new Latest(this.client);
    }

    latest_ = latest_;
    history_ = history_;
    transactions_ = transactions_;
}
