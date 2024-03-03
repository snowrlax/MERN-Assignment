import FeedsTab from "./FeedsTab"
import Posts from "./Posts"

const FeedSection = () => {

    return <section className="p-md-4" id="feedSection">
        <FeedsTab />
        <div className="row">
            <div className="col-12 col-md-7 feed p-md-4">
                <Posts />
            </div>
        </div>
    </section>
}

export default FeedSection