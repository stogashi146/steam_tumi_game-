import { memo, FC } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  Box,
  Stack,
  Image,
  Text
} from "@chakra-ui/react";

type Props = {
  isSearch: boolean;
};

export const UserCard: FC<Props> = memo((props) => {
  // TODO グローバルState
  const { isSearch } = props;
  if (!isSearch) return null;

  return (
    <Box w="460px" h="100%" bg="white" borderRadius="10px" shadow="md" p={5}>
      <Stack textAlign="center">
        <Flex>
          <Image
            borderRadius="full"
            boxSize="160px"
            src="https://source.unsplash.com/random"
            alt="プロフィール画像"
            m="auto"
          />
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              ユーザーネーム（表示名）
            </Text>
            <Flex>
              <Text fontSize="md" color="bold">
                Games：
              </Text>
              <Text fontSize="md" color="gray">
                100
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="md" color="bold">
                TotalPlayTime：
              </Text>
              <Text fontSize="md" color="gray">
                200h
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="md" color="bold">
                TotalStack：
              </Text>
              <Text fontSize="md" color="red.400">
                100
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="md" color="bold">
                TotalStackPlayTime：
              </Text>
              <Text fontSize="md" color="red.400">
                100h
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
});
