import FeedsTab from "./FeedsTab"
import Posts from "./Posts"

const FeedSection = () => {

    return <section className="p-md-3" id="feedSection">
        <FeedsTab />
        <div className="row">
            <div className="col-12 col-md-7 feed">
                <Posts />
            </div>
            <div className="d-none d-md-block col-md-3 locationInput">
                    <input className="form-control" type="text" placeholder="Noida, India" aria-label="default input example" />
                    <p className="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" clipPath="url(#clip0_1_853)">
                                <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_853">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Your location will help us serve better and extend a personalised experience.
                    </p>
                </div>
        </div>
    </section>
}

export default FeedSection