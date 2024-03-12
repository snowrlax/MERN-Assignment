import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DATABASE_URL } from '../../config'
import axios from "axios";

const EditPost = () => {
    const { postid } = useParams()
    const [editImgUrl, setEditImgUrl] = useState("")
    const [editContent, setEditContent] = useState("")
    const [postExists, setPostExists] = useState(true)
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
          const response = await axios.get(`${DATABASE_URL}/api/v1/post/myposts`, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token")
            }
          });

          const post = response.data.myposts.filter((post) => {
            if(post._id == postid) return post
          })

          // if the postid doesn't match any of myposts
          if(!post || post.length == 0) {
            setPostExists(false)
          }
          setEditContent(post[0].content)
          setEditImgUrl(post[0].contentImg)

        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);

    return <div className="max-w-lg mx-auto mt-8 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Post</h2>
        {postExists ? 
        <div>
            <div className="mb-4">
                <label htmlFor="imageSource" className="block text-sm font-medium text-gray-700">Image Source</label>
                <input value={ editImgUrl } onChange={(e) => {
                    setEditImgUrl(e.target.value)
                }} type="text" id="imageSource" name="imageSource" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                <textarea value={ editContent } onChange={(e) => {
                    setEditContent(e.target.value)
                }} id="content" name="content" rows="4" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"></textarea>
            </div>
            <button onClick={() => {
                const response = axios.put(`${DATABASE_URL}/api/v1/post/myposts/${postid}`,
                    {
                        editContent,
                        editImgUrl
                    }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                })
                navigate('/dashboard')
            }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update</button>
        </div> 

        : <p className="">Post doesn't exist!</p> }
    </div>
}

export default EditPost