import { useAtom } from "jotai";
import { nameAtom, emailAtom, currentStepAtom } from "@/store/setupAtoms";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react"; 

export default function StepOne() {
  const [name] = useAtom(nameAtom);
  const [email] = useAtom(emailAtom);
  const [, setStep] = useAtom(currentStepAtom);

  const next = () => {
    if (!name.trim()) return;
    setStep(2);
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-white py-12 px-8">
      <div className="w-32 h-32 bg-[#434E61] rounded-lg flex items-center justify-center text-5xl font-bold text-white">
        A
      </div>

      <p
        className="text-sm text-[#B3B3B3] font-medium"
        style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      >
        {email}
      </p>

      <h2
        className="text-xl font-semibold text-[#434E61]"
        style={{
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          WebkitTextStroke: "1px black",
        }}
      >
        Welcome to Giki
      </h2>
      <div className="w-full bg-[#F6F6F6] flex items-center justify-between px-4 py-3 rounded-md">
        <span className="text-[#FF8C1E] font-semibold text-lg flex-1 text-center">
          {name}
        </span>
        <Pencil className="w-5 h-5 text-gray-400" />
      </div>

      <p
        className="text-sm text-[#262626] text-center p-4 tracking-wider "
        style={{
          textShadow: "0px 4px 4px rgba(0,0,0,0.25)",
          WebkitTextStroke: "1px black",
        }}
      >
        Your answers to the next few questions will help us find the right
        communities for you
      </p>

      <Button
        onClick={next}
        className="bg-orange-500 hover:bg-orange-600 w-full text-white uppercase font-semibold"
      >
        Next
      </Button>

      <div className="flex gap-2 mt-4">
        <span className="w-2 h-2 bg-orange-500 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
