interface Link {
  label: string,
  url: string
}

interface NavbarDropdown extends Link {
  icon?: React.ReactNode,
  desc: string
}

interface NavbarLink {
  label: string,
  url: string,
  isDropdown?: boolean,
  dropdown?: NavbarDropdown[]
}