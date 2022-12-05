import { Flex, Image, Input, Stack, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ValidationProps } from ".";
import { UserContext } from "../../contexts/user-context";
import { FormButton } from "../form-button";

export const Step1 = ({
  type,
  setStep,
  userOwnsGameOnSteam,
}: ValidationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setEmail } = useContext(UserContext);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (form) => {
    setIsLoading(true);
    if (type === "hotmart") {
      const { data } = await axios.get(`/api/get-emails-hotmart`, {
        params: {
          email: form.email,
        },
      });
      if (data && data.result && data.result.email === form.email) {
        setEmail(form.email);
        toast({
          title: "Email registrado.",
          status: "success",
        });
        setIsLoading(false);
        setStep(2);
      } else {
        setIsLoading(false);
        toast({
          title: "Email não registrado",
          status: "warning",
        });
      }
    }

    if (type === "steam") {
      setEmail(form.email);
      toast({
        title: "Email registrado.",
        status: "success",
      });
      setIsLoading(false);
      setStep(2);
    }
  };

  return (
    <>
      <Image mt="2.5rem" src="/icons/mail2.svg" w="54px" h="54px" />
      <Stack px="4rem">
        {type === "steam" && !userOwnsGameOnSteam ? (
          <Text fontSize="1rem" textAlign="center">
            Você não tem o game <br /> na sua biblioteca do Steam.
          </Text>
        ) : (
          <>
            <Text fontSize="1rem" textAlign="center">
              Insira seu e-mail para a validação em nosso banco de dados
            </Text>
            <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={1}>
                <Text color="#BFBFBF" fontSize="0.875rem">
                  E-mail:
                </Text>
                <Input
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
                  {...register("email", { required: true })}
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
          </>
        )}
      </Stack>
      <Flex w="100%" justifyContent="flex-start">
        <Image src={`/icons/${type}.svg`} w="28px" h="28px" />
      </Flex>
    </>
  );
};
