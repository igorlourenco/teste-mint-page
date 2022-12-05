import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const OurHistory = () => {
  return (
    <Box position="relative" overflow="hidden">
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
        as="section"
        id="our-history"
        backgroundImage="/images/bg-history.png"
        backgroundSize="cover"
        pt="16.75rem"
        pb="16.75rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box w={["100%", "100%", "48%", "48%"]} p={[4, 8, 0, 0]}>
          <Stack alignItems="flex-end">
            <Heading
              textAlign="right"
              fontFamily="Teko"
              fontSize="6.45rem"
              lineHeight="97%"
              letterSpacing="0.01em"
              fontWeight="700"
            >
              NOSSA HISTÓRIA
              <br />
              COMEÇA AGORA
            </Heading>
            <Text
              fontFamily="Blender Pro"
              fontSize="1.25rem"
              fontWeight="400"
              textAlign="right"
            >
              Agradecemos a você por ter nos trazido até aqui, sua ajuda e
              confiança fez com que ganhássemos espaço no mercado! É por você e
              tantos outros milhões de gamers brasileiros que nos dedicamos
              todos os dias incansavelmente para que o RIO-X se torne um dos
              melhores jogos do mercado. Por isso, nós da FIRST PHOENIX STUDIO,
              deixamos aqui o nosso mais sincero agradecimento.
            </Text>
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
