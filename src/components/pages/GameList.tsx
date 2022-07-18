import { memo, FC } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  Stack,
  Image,
  Text
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { GameTable } from "../organisms/game/GameTable";

export const GameList: FC = memo(() => {
  return (
    <>
      <FormControl>
        <FormLabel>steam User ID</FormLabel>
        <Input type="email" />
        <FormHelperText>ユーザーIDを入力してください</FormHelperText>
        <Button mt={4} colorScheme="teal" type="submit">
          検索
        </Button>
      </FormControl>
      <UserCard />
      <GameTable />
    </>
  );
});
