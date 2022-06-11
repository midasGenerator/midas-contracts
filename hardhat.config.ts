import * as dotenv from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import 'solidity-coverage'
import '@openzeppelin/hardhat-upgrades'

dotenv.config()

const mnemonic =
  process.env.PKY_KEY ||
  'be9ebe47c43b97d80b79e905b1a5b6fd489a674fe10677ffa4ecb132b4392854'

const mnemonicBob =
  process.env.PKY_KEY ||
  'b96f09aaae37acd3070b3384c29deaf71728ea971409c2539e532f567c789b69'

const mnemonicAlice =
  process.env.PKY_KEY ||
  'bf60370ceb06c7f76055e96e9417f9dca3a677007ea6045c187a98bd71ceee62'

const mnemonic1 =
  'd3793083f118e9f314989e1aa72148de31dc85466aab52e4ba80ff9d254540c8'

const mnemonic2 =
  '59ff30cb6e293c5fb6c5ff27e5d194db64b2ffd93da66fd5b39564614fb7d49f'

const mnemonic3 =
  'dbc4050bac8f10b675a152bab7a740d2e52f2fc36df71549c0508477873bca30'

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {},
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${mnemonic}`],
      gasPrice: 120 * 1000000000,
      chainId: 1
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${mnemonic}`],
      chainId: 3,
      gasPrice: 5000000000,
      gasMultiplier: 2
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${mnemonic}`],
      chainId: 4,
      gasPrice: 5000000000,
      gasMultiplier: 2
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${mnemonic}`],
      chainId: 5,
      gasPrice: 5000000000,
      gasMultiplier: 2
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${mnemonic}`],
      chainId: 42,
      gasPrice: 20000000000,
      gasMultiplier: 2
    },
    moonbase: {
      url: 'https://rpc.testnet.moonbeam.network',
      accounts: [`${mnemonic}`],
      chainId: 1287,
      gas: 5198000,
      gasMultiplier: 2
    },
    arbitrum: {
      url: 'https://kovan3.arbitrum.io/rpc',
      accounts: [`${mnemonic}`],
      chainId: 79377087078960,
      gasMultiplier: 2
    },
    fantom: {
      url: 'https://rpcapi.fantom.network',
      accounts: [`${mnemonic}`],
      chainId: 250,
      gasPrice: 22000000000
    },
    'fantom-testnet': {
      url: 'https://rpc.testnet.fantom.network',
      accounts: [`${mnemonic}`],
      chainId: 4002,
      gasMultiplier: 2
    },
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com',
      accounts: [`${mnemonic}`],
      chainId: 137,
    },
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/',
      accounts: [`${mnemonic}`],
      chainId: 80001,
      gasMultiplier: 2
    },
    xdai: {
      url: 'https://rpc.xdaichain.com',
      accounts: [`${mnemonic}`],
      chainId: 100,
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org',
      accounts: [`${mnemonic}`],
      chainId: 56,
    },
    bsctestnet: {
      url: 'https://speedy-nodes-nyc.moralis.io/aaf5f27c6c7a9ad182a69ccd/bsc/testnet/archive',
      accounts: [
        `${mnemonic}`,
        mnemonicBob,
        mnemonicAlice,
        mnemonic1,
        mnemonic2,
        mnemonic3,
      ],
      chainId: 97,
      gasMultiplier: 2
    },
    heco: {
      url: 'https://http-mainnet.hecochain.com',
      accounts: [`${mnemonic}`],
      chainId: 128,
    },
    'heco-testnet': {
      url: 'https://http-testnet.hecochain.com',
      accounts: [`${mnemonic}`],
      chainId: 256,
      gasMultiplier: 2
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      accounts: [`${mnemonic}`],
      chainId: 43114,
      gasPrice: 225000000000
    },
    avaxfuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      accounts: [`${mnemonic}`],
      chainId: 43113,
      gasMultiplier: 2
    },
    harmony: {
      url: 'https://api.s0.t.hmny.io',
      accounts: [`${mnemonic}`],
      chainId: 1666600000,
    },
    'harmony-testnet': {
      url: 'https://api.s0.b.hmny.io',
      accounts: [`${mnemonic}`],
      chainId: 1666700000,
      gasMultiplier: 2
    }
  },
  etherscan: {
    //apiKey: 'ZGR21YGDGQSIVXI5B2NR5K73MFCDI4QPH8' // avax
    apiKey: "V28HJCGUP2XCHSV5IXXG6IK9W14HHXKDCY" // bsc
  },
  solidity: {
    compilers: [
      {
        version: '0.8.14',
        settings: {
          optimizer: {
            enabled: true,
            runs: 100
          }
        }
      },
      {
        version: '0.6.12', // Pancake Router
        settings: {
          optimizer: {
            enabled: true
          }
        }
      },
      {
        version: '0.6.6', // Pangolin Router
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: '0.8.2' // Pancake Pair
      },
      {
        version: '0.5.17' // WAVAX
      },
      {
        version: '0.5.16' // Pancake / Pangolin -> Pair / Factory
      },
      {
        version: '0.5.0' // Pancake Pair
      },
      {
        version: '0.4.18' // WBNB
      }
    ]
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts'
  },
  mocha: {
    timeout: 6000000
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5'
  },
  gasReporter: {
    token: "BNB",
    currency: 'USD',
    gasPrice: 5,
    enabled: false,
    coinmarketcap: '0caa3779-3cb2-4665-a7d3-652823b53908'
  }
}

export default config