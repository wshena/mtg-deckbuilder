import { BoxIcon, CardIcon, LightningIcon, PeopleIcon, StackIcon } from "@/icons/Icons";

export const NavbarLinks:NavbarLink[] = [
  {
    label: 'home',
    url: '/',
    isDropdown: false
  },
  {
    label: 'explore',
    url: '',
    isDropdown: true,
    dropdown: [
      {
        label: 'decks',
        url: '/decks',
        desc: 'All public decks',
        icon: <StackIcon size={25} style="" />
      },
      {
        label: 'cards',
        url: '/cards',
        desc: 'Explore all cards',
        icon: <CardIcon size={25} style="" />
      },
      {
        label: 'commander precons',
        url: '/precons',
        desc: 'View all commander precons',
        icon: <BoxIcon size={25} style="" />
      },
      {
        label: 'packages',
        url: '/packages',
        desc: 'All public packages',
        icon: <LightningIcon size={25} style="" />
      },
      {
        label: 'other precons',
        url: '/precons',
        desc: 'View all other precons',
        icon: <BoxIcon size={25} style="" />
      },
      {
        label: 'Brewers',
        url: '/users',
        desc: 'Find the next brewing genius',
        icon: <PeopleIcon size={25} style="" />
      },
    ]
  },
  {
    label: 'help',
    url: '/help',
    isDropdown: false,
  }
]

export const MobileNavbarLinks:NavbarLink[] = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'explore decks',
    url: '/decks',
  },
  {
    label: 'explore cards',
    url: '/cards',
  },
  {
    label: 'explore commander precons',
    url: '/precons',
  },
  {
    label: 'explore another precons',
    url: '/precons',
  },
  {
    label: 'explore packages',
    url: '/packages',
  },
  {
    label: 'explore brewers',
    url: '/users',
  },
  {
    label: 'help',
    url: '/help',
  },
]