import { apiGet } from "./api";
import type { Post } from "../types/post";

export async function getPosts(): Promise<Post[]> {
    const data = await apiGet<Post[]>("/posts");

    if (!Array.isArray(data)) {
        throw new Error("Dữ liệu lỗi");
    }

    return data;
}

export async function getPostById(
    id: string
): Promise<Post | undefined> {
    const posts = await getPosts();

    return posts.find((post) => String(post.id) === id);
}