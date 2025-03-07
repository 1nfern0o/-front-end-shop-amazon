import { FC, PropsWithChildren } from "react"
import cn from "clsx"

interface IHeading {
    className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => 
    <h1 className={cn('font-semibold text-3xl', className)}>{children}</h1>

export default Heading
