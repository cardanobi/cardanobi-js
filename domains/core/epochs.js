'use strict'

import { params_ } from './epochs/params.js';

export class Epochs {
    constructor(client) {
        this.client = client;
    }

    params_ = params_;
}
