"use client";

import { NAVBAR_LINKS } from "./navbar.links";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useResponsive } from "./hooks/useResponsive";

export default function Navbar() {
  const isMobile = useResponsive();

  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
}
