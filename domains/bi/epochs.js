'use strict'

import { stakes_, Stakes } from './epochs/stakes.js';

export class Epochs {
    constructor(client) {
        this.client = client;
        this.stakes = new Stakes(this.client);
    }

    stakes_ = stakes_;
}
