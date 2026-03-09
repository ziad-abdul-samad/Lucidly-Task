import { useAtom } from "jotai"
import { modalOpenAtom, completedAtom } from "@/store/setupAtoms"
import { Button } from "@/components/ui/button"

export default function ConfirmationDialog() {
  const [, setOpen] = useAtom(modalOpenAtom)
  const [completed] = useAtom(completedAtom)

  if (!completed) return null

  return (
    <div className="flex flex-col items-center justify-center gap-6 bg-white py-12 px-8 w-full">
      <h2 className="text-2xl font-bold text-[#434E61]">🎉 Setup Complete!</h2>
      <p className="text-gray-600 text-center">
        You have successfully selected your interests.
      </p>
      <Button
        onClick={() => setOpen(false)}
        className="bg-orange-500 hover:bg-orange-600 text-white w-32"
      >
        Close
      </Button>
    </div>
  )
}