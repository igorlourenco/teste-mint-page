import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const Info = () => {
  return (
    <Box position="relative">
      <Image
        w="100%"
        transform="matrix(1, 0, 0, -1, 0, 0)"
        position="absolute"
        zIndex="10"
        top="0"
        src="/backgrounds/divider-1.png"
        alt="Divider"
      />
      <Box
        pb={32}
        pt={24}
        as="section"
        id="info"
        backgroundImage="/backgrounds/info.png"
        backgroundRepeat="no-repeat"
        backgroundPosition="right center"
        backgroundSize={["cover", "cover", "100%", "100%"]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={["100%", "100%", "70%", "70%"]} p={[4, 8, 0, 0]} zIndex="20">
          <Stack spacing="82px" alignItems="flex-start">
            <Stack alignItems="flex-start">
              <Heading
                fontFamily="Teko"
                fontSize="6.45rem"
                lineHeight="97%"
                letterSpacing="0.01em"
                fontWeight="700"
              >
                O que é uma skin NFT?
              </Heading>
              <Text
                w={["100%", "100%", "62%", "62%"]}
                fontFamily="Blender Pro"
                fontSize="1.25rem"
                fontWeight="400"
                textAlign="left"
              >
                Nada mais é que um tipo de token criptográfico. Imagina você ter
                uma arma Skin limitada dentro de um jogo. Curtiu? Só que o
                melhor vem agora.
              </Text>
            </Stack>
            <Stack alignItems="flex-start">
              <Heading
                fontFamily="Teko"
                fontSize="6.45rem"
                lineHeight="97%"
                letterSpacing="0.01em"
                fontWeight="700"
              >
                Qual o seu benefício?
              </Heading>
              <Text
                w={["100%", "100%", "62%", "62%"]}
                fontFamily="Blender Pro"
                fontSize="1.25rem"
                fontWeight="400"
                textAlign="left"
              >
                Com esse sistema de criptografia você adquire essa skin NFT e
                usufrui de uma economia real desse ativo, que estará na sua
                carteira digital e não diretamente dentro do jogo. A empresa
                entrega ao comprador os direitos daquele Skin NFT e com isso, é
                possível negociar o ativo em qualquer outro Marketplace de
                NFT's, além de poder utilizá-lo dentro do jogo, se tornando um
                player super descolado e se destacando dentre os outros.
              </Text>
            </Stack>
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
