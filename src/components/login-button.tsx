import { Flex, FlexProps, Image } from "@chakra-ui/react";

interface LoginButtonProps extends FlexProps {
  label: string;
  type?: "steam" | "hotmart";
}

export const LoginButton = ({
  label,
  type,
  onClick,
  ...props
}: LoginButtonProps) => {
  return (
    <Flex
      role="button"
      alignItems="center"
      justifyContent="center"
      gap="6px"
      h="2.5rem"
      w="17.5rem"
      py="0.5rem"
      px="1rem"
      backgroundColor={type === "steam" ? "#27A9DE" : "#E76933"}
      borderColor={type === "steam" ? "#27A9DE" : "#E76933"}
      borderWidth="3px"
      borderStyle="solid"
      borderRadius="0"
      cursor="pointer"
      transition="0.3s"
      fontSize="1rem"
      fontStyle="italic"
      fontWeight="500"
      fontFamily="Blender Pro"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.19)"
      _hover={{
        borderColor: "white",
      }}
      onClick={onClick}
      {...props}
    >
      {type && (
        <Image w="1.5rem" h="1.5rem" src={`icons/${type}.svg`} alt="Icon" />
      )}
      {label}
    </Flex>
  );
};
