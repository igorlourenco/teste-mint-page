import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BiWorld } from "react-icons/bi";
import {
  FaDiscord,
  FaEnvelope,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

interface FooterProps {
  type?: 1 | 2;
}

export const Footer = ({ type = 1 }: FooterProps) => {
  const router = useRouter();

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      backgroundColor="transparent"
    >
      <Flex
        direction={["column", "row"]}
        w={["100%", "100%", "70%", "70%"]}
        py={6}
        gap="1.5rem"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex gap="1rem" alignItems="center">
          <Flex alignItems="center" gap="1rem">
            <Image h="54px" src="/icons/discord.svg" alt="Discord" />
            <Text
              color="#D9D9D9"
              fontSize="0.875rem"
              fontWeight="500"
              fontFamily="Blender Pro"
            >
              Suporte no nosso servidor
            </Text>
          </Flex>
          {type === 1 && (
            <>
              <Image src="/icons/divider.svg" alt="Separator" />
              <Flex alignItems="center" gap="1rem">
                <Image h="32px" w="32px" src="/icons/faq.svg" alt="Discord" />
                <Text
                  cursor="pointer"
                  onClick={() => router.push("/faq")}
                  color="#D9D9D9"
                  fontSize="1.25rem"
                  fontWeight="700"
                  lineHeight="1.45rem"
                  fontFamily="Blender Pro"
                >
                  F.A.Q.
                </Text>
              </Flex>
            </>
          )}
        </Flex>

        {type === 1 ? (
          <Flex gap="1rem" alignItems="center">
            <FaTelegram
              cursor="pointer"
              color="#fff"
              size={22}
              onClick={() => window.open("https://t.me/rioxsurvival", "_blank")}
            />
            <FaTwitter
              cursor="pointer"
              color="#fff"
              size={22}
              onClick={() =>
                window.open("https://twitter.com/rioxsurvival", "_blank")
              }
            />
            <FaDiscord
              cursor="pointer"
              color="#fff"
              size={22}
              onClick={() =>
                window.open("https://discord.gg/WxMRXr4", "_blank")
              }
            />

            <BiWorld
              cursor="pointer"
              color="#fff"
              size={22}
              onClick={() =>
                window.open("https://raisedinoblivionx.com/", "_blank")
              }
            />
            <FaMedium
              cursor="pointer"
              color="#fff"
              size={22}
              onClick={() =>
                window.open("https://medium.com/@RaisedInOblivionX", "_blank")
              }
            />
            <FaEnvelope
              cursor="pointer"
              color="#fff"
              size={22}
              onClick={() => window.open("mailto:marketing@riox.io", "_blank")}
            />
          </Flex>
        ) : (
          <Flex
            w="293px"
            role="button"
            h="2.25rem"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            transition="0.3s"
            borderColor="#E76933"
            borderWidth="3px"
            borderStyle="solid"
            borderRadius="0"
            backgroundColor="transparent"
            fontSize="1rem"
            fontStyle="italic"
            fontWeight="500"
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
            Voltar para página inicial
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
