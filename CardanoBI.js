'use strict'

import { APIClient } from './utils/APIClient.js';
import { Bi } from './domains/bi.js';
import { Core } from './domains/core.js';

// export default class CardanoBI {
export class CardanoBI {
    constructor(options) {
        return (async () => {
            const { apiKey, apiSecret, baseURL, idsBaseURL, logger, timeout, proxy, httpsAgent } = options || {};

            this.client = new APIClient(options);
            await this.client.init();

            this.bi = new Bi(this.client);
            this.core = new Core(this.client);
            return this;
        })();
    }
}

// module.exports = CardanoBI