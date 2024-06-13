export interface IMenuItem {
  name: string;
}

export const menuItems: IMenuItem[] = [
  {
    name: "About"
  },
  {
    name: "Projects"
  },
  {
    name: "Contact"
  }
];

export interface IMenu {
  setToggleMenu?: (toggleMenu: boolean) => void;
}
