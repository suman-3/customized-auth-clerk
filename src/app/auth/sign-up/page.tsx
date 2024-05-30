import ButtonHandler from "@/components/forms/sign-up/button-handlers";
import SignUpFromProvider from "@/components/forms/sign-up/from-provider";

import HighLightBar from "@/components/forms/sign-up/highlight-bar";
import RegistrationFormStep from "@/components/forms/sign-up/registration-step";

import React from "react";

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
      <div className="flex flex-col h-full gap-3">
        <SignUpFromProvider>
          <div className="flex flex-col gap-3">
            <RegistrationFormStep />
            <ButtonHandler />
          </div>
          <HighLightBar />
        </SignUpFromProvider>
      </div>
    </div>
  );
};

export default SignUp;
