import { use } from "react"
import Post from './Post'

export default function Posts({postsPromise}){

    const posts= use(postsPromise)
    console.log(posts)
    return(
        <div className="border">
            <h2>All posts: {posts.length} </h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}