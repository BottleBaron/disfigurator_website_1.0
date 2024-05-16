/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "../src/redux/userSlice";

const port: string = "5119";
const apiEndPoint: string = `http://localhost:${port}/api/User`;

export async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch(apiEndPoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const data = await response.json();
        console.log("DATA:" + data.toString());
        const posts: User[] = data;

        return posts;
    } catch (e: any) {
        console.error(e.message);
        return [];
    }
}
