'use strict'

import { APIClient } from './utils/APIClient.js';
import { epochs, epochs2 } from './domains/core/epochs.js';

// export default class CardanoBI {
export class CardanoBI {
    constructor(options) {
        return (async () => {
            const { apiKey, apiSecret, baseURL, idsBaseURL, logger, timeout, proxy, httpsAgent } = options;

            this.client = new APIClient(options);
            await this.client.init();
            return this;
        })();
    }

    epochparams(id) {
        return this.client.getPublic("https://preprod.cardanobi.io:4000", `api/core/epochs/${id}/params`)
    }

    epochs = epochs;
    epochs2 = epochs2;

    getAccessToken = async () => {
        const accessToken = await this.client.getAccessToken();
        console.log("CardanoBI.getAccessToken: ", accessToken);
        return accessToken;
    }
}

// module.exports = CardanoBI