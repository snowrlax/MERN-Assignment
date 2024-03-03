import { feedTabData } from "../data/feedTabData"
import Link from "./Link"


const FeedsTab = () => {


    return <div className="">
        <div className="d-flex justify-content-between align-items-center mb-1 d-block d-md-none feeds-tab-sm">
            <h4>Posts(368)</h4>
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter: All
            </button>
        </div>

        <div className=" row d-none d-md-block">
            <ul className="nav nav-tabs">
                {feedTabData.map(data => (
                    <Link key={data.id} title={data.title} className={data.className} />
                ))}

                <button className="btn btn-secondary dropdown-toggle" role="dropdown" data-bs-toggle="dropdown" aria-expanded="false">Write a Post</button>
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Join Group
                </button>
            </ul>
        </div>
    </div>

}

export default FeedsTab