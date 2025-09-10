import ConteudoMD from "../shared/ConteudoMD"

export interface PostProps {
    markdown: string
}

export default function ConteudoPost(props: PostProps) {
    return (
        <div className="flex flex-col w-full items-stretch p-6 bg-black border border-zinc-800 rounded-2xl">
            <div className="prose prose-zinc prose-invert text-justify" style={{ maxWidth: "100%" }}>
                <ConteudoMD markdown={props.markdown} />
            </div>
        </div>
    )
}