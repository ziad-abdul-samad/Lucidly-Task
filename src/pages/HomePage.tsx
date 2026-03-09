import { useAtom } from "jotai"
import { modalOpenAtom } from "@/store/setupAtoms"
import SetupModal from "@/components/modal/SetupModal"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.png"
export default function HomePage() {
  const [open, setOpen] = useAtom(modalOpenAtom)

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#434E61] gap-6">

      <img src={logo} alt="logo" className="w-72" />

      <Button className="bg-[#FF8C1E] px-32 py-3 text-white shadow-2xl" onClick={() => setOpen(true)}>
        Open Model
      </Button>

      <SetupModal open={open} />

    </div>
  )
}