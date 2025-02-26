import { useState } from "react";

export const useNavState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState("/"); // State untuk halaman aktif

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const updateActivePath = (path: string) => {
    setActivePath(path);
  };

  return {
    isMenuOpen,
    toggleMenu,
    activePath,
    updateActivePath,
  };
};