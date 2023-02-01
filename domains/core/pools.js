'use strict'

import { hashes_ } from './pools/hashes.js';
import { metadata_ } from './pools/metadata.js';
import { offlinedata_ } from './pools/offlinedata.js';
import { offlinefetcherrors_ } from './pools/offlinefetcherrors.js';
import { updates_ } from './pools/updates.js';
import { relays_ } from './pools/relays.js';

export class Pools {
    constructor(client) {
        this.client = client;
    }

    hashes_ = hashes_;
    metadata_ = metadata_;
    offlinedata_ = offlinedata_;
    offlinefetcherrors_ = offlinefetcherrors_;
    updates_ = updates_;
    relays_ = relays_;
}
