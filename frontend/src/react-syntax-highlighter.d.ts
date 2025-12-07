declare module "react-syntax-highlighter" {
    import { ComponentType } from "react"
    export const Prism: ComponentType<{ [key: string]: unknown }>
}

declare module "react-syntax-highlighter/dist/esm/styles/prism/coy" {
    const tema: Record<string, unknown>
    export default tema
}
