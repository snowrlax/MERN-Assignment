import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import Posts from "../components/Posts"
import { DATABASE_URL } from '../../config'

const HomePage = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
              const response = await axios.get(`${DATABASE_URL}/api/v1/user/me`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
              });
              setUser(response.data);
            } catch (error) {
                console.error("message: " + error.message)
            } finally {
              setIsLoading(false);
            }
          };
      
          fetchUserDetails();
    }, [])


    return <div className="container mx-auto px-4 py-6">

        <Navbar isLoggedIn={user.isLoggedIn} user={user.userDetails} />
        {isLoading ? 
          <h3 className="">Loading...</h3> :
          <Posts isLoggedIn={user.isLoggedIn} />
        }

    </div>
}

export default HomePage