'use strict'

import { stakes_ } from './epochs/stakes.js';

export class Epochs {
    constructor(client) {
        this.client = client;
    }

    stakes_ = stakes_;
}
