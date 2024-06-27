import { getData } from "@/app/lib/getData";

const URL = `https://jsonplaceholder.typicode.com/posts`
 export default async function PostList() {
    let posts = await getData(URL);
    posts = posts.splice(0,11);
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}>{post.title}</li>
                )
            })}
        </ul>
      )
    }