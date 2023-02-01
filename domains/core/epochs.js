'use strict'

import { params_ } from './epochs/params.js';
import { stakes_, Stakes } from './epochs/stakes.js';

export class Epochs {
    constructor(client) {
        this.client = client;
        this.stakes = new Stakes(this.client);
    }

    params_ = params_;
    stakes_ = stakes_;
}
