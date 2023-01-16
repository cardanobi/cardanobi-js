'use strict'
import { CardanoBI } from '../CardanoBI.js'
// import { CardanoBI } from '@cardanobi/cardanobi-js';

const CBI = await new CardanoBI({ apiKey: "*******", apiSecret: "******", network: "preprod" });

const runUnit1 = async () => {
    try {
        // const latestEpoch = await CBI.core.epochs({query: "$select=id,start_time&$orderby=no desc&$top=1"});
        // console.log(latestEpoch);

        // const epoch30 = await CBI.core.epochs({id: 30});
        // console.log(epoch30);

        // const last5Epochs = await CBI.core.epochs({query: "$top=5&$orderby=no desc&$count=true", odata: true});
        // console.log(last5Epochs);
      } catch (error) {
        console.error(error);
      }
}

const runUnit2 = async () => {
    try {
        const latestEpoch = await CBI.core.epochs({query: "$select=id&$orderby=no desc&$top=1"});
        console.log(latestEpoch);

        let currentEpochNo = latestEpoch[0].id;
        let startEpochNo = currentEpochNo - 11;

        let filter = `$count=true&$filter=epoch_no gt ${startEpochNo} and epoch_no lt ${currentEpochNo}`;
        console.log("filter: ", filter);

        const stats = await CBI.bi.pools.stats({query: filter, odata: true});
        console.log(stats);
      } catch (error) {
        console.error(error);
      }
}

const runUnit3 = async () => {
    try {
        const activity = await CBI.bi.pools.activity({query: "$apply=filter(epoch_no gt 29 and epoch_no lt 32)/groupby((pool_hash), aggregate(tx_count with sum as tx_count))", odata: true});
        // const activity = await CBI.bi.pools.activity({query: "$apply=aggregate($count as total)", odata: true});
        console.log(activity);
      } catch (error) {
        console.error(error);
      }
}

// runUnit1();
runUnit2();
// runUnit3();
