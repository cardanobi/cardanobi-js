'use strict'

import { Pools } from './bi/pools.js';
import { Addresses } from './bi/addresses.js';

export class Bi {
    constructor(client) {
        this.client = client;
        this.pools = new Pools(this.client);
        this.addresses = new Addresses(this.client);
    }
}
