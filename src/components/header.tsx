import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <Box
      w="100%"
      py="1rem"
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="0px 4px 37px rgba(0, 0, 0, 0.4)"
      shadow="xl"
      backgroundColor="#262626"
    >
      <Flex alignItems="center" gap="2rem">
        <Image
          cursor="pointer"
          onClick={() => router.push("/#cta")}
          src="/icons/riox.svg"
          alt="Riox"
          width="50px"
          height="50px"
        />
        <Image src="/icons/divider.svg" alt="Divider" height="32px" />
        <Heading fontSize="36px" fontWeight="600" fontFamily="Teko">
          Receba suas NFTs
        </Heading>
      </Flex>
    </Box>
  );
};
