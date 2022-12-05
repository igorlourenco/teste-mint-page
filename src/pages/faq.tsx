import { Heading, Stack, Text } from "@chakra-ui/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const FAQ = () => {
  return (
    <Stack
      spacing={0}
      minH="100vh"
      justifyContent="space-between"
      alignItems="center"
    >
      <Header />
      <Stack w="100%" alignItems="center" p={[4, 8, 16, 0]} py={[4, 8, 16, 24]}>
        <Heading
          fontSize="3.75rem"
          fontWeight="700"
          color="white"
          fontFamily="Teko"
          w={["100%", "100%", "70%", "70%"]}
          textAlign="left"
        >
          F.A.Q.
        </Heading>
        <Stack w={["100%", "100%", "50%", "50%"]}>
          {questions.map((item, index) => (
            <Stack key={index}>
              <Text fontSize="1.5rem" color="#E76933">
                {item.question}
              </Text>
              <Text fontSize="1.25rem" color="#D9D9D9">
                {item.answer}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer type={2} />
    </Stack>
  );
};
export default FAQ;

const questions = [
  {
    question: "Pergunta 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed rutrum mauris. Pellentesque placerat sem nunc, a iaculis elit vestibulum eu. Aliquam ut porttitor tellus. Nunc porttitor vel dui non blandit. Curabitur bibendum quam venenatis consectetur dignissim. Phasellus luctus nec sapien vel imperdiet. Integer quis.",
  },
  {
    question: "Pergunta 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed rutrum mauris. Pellentesque placerat sem nunc, a iaculis elit vestibulum eu. Aliquam ut porttitor tellus. Nunc porttitor vel dui non blandit. Curabitur bibendum quam venenatis consectetur dignissim. Phasellus luctus nec sapien vel imperdiet. Integer quis.",
  },
  {
    question: "Pergunta 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed rutrum mauris. Pellentesque placerat sem nunc, a iaculis elit vestibulum eu. Aliquam ut porttitor tellus. Nunc porttitor vel dui non blandit. Curabitur bibendum quam venenatis consectetur dignissim. Phasellus luctus nec sapien vel imperdiet. Integer quis.",
  },
  {
    question: "Pergunta 4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed rutrum mauris. Pellentesque placerat sem nunc, a iaculis elit vestibulum eu. Aliquam ut porttitor tellus. Nunc porttitor vel dui non blandit. Curabitur bibendum quam venenatis consectetur dignissim. Phasellus luctus nec sapien vel imperdiet. Integer quis.",
  },
  {
    question: "Pergunta 5",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed rutrum mauris. Pellentesque placerat sem nunc, a iaculis elit vestibulum eu. Aliquam ut porttitor tellus. Nunc porttitor vel dui non blandit. Curabitur bibendum quam venenatis consectetur dignissim. Phasellus luctus nec sapien vel imperdiet. Integer quis.",
  },
];
