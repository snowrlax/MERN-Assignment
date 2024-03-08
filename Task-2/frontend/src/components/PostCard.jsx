import axios from "axios"
import { useNavigate } from "react-router-dom"

const PostCard = ({ postId, imgSrc, description, username, likeCount, isLoggedIn }) => {
    const navigate = useNavigate()

    return <div className="bg-white rounded-lg shadow-md p-6">

        <img className="object-cover w-full h-60 md:h-64 bg-gray-300 mb-4" src={imgSrc} alt="postImage" />
        <p className="text-lg font-bold text-gray-700 mb-4">{`${description}`}</p>

        {
            isLoggedIn ?
                <button onClick={() => {
                    axios.post(`http://localhost:3000/api/v1/post/like/${postId}`,
                        null,
                        {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                }}
                    className="bg-blue-500 text-white py-2 px-4 rounded-full">{`Like (${likeCount})`}</button>
                :
                <button onClick={() => {
                    navigate('/signup')
                }} className="bg-blue-500 text-white py-2 px-4 rounded-full">{`Like (${likeCount})`}</button>
        }

        <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-full ml-2">Comment</button>
    </div>
}

export default PostCard