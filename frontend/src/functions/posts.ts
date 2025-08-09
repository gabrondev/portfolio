import { Post, Tag } from "@core";
import { httpGet } from "./api";

export async function obterPosts() {
    const posts: Post[] = await httpGet('/posts');
    return posts
}

export async function obterPostsMaisRecentes(): Promise<Post[]> {
    return await httpGet('/posts/recentes')
}

export async function obterPostPorSlug(slug: string): Promise<Post | null> {
    return await httpGet(`/posts/${slug}`);
}

export async function obterTags() {
    const tags: Tag[] = await httpGet('/posts/tags')
    return tags
}