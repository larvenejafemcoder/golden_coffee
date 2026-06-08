import { type ReactNode } from 'react'

interface SectionHeaderProps {
    title: string
    subTitle?: string
    hasSeparator?: boolean
    children?: ReactNode
}

export default function SectionHeader({ title, subTitle, children }: SectionHeaderProps) {
    return (
        <div
            className="section-header flex justify-between items-center text-zinc-700 dark:text-white mb-5 md:mb-12">
            <div>
                <h2 className="font-morabba-medium text-xl xs:text-2xl md:text-5xl"> {title} </h2>
                {
                    !subTitle ? null : (
                        <p className="font-morabba text-md xs:text-lg md:text-3xl mt-0.5 md:mt-1.5">
                            {subTitle}
                        </p>
                    )
                }
            </div>
            {children}
        </div>
    )
}
