"use client";

import { useRouter } from "next/router";
import Navbar from "../Navbar";
import { Box } from "@chakra-ui/react";

const Header = () => {
  const router = useRouter(); // 現在のパスを取得

  return (
    <Box as="header">
      <Navbar path={router.asPath} /> {/* path を Navbar に渡す */}
    </Box>
  );
};

export default Header;
