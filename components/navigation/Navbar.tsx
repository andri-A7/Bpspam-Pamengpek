"use client";

import React, { memo, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon, SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

interface NavbarProps {
  onOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = memo(({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("blue.800", "blue.900");
  const color = useColorModeValue("gray.100", "gray.100");

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Flex
      h={16}
      alignItems="center"
      justifyContent="space-between"
      px={4}
      bg={bg}
      color={color}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
      transition="background-color 0.3s ease-in-out"
    >
      <IconButton
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: "flex", md: "none" }}
        _hover={{ bg: "blue.500" }}
      />

      <Box p={6} fontWeight="bold" fontSize="xl">
        BPSPAM Dashboard
      </Box>

      <InputGroup display={{ base: "none", md: "flex" }} w="60%">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input type="search" placeholder="Search..." />
      </InputGroup>

      <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        onClick={() => setIsSearchOpen(true)}
        display={{ base: "flex", md: "none" }}
        ml={4}
      />

      <Flex alignItems="center">
        <IconButton
          aria-label="Notifications"
          icon={<BellIcon />}
          m={4}
          _hover={{ bg: "blue.500" }}
        />
        <Button
          alignItems="center"
          onClick={toggleColorMode}
          p={4}
          _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
          borderRadius="full"
          _focus={{ boxShadow: "none" }}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>

      <Drawer isOpen={isSearchOpen} placement="top" onClose={() => setIsSearchOpen(false)}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input type="search" placeholder="Search..." />
            </InputGroup>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

