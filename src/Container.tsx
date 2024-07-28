import { ReactNode } from "react"
import cn from "./lib/utils"

const Container = ({children, className=""}) => {
  return (
    <div  className={cn("w-full max-w-7xl mx-auto mt-16",className)}>
        {children}
    </div>
  )
}

export default Container