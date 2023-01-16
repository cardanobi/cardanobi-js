'use strict'

import { stats } from './pools/stats.js';

export class Pools {
    constructor(client) {
        this.client = client;
    }

    stats = stats;
}
