import { CardIcon, StackIcon } from "@/icons/Icons";

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
        icon: <StackIcon size={20} style="" />
      },
      {
        label: 'cards',
        url: '/cards',
        desc: 'Explore all cards',
        icon: <CardIcon size={20} style="" />
      }
    ]
  },
  {
    label: 'help',
    url: '/help',
    isDropdown: false,
  }
]