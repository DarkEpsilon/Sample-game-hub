import { Input } from "@chakra-ui/input";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SerachInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      ></Input>
    </InputGroup>
  );
};

export default SerachInput;
