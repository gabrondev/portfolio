declare module "react-syntax-highlighter" {
    import { ComponentType } from "react"
    export const Prism: ComponentType<{ [key: string]: unknown }>
}

declare module "react-syntax-highlighter/dist/esm/styles/prism/atom-dark" {
    const atomDark: Record<string, unknown>
    export default atomDark
}
