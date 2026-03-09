import { useAtom } from "jotai"

import { modalOpenAtom, currentStepAtom } from "@/store/setupAtoms"

import { Dialog, DialogContent } from "@/components/ui/dialog"

import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepInterests from "./StepInterests"
import ConfirmationDialog from "./ConfirmationDialog"

type Props = {
  open: boolean
}

export default function SetupModal({ open }: Props) {

  const [, ] = useAtom(modalOpenAtom)
  const [step] = useAtom(currentStepAtom)

  return (
    <Dialog open={open} onOpenChange={() => {}}>

      <DialogContent className="max-w-md">

        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepInterests />}
        {step === 4 && <ConfirmationDialog />}
      </DialogContent>

    </Dialog>
  )
}