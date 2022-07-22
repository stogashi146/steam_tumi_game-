import { memo, FC, useState, ChangeEvent } from "react";
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
  Text,
  Flex
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { GameTable } from "../organisms/game/GameTable";
import { useGetUserId } from "../../hooks/useGetUserId";

export const GameList: FC = memo(() => {
  const [isSearchach, setIsSearch] = useState(false);
  const { getUserId, customeId } = useGetUserId();
  const [userId, setuserId] = useState("");

  const onClickGetUserId = () => {
    getUserId(userId);
  };

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setuserId(e.target.value);
  };

  return (
    <>
      <FormControl>
        <Flex>
          <Box>
            <FormLabel>steam User ID</FormLabel>
            <Input type="text" value={userId} onChange={onChangeUserId} />
            <FormHelperText>ユーザーIDを入力してください</FormHelperText>
          </Box>
          <Button
            mt={8}
            colorScheme="teal"
            type="submit"
            onClick={onClickGetUserId}
          >
            検索
          </Button>
        </Flex>
      </FormControl>
      <p>{customeId}</p>
      <UserCard isSearch={isSearchach} />
      <GameTable isSearch={isSearchach} />
    </>
  );
});
