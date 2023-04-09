// components
import { Icon } from "@iconify/react";
// ----------------------------------------------------------------------

const sidebarConfig = [
  {
    title: "read",
    path: "/read",
    icon: <Icon icon="ant-design:dashboard-outlined" />,
    isSearch: false,
  },
  {
    title: "discourse",
    path: "/discourse",
    icon: <Icon icon="bx:category" />,
    isSearch: true,
    children: [
      {
        title: "main-categories",
        img: "/book.png",
        path: "/discourse"
      },
      {
        title: "sub-categories",
        img: "/book1.png"
      },
    ],
  },

  {
    title: "guide",
    path: "/products",
    icon: <Icon icon="fluent:building-shop-20-regular" />,
    isSearch: true,
  },
  {
    title: "library",
    path: "/library",
    icon: <Icon icon="bytesize:settings" />,
    isSearch: false,
    children: [
      {
        title: "main-categories",
        img: "/consecration.png",
        path: "/library/book"
      },
      {
        title: "main-categories",
        img: "/book.png",
        path: "/library/book1"
      },
      {
        title: "sub-categories",
        img: "/book1.png",
        path: "/library/book2"
      },
    ],
  },
];

export default sidebarConfig;
