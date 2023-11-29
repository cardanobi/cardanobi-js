'use strict'
import { CardanoBI } from '../CardanoBI.js'
import * as dotenv from 'dotenv';

dotenv.config();

const CBI = await new CardanoBI({
  apiKey: process.env.CBI_API_KEY,
  apiSecret: process.env.CBI_API_SECRET,
  network:  process.env.CBI_EN
});

const staking = await CBI.core.accounts.staking_({ stake_address: 'stake1uy74ctcycru2rjahzkn5tlvq577xzqz5e3rv8z7684ugpvq4gcjjt', query: '$orderby=epoch_no desc&$top=5' });
console.log(staking);

