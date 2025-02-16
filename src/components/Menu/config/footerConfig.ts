import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://c4ei.net',
        isHighlighted: true,
      },
      // {
      //   label: t('Brand'),
      //   href: 'https://docs.swap.c4ei.net/brand',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      // },
      // {
      //   label: t('Community'),
      //   href: 'https://docs.swap.c4ei.net/contact-us/telegram',
      // },
      // {
      //   label: t('Litepaper'),
      //   href: 'https://v2litepaper.swap.c4ei.net/',
      // },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      // {
      //   label: t('Customer Support'),
      //   href: 'https://docs.swap.c4ei.net/contact-us/customer-support',
      // },
      // {
      //   label: t('Troubleshooting'),
      //   href: 'https://docs.swap.c4ei.net/help/troubleshooting',
      // },
      {
        label: t('Guides'),
        href: 'https://docs.google.com/document/d/1qT76SW6ft_nKA7guj16Ty_veOo-s2vI_0KNB2OP3ugc/edit?usp=sharing',
      },
      {
        label: "use C4EI",
        href: "https://swap.c4ei.net/add?chainId=21004",
      },
      {
        label: "MyLP (C4EI)",
        href: "https://swap.c4ei.net/liquidity?chainId=21004",
      },
      {
        label: "use KLAY",
        href: "https://swap.c4ei.net/add?chainId=8217",
      },
      {
        label: "MyLP (KLAY)",
        href: "https://swap.c4ei.net/liquidity?chainId=8217",
      },
      {
        label: "use Polygon",
        href: "https://swap.c4ei.net/add?chainId=137",
      },
      {
        label: "MyLP (Polygon)",
        href: "https://swap.c4ei.net/liquidity?chainId=137",
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/c4ei/pancakeswap',
      },
      // {
      //   label: t('Documentation'),
      //   href: 'https://docs.swap.c4ei.net',
      // },
      // {
      //   label: t('Bug Bounty'),
      //   href: 'https://docs.swap.c4ei.net/code/bug-bounty',
      // },
      // {
      //   label: t('Audits'),
      //   href: 'https://docs.swap.c4ei.net/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      // },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.swap.c4ei.net/hiring/become-a-chef',
      // },
    ],
  },
]
