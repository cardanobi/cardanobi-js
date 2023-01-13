# CardanoBI Node.js / Javascript SDK

## Installation

```
$ git clone https://github.com/cardanobi/cardanobi-js.git
cd cardanobi-js
npm install
```

## Example

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
```json
{
  id: 30,
  out_sum: 115310725457131,
  fees: 3174268972,
  tx_count: 14186,
  blk_count: 21126,
  no: 29,
  start_time: '2022-10-24T00:01:08',
  end_time: '2022-10-28T23:59:22'
}
```
