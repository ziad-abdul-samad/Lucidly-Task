import { useAtom } from "jotai"
import { currentStepAtom, interestsAtom, completedAtom } from "@/store/setupAtoms"
import { Button } from "@/components/ui/button"

const availableInterests = [
  "Sports",
  "Music",
  "Art",
  "Technology",
  "Travel",
  "Gaming",
]

export default function StepInterests() {
  const [selected, setSelected] = useAtom(interestsAtom)
  const [, setStep] = useAtom(currentStepAtom)
  const [, setCompleted] = useAtom(completedAtom)

  const toggleInterest = (interest: string) => {
    if (selected.includes(interest)) {
      setSelected(selected.filter((i) => i !== interest))
    } else {
      if (selected.length < 3) setSelected([...selected, interest])
    }
  }

  const submit = () => {
    if (selected.length === 3) {
      setCompleted(true)
      setStep(4) 
    }
  }



  return (
    <div className="flex flex-col items-center gap-6 bg-white py-12 px-8 w-full">

      <h2 className="text-xl font-semibold text-[#434E61] text-center">
        Tell us what you’re  interested in
      </h2>

      <div className="grid grid-cols-3 gap-4 w-full">
        {availableInterests.map((interest, idx) => {
          const isSelected = selected.includes(interest)
          return (
            <div
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`cursor-pointer rounded-md flex items-center justify-center h-24 border transition-all duration-200 ${
                isSelected
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "bg-[#F6F6F6] border-gray-300 text-gray-700"
              }`}
            >
              <span className="text-sm font-semibold">{`Image ${idx + 1}`}</span>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col items-center w-full mt-6 gap-2">

        <Button
          onClick={submit}
          disabled={selected.length !== 3}
          className={`uppercase font-semibold  px-12 ${
            selected.length === 3
              ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Pick 3 more
        </Button>
      </div>

      <div className="flex gap-2 mt-4">
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-gray-300 rounded-full" />
        <span className="w-2 h-2 bg-orange-500 rounded-full" />
      </div>
    </div>
  )
}