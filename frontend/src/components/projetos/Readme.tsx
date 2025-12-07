import ConteudoMD from "../shared/ConteudoMD"

export interface ReadmeProps {
    markdown: string
}

export default function Readme(props: ReadmeProps) {
    return (
        <div className="flex flex-col w-full items-stretch p-6 bg-zinc-50 shadow-sm rounded-xl">
            <div style={{ maxWidth: "100%" }}>
                <ConteudoMD markdown={props.markdown} />
            </div>
        </div>
    )
}