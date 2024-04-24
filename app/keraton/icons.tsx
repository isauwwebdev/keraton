import logo from "@/public/star.ico"
import Image from "next/image"

export function Icon({ className = "h-6 w-6 mx-auto items-center" }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={logo} alt="Logo" />
    </div>
  )
}