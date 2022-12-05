import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Footer } from "../components/footer";
import { LoginButton } from "../components/login-button";

export const CTA = () => {
  const router = useRouter();
  return (
    <>
      <Box
        backgroundColor="#060606"
        as="section"
        id="cta"
        pt={12}
        pb="10rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={16}
        backgroundImage={[
          "",
          "",
          "/backgrounds/cta.svg",
          "/backgrounds/cta.svg",
        ]}
        backgroundRepeat="no-repeat"
        backgroundPosition="center top"
        backgroundSize="cover"
      >
        <Box
          w={["100%", "100%", "70%", "70%"]}
          p={[4, 8, 0, 0]}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
        >
          <Stack alignItems="center" justifyContent="flex-start" w="100%">
            <Heading
              textTransform="uppercase"
              textAlign="justify"
              fontFamily="Teko"
              fontSize={["5rem", "5rem", "6rem", "6rem"]}
              lineHeight="97%"
              letterSpacing="0.01em"
              fontWeight="700"
              color="#E76933"
            >
              Resgate aqui
              <br />
              suas skins NFT
            </Heading>
            <Text textAlign="center" width="40%">
              Assim que se concluir, o código com informações de resgate estará
              disponível no seu e-mail
            </Text>
            <LoginButton
              label="Entrar com Steam"
              type="steam"
              onClick={() => router.push("/api/auth/login")}
            />
            <LoginButton
              label="Entrar com Hotmart"
              type="hotmart"
              onClick={() => router.push("/login?type=hotmart")}
            />
          </Stack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
