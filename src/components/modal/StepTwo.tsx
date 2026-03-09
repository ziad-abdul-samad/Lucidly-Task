import { useAtom } from "jotai";
import { currentStepAtom } from "@/store/setupAtoms";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function StepTwo() {
  const [, setStep] = useAtom(currentStepAtom);

  const next = () => setStep(3);
  const back = () => setStep(1);

  return (
    <div className="flex flex-col items-center gap-6 bg-white py-12 px-8 w-full">

      {/* Header */}
      <h2 className="text-xl font-semibold text-[#434E61] text-center">
        Pick your language and country/region
      </h2>

      {/* Multiselects */}
      <div className="w-full flex flex-col gap-4">
        {["English (US)", "Italy (Italia)"].map((option) => (
          <div
            key={option}
            className="w-full bg-[#F6F6F6] py-3 px-4 rounded-md text-gray-700 flex items-center justify-between cursor-pointer"
          >
            <span>{option}</span>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center w-full mt-6 gap-2">

        {/* Next Button */}
        <Button
          onClick={next}
          className="bg-orange-500 hover:bg-orange-600 text-white uppercase font-semibold shadow-md w-full"
        >
          Next
        </Button>

        {/* Back as text */}
        <span
          onClick={back}
          className="text-gray-700 text-sm cursor-pointer mt-2 underline"
        >
          Back
        </span>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-4">
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-orange-500 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}