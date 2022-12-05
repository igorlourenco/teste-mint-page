import { Flex, Image, Input, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationProps } from ".";
import { UserContext } from "../../contexts/user-context";
import { FormButton } from "../form-button";

export const Step3 = ({ type, setStep }: ValidationProps) => {
  const toast = useToast();

  const { email } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    if (email) {
      const { data: confirmation } = await axios.post(
        "/api/check-hotmart-access",
        {
          email,
          id_transacao: data.id_transacao,
        }
      );

      if (
        confirmation &&
        confirmation.result &&
        confirmation.result.id_transacao === data.id_transacao &&
        confirmation.result.email === email
      ) {
        setIsLoading(false);

        setStep(4);
        toast({
          title: "Email verificado com sucesso.",
          status: "success",
        });
        return;
      } else {
        setIsLoading(false);
        toast({
          title: "Informe um código de transação correto.",
          status: "warning",
        });
      }
    } else {
      setIsLoading(false);
      toast({
        title: "Preencha todos os campos.",
        status: "warning",
      });
    }
  };

  return (
    <>
      <Image mt="2.5rem" src="/icons/send3.svg" w="54px" h="54px" />
      <Stack px="4rem">
        <Text fontSize="1rem" textAlign="center">
          Você tem um código de transação da Hotmart. <br /> Digite para a
          validação abaixo (código iniciado em HP).
        </Text>
        <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={1}>
            <Text color="#BFBFBF" fontSize="0.875rem">
              E-mail:
            </Text>
            <Input
              type="text"
              borderStyle="solid"
              borderWidth="1px"
              borderColor={errors.id_transacao ? "#C92C2C" : "#BFBFBF"}
              backgroundColor={errors.id_transacao ? "#FF9E9E" : "#BCBCBC"}
              padding="0.5rem 1rem"
              fontStyle="italic"
              rounded="none"
              height="2rem"
              fontSize="1rem"
              color={errors.id_transacao ? "#C92C2C" : " #f2f2f2"}
              placeholder="HP00000000000"
              _focus={{
                outline: "none",
              }}
              {...register("id_transacao", { required: true })}
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
      <Flex w="100%" justifyContent="flex-start">
        <Image src={`/icons/${type}.svg`} w="28px" h="28px" />
      </Flex>
    </>
  );
};
