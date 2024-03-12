import { useNavigate } from "react-router-dom"


const DashboardPost = ({ postId, title, content, handleDeletePost, fetchData }) => {
    const navigate = useNavigate()

    return <div className="">
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{content}</p>
            </div>
            <div>
                <button onClick={() => {
                    navigate(`/dashboard/editpost/${postId}`)
                }} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit</button>
                <button onClick={() => {
                    handleDeletePost(postId)
                    fetchData()
                    navigate('/dashboard')
                }} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
            </div>
        </div>
    </div>
}

export default DashboardPost