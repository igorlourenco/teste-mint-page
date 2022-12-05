import { Heading, Stack, Text } from "@chakra-ui/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const Tutorial = () => {
  return (
    <Stack
      spacing={0}
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="#262626"
      bgGradient="linear-gradient(180deg, rgba(6, 6, 6, 0) 0%, rgba(6, 6, 6, 0.6) 100%)"
    >
      <Header />
      <Stack w="100%" alignItems="center" p={[4, 8, 16, 0]} py={[4, 8, 16, 24]}>
        <Stack w={["100%", "100%", "50%", "50%"]}>
          <iframe
            src="https://player.vimeo.com/video/775784292?h=a1d0150ee0&autoplay=0&loop=1&title=0&byline=0&portrait=0"
            width={640 * 1.2}
            height={360 * 1.2}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Heading
            fontSize="3.75rem"
            fontWeight="700"
            color="white"
            fontFamily="Teko"
            w="100%"
            textAlign="left"
          >
            Como conectar sua carteira digital
          </Heading>

          <Text fontSize="1.25rem" color="white" textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            rutrum mauris. Pellentesque placerat sem nunc, a iaculis elit
            vestibulum eu. Aliquam ut porttitor tellus. Nunc porttitor vel dui
            non blandit. Curabitur bibendum quam venenatis consectetur
            dignissim. Phasellus luctus nec sapien vel imperdiet. Integer quis
            lectus efficitur, convallis est vel, consequat nibh. Aenean vitae
            hendrerit massa, id scelerisque purus. Curabitur sodales pulvinar
            tortor eu facilisis. Duis consequat at lacus eget dignissim. Sed ac
            interdum felis.
          </Text>
        </Stack>
      </Stack>
      <Footer type={2} />
    </Stack>
  );
};
export default Tutorial;
