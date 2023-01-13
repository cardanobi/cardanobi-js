# CardanoBI Node.js / Javascript SDK

## Installation

```
$ git clone https://github.com/cardanobi/cardanobi-js.git
cd cardanobi-js
npm install
```

## Example

Let's get the details for epoch #30 in preprod.
```js
import { CardanoBI } from './cardanobi-js/CardanoBI.js'

const CBI = await new CardanoBI({ apiKey: "MY-KEY", apiSecret: "MY-SECRET", network: "preprod" });

(async () => {
  try {
    const epoch = await CBI.epochs(30);

    console.log(epoch);
  } catch (error) {
    console.error(error);
  }
})();

```

Output
```js
{
  id: 31,
  out_sum: 102865306257160,
  fees: 4942589267,
  tx_count: 24249,
  blk_count: 20386,
  no: 30,
  start_time: '2022-10-29T00:00:25',
  end_time: '2022-11-02T23:59:27'
}
```
