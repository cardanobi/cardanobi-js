'use strict'

import { stats_ } from './addresses/stats.js';

export class Addresses {
    constructor(client) {
        this.client = client;
    }

    stats_ = stats_;
}
