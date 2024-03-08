const CreatePost = () => {
    return (
      <div className="max-w-lg mx-auto mt-8 bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="imageSource" className="block text-sm font-medium text-gray-700">Image Source</label>
            <input type="text" id="imageSource" name="imageSource" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea id="content" name="content" rows="4" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Post</button>
        </form>
      </div>
    );
  };
  
  export default CreatePost;