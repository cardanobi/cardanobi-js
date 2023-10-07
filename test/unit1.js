'use strict'
import { CardanoBI } from '../CardanoBI.js'
// import { CardanoBI } from '@cardanobi/cardanobi-js';

// const CBI = await new CardanoBI({ apiKey: "*******", apiSecret: "******", network: "preprod" });
// const CBI = await new CardanoBI({ apiKey: "SWZibUPx6EtqSq", apiSecret: "Hxke6IXAx4U", network: "preprod" });
// const CBI = await new CardanoBI({ apiKey: "client_auto_2", apiSecret: "test", network: "preprod" });
// const CBI = await new CardanoBI({ apiKey: "c1cbf4b7-4281-46fb-b834-4e21b7fd8cd3", apiSecret: "cdee85fc-5ec5-48d8-bfa5-ea9585013399", network: "preprod" });
// const CBI = await new CardanoBI({ apiKey: "CardanoBI.Portal.DuendeClient", apiSecret: "db9f9a2d-4cc3-79b8-7110-2049e5c4b159", network: "preprod" });
// const CBI = await new CardanoBI({ network: "preprod" });
// const CBI = await new CardanoBI();
// const CBI = await new CardanoBI({ apiKey: "new_preprod_client", apiSecret: "secret", network: "preprod" });
// const CBI = await new CardanoBI({ apiKey: "cardanobi_identity_admin", apiSecret: "cardanobi_admin_client_secret"});
// const CBI = await new CardanoBI({ apiKey: "cardanobi_identity_admin", apiSecret: "cardanobi_admin_client_secret", network: "preprod"});
// const CBI = await new CardanoBI({ apiKey: "new_auto_admin", apiSecret: "secret", network: "preprod"});
// const CBI = await new CardanoBI({ apiKey: "508e2ca9-ac96-46bb-8451-991ff54e2a12", apiSecret: "4b29b4b4-1534-4db6-bb1c-17b2f9e2908a"}); //zerocitizen-mainnet
// const CBI = await new CardanoBI({ apiKey: "lv74Wh9rf6vMOD3TDDyalgUejXEKN67k739E4l5U4E", apiSecret: "Kyt9OMzjT7alzL8vwrWi7TThanTSpAwIDsZ423Rns"}); //Fetachain
// const CBI = await new CardanoBI({ apiKey: "hOhzauQkioPQtsiPwfHSt9xdwQxWZVa9BuMdoOHIg", apiSecret: "D71dCpk1J0meVDQn2T5MXbO8d9EdSHrQduuIWzZ8" }); //CardanoBI Admin

const CBI = await new CardanoBI({ apiKey: "d950125e-f6a3-4878-b173-e0866aa54018", apiSecret: "a6bc4f6c-1d63-4733-a5f4-57f8d051fe12", network: "preprod" }); //CardanoBI Admin on preprod
// const CBI = await new CardanoBI({ apiKey: "f6014ce4-59f8-42cc-ac12-f94d7cc6d3fc", apiSecret: "bf385c0f-d9e7-407d-8c3a-7b8ce792c9a6"}); //CardanoBI Admin on mainnet


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
    if (CBI.client.network == "preprod") {
      const latestEpoch = await CBI.core.epochs_({ query: "$select=id&$orderby=no desc&$top=1" });
      console.log(latestEpoch);

      let currentEpochNo = latestEpoch[0].id;
      let startEpochNo = currentEpochNo - 11;

      let filter = `$count=true&$filter=epoch_no gt ${startEpochNo} and epoch_no lt ${currentEpochNo}`;
      console.log("filter: ", filter);

      let stats = await CBI.bi.pools.stats_({ query: filter, odata: true });
      console.log("stats: ", stats);

      console.log("\nSome address info: ");
      let addr_info = await CBI.core.addresses.info_({ address: "addr_test1qpnzw30mp2n5c6kuwecjlljnynq0yzq7kffnlpt5twy0vrs2z3xlcw9u4z5ygx4lc6r0l677d9204ynkyh3l78q2klqs0287jk", odata: true });
      console.log(addr_info);
      
      addr_info = await CBI.core.addresses.info_({ address: "stake_test1uq9pgn0u8z7232zyr2ludphla00xj486jfmztcllrs9t0sg6ng8nd", odata: true });
      console.log(addr_info);

      addr_info = await CBI.core.addresses.info_({ address: "addr_test1wpw2m7va38s3472pk6wn0sxruj92k4fk6mte6ahqlyz8x0gwfhqy9", odata: true });
      console.log(addr_info);
    } else if (CBI.client.network == "mainnet") {
        const latestEpoch = await CBI.core.epochs_({ query: "$select=id&$orderby=no desc&$top=1" });
        console.log(latestEpoch);
  
        let currentEpochNo = latestEpoch[0].id;
        let startEpochNo = currentEpochNo - 11;
  
        let filter = `$count=true&$filter=epoch_no gt ${startEpochNo} and epoch_no lt ${currentEpochNo} and pool_hash eq 'pool10cqp98vsdtam5p4xkfuleahy99vcdggsfdl4cszxcefmcheexma'`;
        console.log("filter: ", filter);
  
        let stats = await CBI.bi.pools.stats_({ query: filter, odata: true });
        console.log("stats: ", stats);
  
        console.log("\nSome address info: ");
        let addr_info = await CBI.core.addresses.info_({ address: "addr1qyyc97lwzpvsgnywpf2awx2dylzgkta36j8fevpncf2yvdh62pqk8h92xe3rdgywnnhpujly5cykywmjk4d73mdwns0sem8e5r", odata: true });
        console.log(addr_info);
        
        addr_info = await CBI.core.addresses.info_({ address: "stake1u8a9qstrmj4rvc3k5z8fems7f0j2vztz8det2klgakhfc8ce79fma", odata: true });
        console.log(addr_info);
    }
  } catch (error) {
    console.error(error);
  }
}

const runUnit3 = async () => {
  try {
    // const activity = await CBI.core.pools.activity({query: "$apply=filter(epoch_no gt 29 and epoch_no lt 32)/groupby((pool_hash), aggregate(tx_count with sum as tx_count))", odata: true});
    // const activity = await CBI.core.pools.activity({query: "$apply=aggregate($count as total)", odata: true});
    // console.log(activity);
    console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testBIAddresses = async () => {
  try {
    // const stats = await CBI.bi.addresses.stats_({address: "stake_test1urmpqeeexrkyjna48lmsx30a8auy4s0p40u2n9ugx8hdrfgfl3r44", query: "epoch_no_min=51&epoch_no_max=51"});
    const stats = await CBI.bi.addresses.stats_({address: "stake1u8vvxf5jhnudxu74zuvwna5fdth9lnz20zz5y23ksck5jegcp28s3", query: "epoch_no_min=402&epoch_no_max=438&order=desc&page_size=50&page_no=4"});
    // const stats = await CBI.core.addresses.stats_({query: "$filter=epoch_no gt 28 and epoch_no lt 31&$orderby=tx_count desc", odata: true});
    // const stats = await CBI.core.addresses.stats_({stake_address: "stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz"});
    // const stats = await CBI.core.addresses.stats_({epoch_no: 29});
    // const stats = await CBI.core.addressesstats_();
    // const stats = await CBI.bi.addressesstats_({address: "addr1v9ywm0h3r8cnxrs04gfy7c3s2j44utjyvn5ldjdca0c2ltccgqdes", query: "order=asc&page_size=50&page_no=1", odata: true});
    console.log(stats);

    // const stats = await CBI.bi.addressesstats_({odata: true, stake_address: "stake1788l48tts8s3l9fgx3k9tfnkgssf34hsztqsz5hp48fhupgdy8sy9"});
    // console.log(stats);

    // console.log(CBI.client.accessToken);

    // const stats = await CBI.core.addresses.stats.epochs_({epoch_no: 30});
    // console.log(stats);
  } catch (error) {
    console.error(error);
  }
}

const testBIEpochs = async () => {
  try {
    // const stakes = await CBI.core.epochs.stakes_();
    // const stakes = await CBI.core.epochs.stakes_({no: 30});
    // const stakes = await CBI.core.epochs.stakes_({pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    // const stakes = await CBI.core.epochs.stakes_({no: 30, pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    // const stakes = await CBI.core.epochs.stakes_({odata: true});
    // const stakes = await CBI.core.epochsstakes_();
    // console.log(stakes);

    // const stakes = await CBI.core.epochs.stakes.pools_({pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    const stakes = await CBI.core.epochs.stakes.pools_({no: 30, pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    console.log(stakes);

    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testBIPools = async () => {
  try {
    // preprod
    // const stats = await CBI.bi.pools.stats_({ pool_hash: 'pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r', query: "$orderby=epoch_no desc&$top=5" });
    // const stats = await CBI.bi.pools.stats.epochs_({ epoch_no: 98, query: "$orderby=delegated_stakes desc" });
    const stats = await CBI.bi.pools.stats.lifetime_({ pool_hash: 'pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r'});

    // const stats = await CBI.bi.pools.stats_({ pool_hash: 'pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r', query: "$orderby=epoch_no desc&$filter=epoch_no gt 26 and epoch_no le 95&$top=50&skip=50&$count=true" });
    // const stats = await CBI.bi.poolsstats_({ pool_hash: 'pool132jxjzyw4awr3s75ltcdx5tv5ecv6m042306l630wqjckhfm32r', query: "$orderby=epoch_no desc&$filter=epoch_no gt 26 and epoch_no le 95&$top=50&skip=0&$count=true", odata: true });
    console.log(stats);

    // mainnet
    // const stats = await CBI.bi.pools.stats_({ pool_hash: 'pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc', query: "$orderby=epoch_no desc&$filter=epoch_no gt 420 and epoch_no le 437&$top=10&skip=0&$count=true" });
    // const stats = await CBI.bi.poolsstats_({ pool_hash: 'pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc', query: "$orderby=epoch_no desc&$filter=epoch_no gt 26 and epoch_no le 95&$top=50&skip=0&$count=true", odata: true });
    // console.log(stats);

  } catch (error) {
    console.error(error);
  }
}


const testCoreAddresses = async () => {
  try {
    // const addr_info = await CBI.core.addresses.info_();
    // const addr_info = await CBI.core.addresses.info_({ address: "stake_test1uqpuy4l076l65h02mccw38dfa8dstgl93aed2u9723wxw3ch5a6g3"});
    const addr_info = await CBI.core.addresses.info_({ address: "addr1q8yydh977qedwzhk4elqq04654639hhdda0wju8n73wnr77ccvnf908c6dea29cca8mgj6hwtlxy57y9gg4rdp3df9js2xk28l"});
    // const addr_info = await CBI.core.addresses.info_({odata: true});
    // const addr_info = await CBI.core.addressesinfo_();
    console.log(addr_info);

    const addr_info2 = await CBI.core.addresses.info_({ address: "addr1v9ywm0h3r8cnxrs04gfy7c3s2j44utjyvn5ldjdca0c2ltccgqdes"});
    // const addr_info = await CBI.core.addresses.info_({odata: true});
    // const addr_info = await CBI.core.addressesinfo_();
    console.log(addr_info2);

    // const addresses = await CBI.core.accounts.addresses_({stake_address: 'stake_test1uqpuy4l076l65h02mccw38dfa8dstgl93aed2u9723wxw3ch5a6g3'});
    // console.log(addresses);

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
    // const epochs = await CBI.core.epochs_({no: 30, odata: true, query: "$select=no,out_sum,fees,tx_count,blk_count"});
    // console.log(epochs);

    // const epochs = await CBI.core.epochs.latest_();
    // console.log(epochs);

    // const stakes = await CBI.core.epochs.stakes_();
    // const stakes = await CBI.core.epochs.stakes_({no: 30});
    // const stakes = await CBI.core.epochs.stakes_({pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    // const stakes = await CBI.core.epochs.stakes_({no: 30, pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    // const stakes = await CBI.core.epochs.stakes_({ odata: true, epoch_no: 390, pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc" });
    // console.log(stakes);

    // const stakes = await CBI.core.epochsstakes_({epoch_no:399, pool_hash: 'pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc'});
    // console.log(stakes);

    const stakes = await CBI.core.epochs.latest.stakes.pools_({pool_hash: 'pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc', query: "$orderby=epoch_stake_amount desc&$top=3"});
    console.log(stakes);

    // const stakes = await CBI.core.epochs.stakes.pools_({pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    // const stakes = await CBI.core.epochs.stakes.pools_({no: 30, pool_hash: 'pool17lr0zh49w3leg4ya0ndkyea0dmpr8ksnqz5mhdpwn8zxqg56tte'});
    // console.log(stakes);

    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testCorePools = async () => {
  try {
    // const hashes = await CBI.core.pools.hashes_();
    // const hashes = await CBI.core.pools.hashes_({odata: true});
    // const hashes = await CBI.core.poolshashes_();
    // console.log(hashes);

    // const meta = await CBI.core.pools.metadata_();
    // const meta = await CBI.core.pools.metadata_({pool_id: 23});
    // const meta = await CBI.core.pools.metadata_({meta_hash: '80150c19f52a879e710e6cab95cb0508c5c39f7b8ca477716ceccaa7f6a9bf9f'});
    // const meta = await CBI.core.pools.metadata_({pool_id: 23, odata: true});
    // const meta = await CBI.core.poolsmetadata_({ pool_id: 23 });
    // console.log(meta);

    // const meta = await CBI.core.pools.metadata.hashes_({meta_hash: 'ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5'});
    // const meta = await CBI.core.pools.metadata.offlinedata_({meta_hash: 'ac5fbc53a3d1493b5ba0ea1772fd5d4fda3cd72ba89503ff2261a39052fcd2f5'});
    // const meta = await CBI.core.pools.metadata.offlinedata_(); //todo manage mandatory options exception messages
    // console.log(meta);


    // const data = await CBI.core.pools.offlinedata_();
    // const data = await CBI.core.pools.offlinedata_({pool_id: 23});
    // const data = await CBI.core.pools.offlinedata_({meta_hash: '80150c19f52a879e710e6cab95cb0508c5c39f7b8ca477716ceccaa7f6a9bf9f'});
    // const data = await CBI.core.pools.offlinedata_({pool_id: 23, odata: true});
    // const data = await CBI.core.poolsofflinedata_({pool_id: 23});
    // console.log(data);

    // const errors = await CBI.core.pools.offlinefetcherrors_();
    // const errors = await CBI.core.pools.offlinefetcherrors_({pool_id: 54});
    // const errors = await CBI.core.pools.offlinefetcherrors_({pool_id: 54, odata: true});
    // const errors = await CBI.core.poolsofflinefetcherrors_({ pool_id: 54 });
    // console.log(errors);

    // const updates = await CBI.core.pools.updates_();
    // const updates = await CBI.core.pools.updates_({pool_id: 17});
    // const updates = await CBI.core.pools.updates_({vrf_key_hash: 'ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd'});
    // const updates = await CBI.core.pools.updates_({odata: true, query: "$filter=vrf_key_hash_hex eq 'ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd'"});
    // const updates = await CBI.core.pools.updates_({pool_id: 17, odata: true});
    // const updates = await CBI.core.poolsupdates_({ pool_id: 17 });
    // console.log(updates);

    // const relays = await CBI.core.pools.relays_();
    // const relays = await CBI.core.pools.relays_({update_id: 2});
    // const relays = await CBI.core.pools.relays_({vrf_key_hash: 'ff9d774cc7e3e85ec1827bfd68c475bc611a9e288e7c9e1fb159fce52d2703fd'});
    // const relays = await CBI.core.pools.relays_({ odata: true, query: "$filter=update_id eq 18"});
    // const relays = await CBI.core.poolsrelays_({update_id: 18});
    // console.log(relays);
    
    // const relays = await CBI.core.pools.relays.updates_();
    const relays = await CBI.core.pools.relays.updates_({update_id: 2});
    console.log(relays);

    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testCoreBlocks = async () => {
  try {
    // const blocks = await CBI.core.blocks.latest_();
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.latest.pools_({pool_hash: "22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.latest.transactions_();
    // console.log(blocks);

    // const blocks = await CBI.core.blocks_({block_no: 8411688});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks_({block_hash: "e7fe2b1a9c970f7b073216e7d526c91eed132687e615a267a088bdab329bd1b9"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks_({epoch_no: 394, slot_no: 85090478});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.epochs.slots_({epoch_no: 394, slot_no: 85090478});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.history_();
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.history_({block_no: 8411721, depth: 4, odata: true, query: "$orderby=id desc&$select=id,hash,epoch_no,block_no"});
    // console.log(blocks);

    const blocks = await CBI.core.blocks.history_({odata: true, depth: 5});
    console.log(blocks);

    // const blocks = await CBI.core.blocks.history.prev_({block_no: 8411720, depth: 2, query: "$orderby=id desc"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.history.next_({block_no: 8411720, depth: 3, query: "$orderby=id desc"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.pools.latest_({pool_hash: "22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.pools.latest_({pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.pools.history_({pool_hash: "22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395", query: "skip=231"});
    // const blocks = await CBI.core.blocks.pools.history_({pool_hash: "22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395", query: "orderby=id desc"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.pools.history_({pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc", query: "skip=231"});
    // const blocks = await CBI.core.blocks.pools.history_({pool_hash: "pool1y24nj4qdkg35nvvnfawukauggsxrxuy74876cplmxsee29w5axc", query: "orderby=id desc"});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.transactions.latest_();
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.transactions_({block_no: 8411811});
    // console.log(blocks);

    // const blocks = await CBI.core.blocks.transactions_({block_hash: "1a0210957f7f6d731996343f7139eae3cf0bb2afa661fc6b1cc2e07b8d614bab"});
    // console.log(blocks);

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
    // const epochs_params = await CBI.core.epochs.params_({no: 30, odata: true, query: "$select=epoch_no,nonce"});

    const epochs_params = await CBI.core.epochs.params.latest_();
    console.log(epochs_params);
  } catch (error) {
    console.error(error);
  }
}

const testCoreOdataEpochsParams = async () => {
  try {
    // const epochs_params = await CBI.core.epochsparams_();
    // const epochs_params = await CBI.core.epochsparams_({no: 30});
    const epochs_params = await CBI.core.epochsparams_({query: "$count=true"});

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

const testTransactions = async () => {
  try {
    // const txs = await CBI.core.transactions_({transaction_hash: "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.utxos_({transaction_hash: "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.stake_address_registrations_({transaction_hash: "13919fc14338f13fa10497293f709f9c12c6275c5b38baa0c60786ffdd51bebb"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.stake_address_delegations_({transaction_hash: "e963b50c5a1078f0fbe11c375d047af3a1b2112538ed6cf852809ebbf4dd8440"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.withdrawals_({transaction_hash: "cb44c5dd07ab3fee81f05ddd3e4596d2664e6c0ae77bccf99d1c9605dd01808d"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.treasury_({transaction_hash: "0bc50b20e16268419048790f6ae3667a1480418dd9faed543bc0e8ca32ea7a08"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.reserves_({transaction_hash: "27dff3f43c460e779e35eff505f5f159c4283a8221b31ee17cdcd5b31ad221ba"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.param_proposals_({transaction_hash: "62c3c13187423c47f629e6187f36fbd61a9ba1d05d101588340cfbfdf47b22d2"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.retiring_pools_({transaction_hash: "0d8eadd3bd58bd1a34641ea4100de509f081fe5dd7ecd33d7da52cbeb8e93494"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.updating_pools_({transaction_hash: "37b67370c0e71b6e15d6d5f564a5069461e472a26e6f46a813743458285aef8d"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.metadata_({transaction_hash: "6b85afe3fc01c6d3503a5dac8343b56b67f504bb2399deba8b09f8024790b9c4"});
    // console.log(txs);

    // const txs = await CBI.core.transactions.assetmints_({transaction_hash: "5f6f72b00ae982492823fb541153e6c2afc9cb7231687f2a5d82a994f61764a0"});
    // console.log(txs);

    const txs = await CBI.core.transactions.redeemers_({transaction_hash: "e584995ed133ae25e5c918d794efa415e10352b0d0e08aa02a196bbd605b9e69"});
    console.log(txs);

    // console.log(CBI.client.accessToken);
  } catch (error) {
    console.error(error);
  }
}

const testAssets = async () => {
  try {
    // const assets = await CBI.core.assets_();
    // console.log(assets);

    // const assets = await CBI.core.assets_({fingerprint: 'asset1w8wujx5xpxk88u94t0c60lsjlgwpd635a3c3lc'});
    // console.log(assets);

    const assets = await CBI.core.assets.history_({
      fingerprint: 'asset1gqp4wdmclgw2tqmkm3nq7jdstvqpesdj3agnel',
      page_size: 5,
      page_no: 2
    });
    console.log(assets);

    // const assets = await CBI.core.assets.history_({
    //   fingerprint: 'asset1gapvhk8genflnumqsgwe6jg2q92ktxuvmpr7jc'
    // });
    // console.log(assets);

    // const assets = await CBI.core.assets.transactions_({fingerprint: 'asset1gapvhk8genflnumqsgwe6jg2q92ktxuvmpr7jc'});
    // console.log(assets);

    // const assets = await CBI.core.assets.addresses_({
    //   fingerprint: 'asset1gqp4wdmclgw2tqmkm3nq7jdstvqpesdj3agnel',
    //   order: "desc", page_size: 3, page_no: 1, query: "orderby=quantity desc"
    // });
    // console.log(assets);

    // const assets = await CBI.core.assets.policies_({
    //   policy_hash: '706e1c53ed984b016f2c0fc79a450fdb572aa21e4e87d6f74d0b6e8a'
    // });
    // console.log(assets);
  } catch (error) {
    console.error(error);
  }
}

const testAccounts = async () => {
  try {
    // const accounts = await CBI.core.accounts_({stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz'});
    // console.log(accounts);

    // const rewards = await CBI.core.accounts.rewards_({ stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz', query: '$orderby=earned_epoch desc'});
    // console.log(rewards);

    // const staking = await CBI.core.accounts.staking_({stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz'});
    // console.log(staking);

    // const delegations = await CBI.core.accounts.delegations_({stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz'});
    // console.log(delegations);

    // const registrations = await CBI.core.accounts.registrations_({stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz'});
    // console.log(registrations);

    // const withdrawals = await CBI.core.accounts.withdrawals_({stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz'});
    // console.log(withdrawals);

    // const mirs = await CBI.core.accounts.mirs_({stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz'});
    // console.log(mirs);

    // const addresses = await CBI.core.accounts.addresses_({stake_address: 'stake_test1uqh4cqczjpcjgnd3vhntldk9utmc3754tyrxy9seghptzwc6zayzz'});
    // console.log(addresses);

    const assets = await CBI.core.accounts.assets_({stake_address: 'stake_test1urz84tnkqjx37tqfk02a58yhusajp2qgfyuz5nekqvrm97qdql4ha'});
    console.log(assets);

  } catch (error) {
    console.error(error);
  }
}

const testPolls = async () => {
  try {
    const polls = await CBI.core.polls_();
    console.log(polls);

    // const poll = await CBI.core.polls_({poll_hash: '62c6be72bdf0b5b16e37e4f55cf87e46bd1281ee358b25b8006358bf25e71798'});
    const poll = await CBI.core.polls_({poll_hash: '96861fe7da8d45ba5db95071ed3889ed1412929f33610636c072a4b5ab550211'});
    console.log(poll);

  } catch (error) {
    console.error(error);
  }
}

// runUnit1();
// runZeroCitizen();
// runUnit3();
// testBIAddresses();
// testBIEpochs();
// testBIPools();
// testCoreEpochs();
// testCoreEpochsParams();
// testCorePools();
// testCoreBlocks();
// testDynamicCalls();
// testCoreOdataEpochsParams();
// testCoreAddresses();
// testTransactions();
// testAssets();
testAccounts();
// testPolls();

// const epochs_params = await CBI.core.epochs.params_({no: 31, odata: true, query: "$select=epoch_no,nonce"});
// const epochs_params = await CBI.core.epochs.params_();
// console.log(epochs_params);
// console.log(CBI.client.accessToken);
// console.log(CBI.client.network);
// const blocks = await CBI.core.blocks.latest_();
// console.log(blocks);
// const blocks2 = await CBI.core.epochs_({ query: "$orderby=id desc&$top=1" });
// console.log(blocks2);
// const blocks3 = await CBI.core.blocks.latest.pools_({pool_hash: "22ab39540db22349b1934f5dcb7788440c33709ea9fdac07fb343395"});
// console.log(blocks3);
// const epochs_params = await CBI.core.epochs.params_();
// console.log(epochs_params);
// const blocks3 = await CBI.core.epochs_({ query: "$orderby=id desc&$top=1" });
// console.log(blocks3);
// const blocks4 = await CBI.core.epochs_({query: "$orderby=id desc&$top=1"});
// console.log(blocks4);

// const block = await CBI.core.blocks.latest_();
// console.log(block);
console.log(CBI.client.accessToken);
console.log(CBI.client.network);
// console.log(CBI.client.auth_token);
