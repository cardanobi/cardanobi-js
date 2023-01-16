'use strict'

import { Pools } from './bi/pools.js';

export class Bi {
    constructor(client) {
        this.client = client;
        this.pools = new Pools(this.client);
    }
}
