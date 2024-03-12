import axios from "axios"
import { useNavigate } from "react-router-dom"
import { DATABASE_URL } from '../../config'
import { FaRegHeart, FaRegComment } from "react-icons/fa"

const PostCard = ({
    postId,
    imgSrc,
    description,
    username,
    likeCount,
    isLoggedIn,
    fetchPosts
}) => {
    const navigate = useNavigate()

    return <div className="bg-stone-100 rounded-lg shadow-md p-6">

        <img className="object-cover w-full h-60 md:h-64 bg-gray-300 mb-4" src={imgSrc} alt="postImage" />
        <a className="text-sm font-italics text-gray-400 mb-4">@{username}</a>
        <p className="text-lg font-bold text-gray-700 mb-4">{`${description}`}</p>
        <div className="flex flex-row items-center">
            {
                isLoggedIn ?
                    <button onClick={() => {
                        axios.post(`${DATABASE_URL}/api/v1/post/like/${postId}`,
                            null,
                            {
                                headers: {
                                    Authorization: "Bearer " + localStorage.getItem("token")
                                }
                            })
                        fetchPosts()
                    }}
                        className="flex flex-row items-center bg-blue-500 text-white py-2 px-4 rounded-full"><FaRegHeart className="mx-1" /> {`Like (${likeCount})`} </button>
                    :
                    <button onClick={() => {
                        navigate('/signup')
                    }} className="bg-blue-500 text-white py-2 px-4 rounded-full">{`Like (${likeCount})`}</button>
            }
            <button className="flex flex-row items-center bg-gray-200 text-gray-600 py-2 px-4 rounded-full ml-2"><FaRegComment className="mx-1" />Comment</button>
        </div>
    </div>
}

export default PostCard