import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DashboardPost from './DashboardPost';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/post/myposts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      setPosts(response.data.myposts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  // Function to delete a post
  const handleDeletePost = (postId) => {
    const response = axios.delete(`http://localhost:3000/api/v1/post/delete/${postId}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
  };

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h2>
      {/* Posts section */}
      <div className="space-y-4">
        {posts.map(post => (
          <DashboardPost key={post._id} postId={post._id} content={post.content} handleDeletePost={handleDeletePost} fetchData={fetchData} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;