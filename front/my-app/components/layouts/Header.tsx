"use client";

import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";

type HeaderProps = {
  path: string;
};

const Header = ({ path }: HeaderProps) => {
  return (
    <Box as="header">
      <Navbar path={path} />
    </Box>
  );
};

export default Header;
