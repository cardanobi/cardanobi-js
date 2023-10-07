'use strict'
import { CardanoBI } from '../CardanoBI.js'

const CBI = await new CardanoBI({
    apiKey: "b37d3277-e695-4e55-a675-276e113393da",
    apiSecret: "103106cc-609e-4503-a7d5-bf711cc06245"
});

const block = await CBI.core.blocks.latest_();
console.log(block);
console.log(CBI.client.accessToken);