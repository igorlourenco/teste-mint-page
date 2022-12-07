import { Stack } from "@chakra-ui/react";
import { useState } from "react";

import { Steps } from "../steps";
import { Step1 } from "./step1";
import { Step2 } from "./step2";
import { Step3 } from "./step3";
import { Step4 } from "./step4";

export interface ValidationProps {
  type: "steam" | "hotmart" | string;
  setStep?: any;
  userOwnsGameOnSteam?: boolean;
}

export const Validation = ({
  type,
  userOwnsGameOnSteam = false,
}: ValidationProps) => {
  const [step, setStep] = useState<number>(2);

  return (
    <Stack w={step < 4 ? "455px" : "664px"} alignItems="center">
      <Steps type={type} step={step} />
      {step < 4 ? (
        <Stack
          w="100%"
          p="1rem"
          gap="1rem"
          alignItems="center"
          justifyContent="center"
          bgGradient="linear(180deg, rgba(89, 89, 89, 0) 0%, #595959 100%)"
          border="1px solid #E76933"
        >
          {step === 1 && (
            <Step1
              type={type}
              setStep={setStep}
              userOwnsGameOnSteam={userOwnsGameOnSteam}
            />
          )}
          {step === 2 && <Step2 type={type} setStep={setStep} />}
          {step === 3 && <Step3 type={type} setStep={setStep} />}
        </Stack>
      ) : (
        <Step4 />
      )}
    </Stack>
  );
};
