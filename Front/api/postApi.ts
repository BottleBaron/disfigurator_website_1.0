import { Post } from "../redux/postSlice";

const apiEndPoint: string = "api/PostModels";

export async function getPosts(): Promise<Post[]> {
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    return data as Post[];
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
