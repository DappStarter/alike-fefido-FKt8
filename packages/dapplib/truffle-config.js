require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski stool crawl often clutch hundred light army gather'; 
let testAccounts = [
"0x4feabb6b66320d9965fbd664021849e63e0b49601387ac26c5f2965b2416059d",
"0xc4c00de9e24054aee8ca1fbb1eddc90ce327d11124721e22118ae1555b1ca02a",
"0x56d8afda2b31ce2ea14a962b206da4d2142833e9d5fed59d7473c4c0dac88b93",
"0x4eb6581ada8379c085a5216ec3bb8e43473cf2900d0f601f2a5cb02cec495100",
"0xc727937dfbf7ff2db057392157e36d9cc1435050cbd58734490e39e0ba5e3a91",
"0x4b2bf34de086f179b04ce5fc32fa2f489d7e1e44ebe81a6ad76add8ef4f76607",
"0x1ec3962e9d716820b56812bdaa50f1604fc3d6be81c89778f613d6643a1d133e",
"0xd906fd465c575d85adb2ab4a95d7a6a9dad4e748a291bc2ce1dcbc3148bcbc91",
"0xa6085ade5cde1c23f3b271508dcb9b4190e29ffc8033a22f087ad644086ceb59",
"0x047aba7938de013f5eb5559ad0d92dcb44834c331665c365449e9f14e7b7881f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

