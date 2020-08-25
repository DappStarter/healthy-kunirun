require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note punch punch harvest neck fortune giggle'; 
let testAccounts = [
"0x0a4eaf66b070063f30cd68089ce5b9238a5ce03349c518e6ee61de1637b7e38d",
"0xef74e96b0deecd8199d1d394ee92737b610af1b23bf7ecbae1caeef047e1a46c",
"0x0bcd71b71a074ed69223b54fc4a2edf308bc81208c198e128d907fed42993fb2",
"0xa8a92f49ca6b03f14a074ced7ec1826696fa0137796b1e84eba070dfbfd7a7d6",
"0x6b642527727eccc4ef8b93038c3b05c51c48c8985d67e3260d8b28e8aad05457",
"0x62a71955d08642a2da76b77e473c1d639120cd63c7d305980ca01d93bfc3de84",
"0xc1facb429f22f5f7eff8e4e62f27237e217eadbe85cf89845d1631c4fdb60dd7",
"0x1c97304a7e913a8e264772c3ccb49963f3bad6a38b870f105f9a76214f5f4e90",
"0xe18899273aec1f320d170d2bd86d88775dd8673982236340e3e4f619efe6f166",
"0xd91c9d8593481bd1071a8ffee4e4203cdafecb322113f2267b45a9f9886e5a6c"
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
            version: '^0.5.11'
        }
    }
};
