/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from "../src/redux/postSlice";

const port: string = "7175";
const apiEndPoint: string = `https://localhost:${port}/api/PostModels`;

export async function getPosts(): Promise<Post[]> {
    try {
        const response = await fetch(apiEndPoint);
        const data = await response.json();
        console.log("DATA:" + data);
        const posts: Post[] = JSON.parse(data);

        return posts;
    } catch (e: any) {
        console.error(e.message);
        return [];
    }
}

export async function createPost(newPost: Post): Promise<void> {
    await fetch(apiEndPoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
    });
}

export async function getSinglePost(id: number): Promise<Post> {
    const response = await fetch(`${apiEndPoint}/${id}`);
    const data = await response.json();
    return data as Post;
}

export async function putPost(updatedPost: Post) {
    await fetch(`${apiEndPoint}/${updatedPost._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
    });
}

export async function deletePost(id: number) {
    await fetch(`${apiEndPoint}/${id}`, {
        method: "DELETE",
    });
}
