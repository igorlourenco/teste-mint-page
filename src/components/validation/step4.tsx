import { Heading, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user-context";
export const Step4 = () => {
  const { email, address, nickname } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    async function createUserSteam() {
      await axios.post("/api/create-user-steam", {
        email,
        id_transacao: null,
        wallet: address,
        nickname,
        edition_name: "Steam",
        edition_number: 4,
        status: 1,
      });
    }

    async function updateUserHotmart() {
      await axios.post("/api/update-user-hotmart", {
        email,
        wallet: address,
        nickname,
        status: 1,
      });
    }

    if (router.query.type === "steam") {
      createUserSteam();
    }

    if (router.query.type === "hotmart") {
      updateUserHotmart();
    }

    // busca o edition number
    // dispara email marketing de acordo com o edition number
  }, []);

  return (
    <Stack alignItems="center">
      <Heading
        fontFamily="Teko"
        fontWeight="700"
        fontSize="103.2px"
        lineHeight="97%"
        color="#e76933"
      >
        Parabéns!
      </Heading>
      <Text color="white" fontWeight="500" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed rutrum
        mauris. Pellentesque placerat sem nunc, a iaculis elit vestibulum eu.
        Aliquam ut porttitor tellus. Nunc porttitor vel dui non blandit.
        Curabitur bibendum quam venenatis consectetur dignissim. Phasellus
        luctus nec sapien vel imperdiet. Integer quis lectus efficitur,
        convallis est vel, consequat nibh. Aenean vitae hendrerit massa, id
        scelerisque purus. Curabitur sodales pulvinar tortor eu facilisis. Duis
        consequat at lacus eget dignissim. Sed ac interdum felis.
      </Text>
    </Stack>
  );
};
