import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  isSearch: boolean;
};

export const GameTable: FC<Props> = memo((props) => {
  // TODO グローバルState
  const { isSearch } = props;
  if (!isSearch) return null;

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="blackAlpha" backgroundColor="white">
        <Thead>
          <Tr>
            <Th>タイトル</Th>
            <Th isNumeric>プレイ時間</Th>
            <Th isNumeric>クリア時間</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td isNumeric>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});
