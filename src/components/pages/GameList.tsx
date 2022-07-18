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
      <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md" p={4}>
        <Stack textAlign="center">
          <Image
            borderRadius="full"
            boxSize="160px"
            src="https://source.unsplash.com/random"
            alt="プロフィール画像"
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            ユーザーネーム（表示名）
          </Text>
          <Text fontSize="sm" color="gray">
            Games
          </Text>
        </Stack>
      </Box>
    </>
  );
});
