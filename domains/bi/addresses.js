'use strict'

import { handleError } from "../../utils/Misc.js";
import { stats_, Stats } from './addresses/stats.js';

export class Addresses {
    constructor(client) {
        this.client = client;
        this.stats = new Stats(this.client);
    }

    stats_ = stats_;
}
