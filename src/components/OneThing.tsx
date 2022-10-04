import React from "react";
import CustomButton from "./CustomButton";

interface IOneThingProps {
  thing: string;
  handleCompletedThing: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const OneThing: React.FC<IOneThingProps> = ({
  thing,
  handleCompletedThing,
}) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center">
        {thing && thing ? thing : `What is your "One Thing"?`}
      </h1>
      <CustomButton
        text="Mark Down"
        handleCompletedThing={handleCompletedThing}
      />
    </>
  );
};

export default OneThing;
