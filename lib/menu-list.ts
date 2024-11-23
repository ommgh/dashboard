import {
  Settings,
  LayoutGrid,
  LucideIcon,
  BoxIcon,
  ArrowDownCircleIcon,
  Paperclip,
  PanelTopCloseIcon,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/orders",
          label: "Orders",
          icon: BoxIcon,
          submenus: [
            {
              href: "/orders",
              label: "Shopify",
            },
            {
              href: "/orders/custom",
              label: "Custom",
            },
          ],
        },
        {
          href: "/returns",
          label: "Returns",
          icon: ArrowDownCircleIcon,
        },
        {
          href: "/tools",
          label: "Tools",
          icon: PanelTopCloseIcon,
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/billing",
          label: "Billing",
          icon: Paperclip,
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings,
        },
      ],
    },
  ];
}
