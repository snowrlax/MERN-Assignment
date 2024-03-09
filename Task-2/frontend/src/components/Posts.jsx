import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import axios from "axios"

const Posts = ({ isLoggedIn }) => {

    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try{
            axios.get("http://localhost:3000/api/v1/post/posts")
            .then(response => {
                setPosts(response.data.posts)
            }) 
        } catch (e) {
            console.error("Cannot fetch posts !" + e)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return <div className="mt-8 flex justify-center items center">
        <div className="grid grid-cols w-5/6 md:w-3/6 lg:w-2/6 gap-y-8">

            {
                posts.map(post => (
                    <PostCard key={post._id} 
                        username={post.user.firstName} 
                        postId={post._id} 
                        imgSrc={post.contentImg} 
                        description={post.content} 
                        likeCount={post.likes.length} 
                        isLoggedIn={isLoggedIn} 
                        fetchPosts={fetchPosts}
                    />
                ))
            }

        </div>
    </div>
}

export default Posts