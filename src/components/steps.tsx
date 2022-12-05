import { Flex, Image, Stack, Text } from "@chakra-ui/react";

interface StepsProps {
  step: number;
  type: string;
}

export const Steps = ({ step, type }: StepsProps) => {
  console.log({ type });
  return (
    <Stack mb="2rem" w="455px">
      <Flex justifyContent="space-between">
        <Stack alignItems="center">
          <Image color="red" src="/icons/mail.svg" w="32px" h="32px" />
          <Text
            textAlign="center"
            fontSize="0.875rem"
            color="#E76933"
            fontWeight="500"
            lineHeight="1rem"
          >
            Validação <br />
            do e-mail
          </Text>
        </Stack>
        <Stack alignItems="center">
          <Image
            src={step >= 2 ? "/icons/wallet2.svg" : "/icons/wallet1.svg"}
            w="32px"
            h="32px"
          />
          <Text
            textAlign="center"
            fontSize="0.875rem"
            color={step >= 2 ? "#E76933" : "#8C8C8C"}
            fontWeight="500"
            lineHeight="1rem"
          >
            Conectar <br />
            Digital Wallet
          </Text>
        </Stack>
        {type === "hotmart" && (
          <Stack alignItems="center">
            <Image
              src={step >= 3 ? "/icons/send2.svg" : "/icons/send1.svg"}
              w="32px"
              h="32px"
            />
            <Text
              textAlign="center"
              fontSize="0.875rem"
              color={step >= 3 ? "#E76933" : "#8C8C8C"}
              fontWeight="500"
              lineHeight="1rem"
            >
              Validação <br />
              de Código de transação
            </Text>
          </Stack>
        )}
        <Stack alignItems="center">
          <Image
            src={step >= 4 ? "/icons/nft2.svg" : "/icons/nft1.svg"}
            w="32px"
            h="32px"
          />
          <Text
            textAlign="center"
            fontSize="0.875rem"
            color={step >= 4 ? "#E76933" : "#8C8C8C"}
            fontWeight="500"
            lineHeight="1rem"
          >
            Receber <br />
            NFT
          </Text>
        </Stack>
      </Flex>
      <Stack alignItems="center" px="23px" w="100%">
        <Image src={`/icons/tl${step}.svg`} alt="timeline" />
      </Stack>
    </Stack>
  );
};
