import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // Dummy data for posts
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' }
  ]);

  // Function to delete a post
  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
      {/* Posts section */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
            </div>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit</button>
              <button onClick={() => handleDeletePost(post.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;