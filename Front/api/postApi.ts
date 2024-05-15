/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from "../src/redux/postSlice";

const port: string = "5119";
const apiEndPoint: string = `http://localhost:${port}/api/PostModels`;


export async function getPosts(): Promise<Post[]> {
    try {
        const response = await fetch(apiEndPoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        console.log("DATA:" + data.toString());
        const posts: Post[] = data;

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
    const response = await fetch(`${apiEndPoint}/${id}`,  {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    return data as Post;
}

export async function putPost(updatedPost: Post) {
    await fetch(`${apiEndPoint}/${updatedPost.id}`, {
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
