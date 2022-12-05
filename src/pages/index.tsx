import { Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { CTA } from "../sections/cta";
import { Hero } from "../sections/hero";
import { Info } from "../sections/info";
import { OurHistory } from "../sections/our-history";
import Slide from "../sections/slide";

const Index = () => {
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "/api/get-emails-hotmart/?email=igorlourenco.dev@gmail.com"
      );
      const data = await res.json();
      console.log({ data });
    }
    getData();
  }, []);

  return (
    <Stack spacing={0}>
      <Hero />
      <Slide />
      <OurHistory />
      <Info />
      <CTA />
    </Stack>
  );
};
export default Index;
