import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;
import { getScriptHash, getBalanceFromUtxos } from './utils/helpers';

const selectedCrypto = 'bitcoinTestnet';
const path = `m/84'/${selectedCrypto === 'bitcoinTestnet' ? '1' : '0'}'/0'/0/0`;

const address = 'tb1qepum984v3l7nnvzy79dtgx3kh709uvm93v3qjj';

// const seed = bip39.mnemonicToSeedSync(mnemonic, bip39Passphrase);
const scriptHash = getScriptHash(address, selectedCrypto);

let res = await getBalanceFromUtxos({
  addresses: [{ address, path, scriptHash }],
  changeAddresses: [],
  selectedCrypto
});

//   const relayFee = await helpers.wallet.relayFee.default({ selectedCrypto });
//   console.log("relayeFee", relayFee);
console.log(res);

if (!res.data.balance) {
  console.log('Balance is 0');
}
