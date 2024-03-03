import GroupHead from "./GroupHead"
import Navbar from "./Navbar"
import { headImgData } from '../data/grouHead'
import FeedSection from "./FeedSection"

const Desktop = () => {

    return <>
        <Navbar />
        <GroupHead imgSrc={headImgData.imgSrc} title={headImgData.title} description={headImgData.description} />
        <FeedSection />
    </>
}

export default Desktop