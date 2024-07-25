import { ReactNode } from "react"

const Container = ({children}) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-16">
        {children}
    </div>
  )
}

export default Container