"use client";

import Logo from './Logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


// NavbarProps の型定義
type NavbarProps = {
    path: string;
}

// LinkItemProps の型定義
type LinkItemProps = {
    href: string;
    path: string;
    children: React.ReactNode;
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.600', 'whiteAlpha.900')

    return (
        <NextLink href={href} passHref legacyBehavior>
            <Link
                p={5}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}


const Navbar = ({ path, ...props }: NavbarProps) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container maxW="container.md" p={2} display="flex" justifyContent="space-between" alignItems="center">
        <Flex align="center" w="100%">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/works" path={path}>
              Works
            </LinkItem>
          </Stack>
          <Box flex={1} textAlign="right">
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                <MenuList>
                  <NextLink href="/" passHref legacyBehavior>
                    <MenuItem>About</MenuItem>
                  </NextLink>
                  <NextLink href="/works" passHref legacyBehavior>
                    <MenuItem>Works</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;