export type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export type ChildProps = {
  children?: React.ReactNode;
};