import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import Posts from "../components/Posts"


const HomePage = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
              const response = await axios.get(`${process.env.DATABASE_URL}/api/v1/user/me`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
              });
              setUser(response.data);
            } catch (error) {
                res.status(401).json({
                  msg: "bad request"
                })
            } finally {
              setIsLoading(false);
            }
          };
      
          fetchUserDetails();
    }, [])


    return <div className="container mx-auto px-4 py-6">

        <Navbar isLoggedIn={user.isLoggedIn} user={user.userDetails} />

        <Posts isLoggedIn={user.isLoggedIn} />
    </div>
}

export default HomePage