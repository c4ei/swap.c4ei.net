/**
 * @see https://github.com/pancakeswap/pancake-frontend/blob/develop/src/config/constants/tokens.ts
 */
const tokens = {
  cake: {
    symbol: "CAKE",
    address: {
      56: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
      97: "0xFa60D973F7642B748046464e165A65B7323b0DEE",
      137: "0x9a976661AcBa62E821D5562579d6a1B0324dddf2", // (22-11-16)
      8217: "0x4A01A7ecE21199b20e4A5B48c3C1D95f95d98788", // (22-10-10)
      21004: "0x1A10F46a2902078d8a1edB576FdAF8CB9B125d69", // (22-09-27)
    },
    decimals: 18,
    projectLink: "https://swap.c4ei.net/",
  },
  bunny: {
    symbol: "BUNNY",
    address: {
      56: "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
      97: "",
      21004: "",
    },
    decimals: 18,
    projectLink: "https://pancakebunny.finance/",
  },
  wbnb: {
    symbol: "wBNB",
    address: {
      56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      97: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      137: "0x1Ae6B1fdDE78CB36dc9BF1D4D0eCDC81539fD369", // Polygon
      8217: "0xAb57000f39107eDE71441D54Aa53A22bdCE9F4B9", // (22-10-10)
      21004: "0x83f7AaE73a80e5Ae7Fa4a4948F1CE90f57c638aa",
    },
    decimals: 18,
    projectLink: "https://swap.c4ei.net/",
  },
  // sushi: {
  //   symbol: "SUSHI",
  //   address: {
  //     56: "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
  //     97: "",
  //     21004: "",
  //   },
  //   decimals: 18,
  //   projectLink: "https://sushi.com/",
  // },
  syrup: {
    symbol: "SYRUP",
    address: {
      56: "0x009cF7bC57584b7998236eff51b98A168DceA9B0",
      97: "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9",
      8217: "0x2041dAA87620e055496eBF4C4e7aBBFd8280795d", // (22-10-10)
      21004: "0xABB8a013F21a491C2e35d143A31FB708499A92c0",
    },
    decimals: 18,
    projectLink: "https://swap.c4ei.net/",
  },
  busd: {
    symbol: "BUSD",
    address: {
      56: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      97: "",
      137: "0x900b38cf92A9b7FfecF069519F75905c2E29cd4F", // Polygon
      8217: "0x8Eed4BFE1Bba9ee60c3E4A6AFD2bDD8102e8590C", // (22-10-10)
      21004: "0xBa9303709c2Ad10b62a598e18e15b1E42921edea",
    },
    decimals: 18,
    projectLink: "https://www.paxos.com/busd/",
  },
  eth: {
    symbol: "ETH",
    address: {
      56: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      97: "",
      8217: "",
      21004: "",
    },
    decimals: 18,
    projectLink: "https://ethereum.org/en/",
  },
  usdc: {
    symbol: "USDC",
    address: {
      56: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      97: "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814",
      8217: "",
      21004: "",
    },
    decimals: 18,
    projectLink: "https://www.centre.io/usdc",
  },
  // dai: {
  //   symbol: "DAI",
  //   address: {
  //     56: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  //     97: "",
  //     21004: "",
  //   },
  //   decimals: 18,
  //   projectLink: "https://www.makerdao.com/",
  // },
  // ada: {
  //   symbol: "ADA",
  //   address: {
  //     56: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
  //     97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
  //     21004: "",
  //   },
  //   decimals: 18,
  //   projectLink: "https://www.cardano.org/",
  // },
  usdt: {
    symbol: "USDT",
    address: {
      56: "0x55d398326f99059fF775485246999027B3197955",
      97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
      8217: "",
      21004: "",
    },
    decimals: 18,
    projectLink: "https://tether.to/",
  },
  // xrp: {
  //   symbol: "XRP",
  //   address: {
  //     56: "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
  //     97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
  //     21004: "",
  //   },
  //   decimals: 18,
  //   projectLink: "https://ripple.com/xrp/",
  // },
  // uni: {
  //   symbol: "UNI",
  //   address: {
  //     56: "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
  //     97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
  //     21004: "",
  //   },
  //   decimals: 18,
  //   projectLink: "https://uniswap.org/",
  // },
  // bake: {
  //   symbol: "BAKE",
  //   address: {
  //     56: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
  //     97: "",
  //     21004: "",
  //   },
  //   decimals: 18,
  //   projectLink: "https://www.bakeryswap.org/",
  // },
  // burger: {
  //   symbol: "BURGER",
  //   address: {
  //     56: "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f",
  //     97: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
  //     21004: "",
  //   },
  //   decimals: 18,
  //   projectLink: "https://burgerswap.org/",
  // },
};

export default tokens;
