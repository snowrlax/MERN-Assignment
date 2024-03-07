import GroupHead from "./GroupHead"
import Navbar from "./Navbar"
import { headImgData } from '../data/grouHead'
import FeedSection from "./FeedSection"
import SigninModal from "./SigninModal"
import { useState } from "react"

const Desktop = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return <>
        <Navbar auth={{isLoggedIn, setIsLoggedIn}} >
            Create Account.
            <SigninModal />
        </Navbar>
        <GroupHead imgSrc={headImgData.imgSrc} title={headImgData.title} description={headImgData.description} />
        <FeedSection />

    </>
}

export default Desktop