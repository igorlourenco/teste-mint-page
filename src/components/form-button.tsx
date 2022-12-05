import { Button, ButtonProps } from "@chakra-ui/react";

export const FormButton = (props: ButtonProps) => {
  return (
    <Button
      h="2.5rem"
      backgroundColor="#E76933"
      borderColor="#E76933"
      borderWidth="3px"
      borderStyle="solid"
      borderRadius="0"
      cursor="pointer"
      transition="0.3s"
      fontSize="1.5rem"
      fontWeight="500"
      fontFamily="Blender Pro"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.19)"
      _hover={{
        borderColor: "white",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
};
