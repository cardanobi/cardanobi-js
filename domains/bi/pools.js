'use strict'

import { stats_ } from './pools/stats.js';

export class Pools {
    constructor(client) {
        this.client = client;
    }

    stats_ = stats_;
}
