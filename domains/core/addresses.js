'use strict'

import { info_ } from './addresses/info.js';

export class Addresses {
    constructor(client) {
        this.client = client;
    }

    info_ = info_;
}
