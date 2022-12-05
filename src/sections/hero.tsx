import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  return (
    <Box position="relative" backgroundImage="#0E0E0A">
      <Box
        p={[4, 8, 12, 16]}
        as="section"
        id="hero"
        backgroundImage="/images/bg-hero.png"
        backgroundSize="cover"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={["100%", "100%", "70%", "70%"]} zIndex="30">
          <Stack alignItems="flex-start">
            <Heading
              fontFamily="Teko"
              fontSize="6.45rem"
              lineHeight="97%"
              letterSpacing="0.01em"
              fontWeight="700"
            >
              Você faz
              <br />
              parte dessa
              <br />
              história
            </Heading>
            <Flex
              role="button"
              h="3rem"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              transition="0.3s"
              borderColor="#E76933"
              borderWidth="3px"
              borderStyle="solid"
              borderRadius="0"
              backgroundColor="transparent"
              fontSize="1.5rem"
              fontWeight="700"
              py="0.5rem"
              px="1rem"
              textTransform="uppercase"
              boxShadow="0px 1px 2px rgba(0, 0, 0, 0.19)"
              _hover={{
                backgroundColor: "#E76933",
                borderColor: "white",
              }}
              onClick={() => router.push("/#cta")}
            >
              Resgate suas skins NFT'S agora
            </Flex>
          </Stack>
        </Box>
      </Box>
      <Image
        w="100%"
        position="absolute"
        zIndex="10"
        bottom="0"
        src="/backgrounds/divider-1.png"
        alt="Divider"
      />
    </Box>
  );
};
