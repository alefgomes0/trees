import { ReactNode } from "react"

type SocialMediaIconsProps = {
  children?: ReactNode
}

export const SocialMediaIcons = (props?:SocialMediaIconsProps) => {
  return (
    <div className="flex items-center justify-between">
      {props?.children}
      <h5>O O O O O</h5>
    </div>
  )
}