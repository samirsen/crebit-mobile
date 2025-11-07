type HeaderTheme = 'dark' | 'light';

export interface HeaderProps {
  theme?: HeaderTheme;
  showProfile?: boolean;
  showMenu?: boolean;
}
