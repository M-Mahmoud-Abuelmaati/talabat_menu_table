import { ILink } from "../types";

export const Links: ILink = [
  {
    id: 0,
    name: "Dashboard",
    path: "/",
    icon: "dashboard",
  },
  {
    id: 1,
    name: "Orders",
    path: "/orders",
    icon: "orders",
    items: [
      {
        id: 0,
        name: "Dine In",
        path: "",
      },
      {
        id: 1,
        name: "Pick up",
        path: "",
      },
      {
        id: 2,
        name: "Schedule Orders",
        path: "",
      },
      {
        id: 3,
        name: "App",
        path: "",
      },
      {
        id: 4,
        name: "Delivery",
        path: "",
      },
    ],
  },
  {
    id: 2,
    name: "Tables",
    path: "/tables",
    icon: "tables",
  },
  {
    id: 3,
    name: "Reservation",
    path: "/",
    icon: "reservation",
  },
  {
    id: 4,
    name: "Waiting",
    path: "/",
    icon: "waiting",
  },
  {
    id: 5,
    name: "Cashier",
    path: "/",
    icon: "cashier",
  },
  {
    id: 6,
    name: "Refund",
    path: "/",
    icon: "refund",
  },
  {
    id: 7,
    name: "Kitchen",
    path: "/",
    icon: "kitchen",
  },
  {
    id: 9,
    name: "Reports",
    path: "/",
    icon: "reports",
    items: [
      {
        id: 0,
        name: "General",
        path: "",
      },
      {
        id: 1,
        name: "Users",
        path: "",
      },
      {
        id: 2,
        name: "Reservations",
        path: "",
      },
      {
        id: 3,
        name: "Order live cycle",
        path: "",
      },
      {
        id: 4,
        name: "Payment",
        path: "",
      },
      {
        id: 5,
        name: "Kitchen",
        path: "",
      },
    ],
  },
  {
    id: 10,
    name: "Comments",
    path: "/",
    icon: "comments",
  },
  {
    id: 11,
    name: "Feedback",
    path: "/",
    icon: "feedback",
  },
  {
    id: 12,
    name: "Copouns & promotions",
    path: "/",
    icon: "copouns",
    items: [
      {
        id: 0,
        name: "Copoun Codes",
        path: "",
      },
      {
        id: 1,
        name: "Promotions",
        path: "",
      },
    ],
  },
  {
    id: 13,
    name: "Menu",
    path: "/",
    icon: "menu",
    items: [
      {
        id: 0,
        name: "Foods",
        path: "",
      },
      {
        id: 1,
        name: "Sort",
        path: "",
      },
      {
        id: 1,
        name: "Modifiers",
        path: "",
      },
      {
        id: 1,
        name: "Menu engineering",
        path: "",
      },
    ],
  },
  {
    id: 14,
    name: "Employees",
    path: "/",
    icon: "employees",
  },
  {
    id: 15,
    name: "QR's",
    path: "/",
    icon: "qrcode",
  },
  {
    id: 16,
    name: "Settings",
    path: "/",
    icon: "settings",
  },
  {
    id: 17,
    name: "Sign out",
    path: "/",
    icon: "signout",
  },
];
