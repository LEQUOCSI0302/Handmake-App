import { apiGet } from "./api";
import type { Post } from "../types/post.ts";

export function getPosts() {
    return apiGet<Post[]>("/posts");
}
