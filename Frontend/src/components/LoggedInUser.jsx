import { useEffect, useState } from "react"
import Navbar from "./Navbar"

const LoggedInUser = () => {
    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        setUserDetails({
            userName: "Siddharth Goyal",
            pfpSrc: "https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAmKkIVxLb6b16SKpLtsBWvQ-iXeqNx7SYgFj0VgS27SiNnkmqiXR4Wnk8F5RO8DOQUWKveIWFEiVz7qCjRP4uwZ~KmrbARdSy7zojEv7XtdeumCN8nxmDShEwSrUXZRfzRZ6ERLz-rQLF83V4LrEY35zJgx2oDqPSYi~O4aXKTSyACTlqrq2oCZGUNrbBez~JXyPlgctlPOsmBwE4IdDnWQteJB0BngL0TE1edXkWtlpBDyulWApBPaViolBQZy55x4l2LbtjFOip1ACu4VhAqcUllvcNNUTBA6nk93HemSPP19TRz0YiilmG3OhqcyeyzL9hH8SdaXjLLXmYnBfA__"
        })
    }, [])

    return <section>
        <Navbar>
                <img className="mx-2" src={userDetails.pfpSrc} style={{height: "28px", width: "28px", objectFit: "cover", borderRadius: "30px"}} />
                <span className="">{userDetails.userName}</span>
            
        </Navbar> 
    </section>
}

export default LoggedInUser