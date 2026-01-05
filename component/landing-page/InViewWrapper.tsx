import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

interface InViewWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    placeholderHeight?: number
    index?: number
    label?: string
}

export default function InViewWrapper({
    children,
    placeholderHeight,
    index,
    label,
    className,
    ...restProps
}: InViewWrapperProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

    // inView 상태가 변경될 때마다 로그 출력
    useEffect(() => {
        if (inView && label) {
            console.log(`${label} 섹션이 뷰포트에 진입했습니다! (inView: true)`)
        }
    }, [inView, label])

    return (
        <section 
            ref={ref} 
            className={className}
            data-index={index}
            data-label={label}
            {...restProps}
        >
            {
                inView ?
                    children :
                    <div className={'w-screen bg-white'} style={{ height: placeholderHeight ?? 0 }} />
            }
        </section>
    )
}