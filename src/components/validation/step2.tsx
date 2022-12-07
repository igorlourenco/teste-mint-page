import {
  Box,
  Flex,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ValidationProps } from ".";
import { UserContext } from "../../contexts/user-context";
import { FormButton } from "../form-button";

export const Step2 = ({ type, setStep }: ValidationProps) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const { email, setAddress, setNickname } = useContext(UserContext);

  const { connect, connectors } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { address } = useAccount();
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (email && address && data && data.nickname) {
      const { data: userByNickname } = await axios.get(
        `/api/check-nickname/?nickname=${data.nickname}`
      );
      console.log(userByNickname);
      if (userByNickname?.result) {
        setIsLoading(false);
        toast({
          title: "Escolha outro nickname",
          description:
            "O nickname que você escolheu já pertence a outro jogador",
          status: "warning",
        });
        return;
      }

      setAddress(address);
      setNickname(data.nickname);

      if (type === "steam") {
        setStep(4);
      } else {
        setStep(3);
      }
      setIsLoading(false);

      toast({
        title: "Dados registrados com sucesso.",
        status: "success",
      });
      return;
    } else {
      setIsLoading(false);
      toast({
        title: "Preencha todos os campos",
        status: "warning",
      });
    }
  };

  return (
    <>
      <Flex mt="2.5rem" gap="9px" alignItems="center">
        <Image
          src="/icons/metamask.svg"
          w="46px"
          h="46px"
          cursor="pointer"
          onClick={() => connect({ connector: connectors[0] })}
        />
        {/* <Image src="/icons/binance.svg" w="46px" h="46px" /> */}
        <Image
          src="/icons/coinbase.svg"
          w="46px"
          h="46px"
          cursor="pointer"
          onClick={() => connect({ connector: connectors[1] })}
        />
        <Image
          src="/icons/wallet-connect.png"
          w="46px"
          h="46px"
          rounded="xl"
          cursor="pointer"
          onClick={() => connect({ connector: connectors[2] })}
        />
        <Image
          backgroundColor="transparent"
          src="https://mpng.subpng.com/20191002/slw/transparent-logout-icon-technology-icon-5d954c0fd8cf65.6682490615700654238881.jpg"
          w="38px"
          h="38px"
          rounded="xl"
          cursor="pointer"
          onClick={async () => {
            await disconnectAsync();
          }}
        />
      </Flex>

      <Stack px="4rem">
        <Text fontSize="1rem" textAlign="center">
          Conecte sua carteira digital clicando nos logos acima ou completando
          as informações
        </Text>
        <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <Stack spacing={1}>
              <Text color="#BFBFBF" fontSize="0.875rem">
                Endereço da Wallet:
              </Text>
              <Input
                value={address ? address : ""}
                borderStyle="solid"
                borderWidth="1px"
                borderColor={address ? "#65FE08" : "#C92C2C"}
                backgroundColor={errors.address ? "#FF9E9E" : "#BCBCBC"}
                padding="0.5rem 1rem"
                fontStyle="italic"
                rounded="none"
                height="2rem"
                fontSize="1rem"
                color={errors.address ? "#C92C2C" : " #f2f2f2"}
                _focus={{
                  outline: "none",
                }}
              />
            </Stack>
          </Stack>
          <Stack spacing={1}>
            <Text color="#BFBFBF" fontSize="0.875rem">
              Nickname:
            </Text>
            <Input
              borderStyle="solid"
              borderWidth="1px"
              borderColor={errors.nickname ? "#C92C2C" : "#BFBFBF"}
              backgroundColor={errors.nickname ? "#FF9E9E" : "#BCBCBC"}
              padding="0.5rem 1rem"
              fontStyle="italic"
              rounded="none"
              height="2rem"
              fontSize="1rem"
              color={errors.nickname ? "#C92C2C" : " #f2f2f2"}
              placeholder="Nickname"
              _focus={{
                outline: "none",
              }}
              {...register("nickname", { required: true })}
            />
            {errors.nickname && (
              <Text as="span" color="#FC3737" fontSize="0.875rem">
                É necessário informar um nickname.
              </Text>
            )}
          </Stack>
          <Stack spacing={1}>
            <Text color="#BFBFBF" fontSize="0.875rem">
              E-mail:
            </Text>
            <Input
              value={email}
              type="email"
              borderStyle="solid"
              borderWidth="1px"
              borderColor={errors.email ? "#C92C2C" : "#BFBFBF"}
              backgroundColor={errors.email ? "#FF9E9E" : "#BCBCBC"}
              padding="0.5rem 1rem"
              fontStyle="italic"
              rounded="none"
              height="2rem"
              fontSize="1rem"
              color={errors.email ? "#C92C2C" : " #f2f2f2"}
              placeholder="john.doe@gmail.com"
              _focus={{
                outline: "none",
              }}
            />
            {errors.email && (
              <Text as="span" color="#FC3737" fontSize="0.875rem">
                É necessário informar um email válido.
              </Text>
            )}
          </Stack>

          <FormButton isLoading={isLoading} type="submit">
            Enviar
          </FormButton>
        </Stack>
      </Stack>
      <Flex w="100%" justifyContent="space-between">
        <Image src={`/icons/${type}.svg`} w="28px" h="28px" />
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
          onClick={() => window.open("/tutorial", "_blank")}
        >
          Como conectar minha carteira?
        </Flex>
        <Box w="28px" h="28px" />
      </Flex>
    </>
  );
};
