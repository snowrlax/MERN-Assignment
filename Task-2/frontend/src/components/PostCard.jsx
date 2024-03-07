const PostCard = () => {
    return <div className="bg-white rounded-lg shadow-md p-6">
        <div className="w-full h-60 md:h-64 bg-gray-300 mb-4"></div>
        <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet velit vitae ligula tincidunt malesuada.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Like</button>
        <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-full ml-2">Comment</button>
    </div>
}

export default PostCard