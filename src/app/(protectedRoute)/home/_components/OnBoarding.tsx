import { onBoardingSteps } from "@/lib/data";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const OnBoarding = () => {
  return (
    <div className="flex flex-col gap-1 items-start justify-start">
      {onBoardingSteps.map((steps, index) => (
        <Link href={steps.link} key={index} className="flex items-center gap-2">
          <CircleCheck />
          <p className="text-base text-foreground">
            {steps.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default OnBoarding;