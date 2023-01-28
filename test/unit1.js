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

const runZeroCitizen = async () => {
  try {
    const latestEpoch = await CBI.core.epochs_({ query: "$select=id&$orderby=no desc&$top=1" });
    console.log(latestEpoch);

    let currentEpochNo = latestEpoch[0].id;
    let startEpochNo = currentEpochNo - 11;

    let filter = `$count=true&$filter=epoch_no gt ${startEpochNo} and epoch_no lt ${currentEpochNo}`;
    console.log("filter: ", filter);

    let stats = await CBI.bi.pools.stats_({ query: filter, odata: true });
    console.log(stats);
    console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const runUnit3 = async () => {
  try {
    // const activity = await CBI.bi.pools.activity({query: "$apply=filter(epoch_no gt 29 and epoch_no lt 32)/groupby((pool_hash), aggregate(tx_count with sum as tx_count))", odata: true});
    // const activity = await CBI.bi.pools.activity({query: "$apply=aggregate($count as total)", odata: true});
    // console.log(activity);
    console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testBIAddresses = async () => {
  try {
    // const stats = await CBI.bi.addresses.stats_();
    // const stats = await CBI.bi.addresses.stats_({query: "$filter=epoch_no gt 28 and epoch_no lt 31&$orderby=tx_count desc"});
    // const stats = await CBI.bi.addresses.stats_({query: "$filter=epoch_no gt 28 and epoch_no lt 31&$orderby=tx_count desc", odata: true});
    // const stats = await CBI.bi.addresses.stats_({stake_address: "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz"});
    const stats = await CBI.bi.addresses.stats_({epoch_no: 29});
    console.log(stats);
    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testCoreEpochs = async () => {
  try {
    // const epochs = await CBI.core.epochs_();
    // const epochs = await CBI.core.epochs_({no: 30});
    // const epochs = await CBI.core.epochs_({odata: true});
    // const epochs = await CBI.core.epochs_({no: 30, odata: true});
    const epochs = await CBI.core.epochs_({no: 30, odata: true, query: "$select=no,out_sum,fees,tx_count,blk_count"});

    console.log(epochs);
    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testCoreEpochsParams = async () => {
  try {
    // const epochs_params = await CBI.core.epochs.params_();
    // const epochs_params = await CBI.core.epochs.params_({no: 30});
    // const epochs_params = await CBI.core.epochs.params_({odata: true});
    // const epochs_params = await CBI.core.epochs.params_({no: 30, odata: true});
    const epochs_params = await CBI.core.epochs.params_({no: 30, odata: true, query: "$select=epoch_no,nonce"});

    console.log(epochs_params);
    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testDynamicCalls = async () => {
  try {
    // const epochs_params = await CBI.core.epochs.params_();
    // const epochs_params = await CBI.core.epochs.params_({no: 30});
    // const epochs_params = await CBI.core.epochs.params_({odata: true});
    // const epochs_params = await CBI.core.epochs.params_({no: 30, odata: true});
    const domainName = "core";
    const objName = "epochs";
    const funcName = "params_";

    const epochs_params = await CBI[domainName][objName][funcName]({ no: 30, odata: true, query: "$select=epoch_no,nonce" });
    // const epochs_params = await CBI.core.epochs.params_({no: 30, odata: true, query: "$select=epoch_no,nonce"});

    console.log(epochs_params);
    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}


// runUnit1();
// runZeroCitizen();
// runUnit3();
// testBIAddresses();
// testCoreEpochs();
// testCoreEpochsParams();
// testDynamicCalls();

// const epochs_params = await CBI.core.epochs.params_({no: 31, odata: true, query: "$select=epoch_no,nonce"});
const epochs_params = await CBI.core.epochs.params_();

console.log(epochs_params);
