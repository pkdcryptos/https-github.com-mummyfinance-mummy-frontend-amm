import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://mummy.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://mummy.finance/farms'
  },
  {
    label: 'Sand Pools',
    icon: 'PoolIcon',
    href: 'https://mummy.finance/sandpools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9c5D0C6a3be22B5dbd18275527CC17FB6327d696',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x5824bbe60efd1b321abb3975f07388d898da5c9f',
      },
      /* {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/mummy-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/mummy-finance/',
      },
       */
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/mummyfinance/",
      },
      {
        label: "Docs",
        href: "https://financemummy.gitbook.io/mummy-finance/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@MummyFinance",
      },
    ],
  },
  /* {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: 'https://mummy.finance/files/hackenAudit.pdf',
  }, */
]

export default config
