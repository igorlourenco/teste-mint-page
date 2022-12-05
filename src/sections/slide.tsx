import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const names = {
  1: ["G17", "do Trem Bala"],
  2: ["M24", "Silver"],
  3: ["AKM", "ReDragon"],
  4: ["AKM", "TRICOLOR"],
  5: ["AKM", "do FOGÃO"],
  6: ["AKM", "URUBUZADA"],
  7: ["AKM", "TRICOLOR"],
};

const Slide = () => {
  const [currentImage, setCurrentImage] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      if (currentImage === 7) {
        setCurrentImage(1);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 3000);
  }, [currentImage]);

  return (
    <Box>
      <Stack w={["100%", "100%", "70%", "70%"]} alignItems="center">
        <Heading
          fontFamily="Teko"
          fontSize="6.45rem"
          lineHeight="97%"
          letterSpacing="0.01em"
          fontWeight="700"
        >
          Skin NFT's
        </Heading>
      </Stack>
      <Stack
        p={0}
        spacing={0}
        h="100vh"
        mb={20}
        backgroundPosition="center"
        className="ladyBloddy-container"
      >
        <div className="ladyBloddy-images">
          {[1, 2, 3, 4, 5, 6, 7].map((image) => (
            <img
              key={image}
              src={`/images/slide/${image}.png`}
              className={currentImage === image ? "active" : ""}
            />
          ))}
        </div>
        <div className="ladyBloddy-label">
          <Flex w="50%" justifyContent="flex-end">
            <Text
              textTransform="uppercase"
              textAlign="right"
              fontFamily="Teko"
              fontSize="3.75rem"
              fontWeight="700"
              color="#E76933"
              lineHeight="90%"
            >
              {names[currentImage][0]}
              <p> {names[currentImage][1]}</p>
            </Text>
          </Flex>
        </div>
        <div className="ladyBloddy-bullets">
          {[1, 2, 3, 4, 5, 6, 7].map((image) => (
            <div
              className={
                currentImage === image ? "bullet-active" : "span-image"
              }
              onClick={() => {
                setCurrentImage(image);
              }}
              key={image}
            >
              <img
                src={`/images/slide/${image}.png`}
                className={currentImage === image ? "img-active" : ""}
              />
            </div>
          ))}
        </div>
      </Stack>
    </Box>
  );
};

export default Slide;
