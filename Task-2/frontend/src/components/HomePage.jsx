import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import PostCard from "./PostCard"
import axios from "axios"


const HomePage = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
              const response = await axios.get('http://localhost:3000/api/v1/user/me', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
              });
              setUser(response.data);
            } catch (error) {
                console.log(error)
            } finally {
              setIsLoading(false);
            }
          };
      
          fetchUserDetails();
    }, [])


    return <div className="container mx-auto px-4 py-6">

        <Navbar isLoggedIn={user.isLoggedIn} user={user.userDetails} />

        <div className="mt-8 flex justify-center items center">
            <div className="grid grid-cols w-5/6 md:w-3/6 lg:w-2/6 gap-y-8">

                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />

            </div>
        </div>
    </div>
}

export default HomePage