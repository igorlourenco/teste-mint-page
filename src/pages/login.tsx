import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Validation } from "../components/validation";
import { userOwnsGame } from "../lib/check";
import router from "../lib/router";

const Login = ({ user }: any) => {
  const router = useRouter();
  const [userOwnsGameOnSteam, setUserOwnsGameOnSteam] = useState(false);
  const type = useMemo(() => router.query.type, [router.query]);

  useEffect(() => {
    async function checkOwnership() {
      if (user && type === "steam") {
        const ownsApp = await userOwnsGame(user.id);
        setUserOwnsGameOnSteam(ownsApp === true);
      }
    }
    checkOwnership();
  }, [user, type]);

  return (
    <Stack
      spacing={0}
      minH="100vh"
      justifyContent="space-between"
      backgroundColor="#262626"
      bgGradient="linear-gradient(180deg, rgba(6, 6, 6, 0) 0%, rgba(6, 6, 6, 0.6) 100%)"
    >
      <Header />
      <Stack
        minH="90vh"
        w="100%"
        py="6rem"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Validation
          type={type as string}
          userOwnsGameOnSteam={userOwnsGameOnSteam}
        />
      </Stack>
      <Footer />
    </Stack>
  );
};
export default Login;

export async function getServerSideProps({ req, res }) {
  await router.run(req, res);
  return { props: { user: req.user || null } };
}
