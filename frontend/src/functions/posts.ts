import { Post } from "@core";
import { httpGet } from "./api";

export async function obterPosts() {
    const posts: Post[] = await httpGet('/posts');
    return posts
}

export async function obterPostPorSlug(slug: string): Promise<Post | null> {
    return await httpGet(`/posts/${slug}`);
}