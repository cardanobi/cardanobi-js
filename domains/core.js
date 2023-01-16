'use strict'

import { epochs } from './core/epochs.js';

export class Core {
    constructor(client) {
        this.client = client;
    }

    epochs = epochs;
}
