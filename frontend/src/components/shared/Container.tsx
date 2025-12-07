export interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export default function Container(props: ContainerProps) {
    return (
        <div className={`max-w-5xl mx-auto px-3 ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}