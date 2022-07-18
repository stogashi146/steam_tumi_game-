/* eslint-disable react-hooks/exhaustive-deps */
import { memo, FC, useCallback } from "react";
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";

import { MenuDrawer } from "../../molecules/MenuDrawer";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const history = useNavigate();

  const onClickHome = () => {
    history("/");
    onClose();
  };
  const onClickGameList = () => {
    history("/gamelists");
    onClose();
  };

  return (
    <>
      <Flex
        as="nav"
        bg="blue.400"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            Steam Tumi Game
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickGameList}>積みゲー検索</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickHome={onClickHome}
        onClickGameList={onClickGameList}
      />
    </>
  );
});
