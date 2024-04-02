import { Post } from "../store/postSlice";

const apiEndPoint: string = "api/PostModels";

export async function getPosts(): Promise<Post[]> {
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    return data;
}

export async function createPost() {}

export async function getSinglePost() {}

export async function putPost() {}

export async function deletePost() {}
