import {
  GITHUB_LINK,
  DISCORD_LINK
} from "../../constants";

export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "GitHub",
    href: GITHUB_LINK,
  },
  {
    label: "Discord",
    href: DISCORD_LINK,
  },
];
