import ConteudoMD from "../shared/ConteudoMD"

export interface PostProps {
    markdown: string
}

export default function ConteudoPost(props: PostProps) {
    return (
        <div className="flex flex-col w-full items-stretch p-6 bg-zinc-50 shadow-sm rounded-xl">
            <div className="text-justify" style={{ maxWidth: "100%" }}>
                <ConteudoMD markdown={props.markdown} />
            </div>
        </div>
    )
}