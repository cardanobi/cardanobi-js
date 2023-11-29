'use strict'
import { CardanoBI } from '../CardanoBI.js'
import * as dotenv from 'dotenv';

dotenv.config();

const CBI = await new CardanoBI({
    apiKey: process.env.CBI_API_KEY,
    apiSecret: process.env.CBI_API_SECRET,
    network:  process.env.CBI_EN
  });

const block = await CBI.core.blocks.latest_();
console.log(block);
console.log(CBI.client.accessToken);