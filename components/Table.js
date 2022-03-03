import { Tr, Td, Checkbox, Button } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

export default function Gtable(props) {
  const showData = (isShow, user) => {
    props.setIsShow(isShow);
    props.setSelectUser(user);
  };

  return (
    <Tr>
      <Td>{props.lastName}</Td>
      <Td>{props.name}</Td>
      <Td>{props.phoneNumber}</Td>
      <Td>{props.payment}</Td>

      <Td>
        <Button
          variant="outline"
          colorScheme="cyan"
          m="auto"
          onClick={() => showData(true, props)}
        >
          <FaUser />
        </Button>
      </Td>

      <Td>
        <Checkbox />
      </Td>
    </Tr>
  );
}
