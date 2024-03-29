import { FaShare } from "react-icons/fa";
const Post = ({
    id,
    imageSrc,
    postType,
    title,
    subtitle,
    location,
    buttonText,
    description,
    userImg,
    userName,
    views
}) => {

    return <div className="" style={{ width: "100%", padding: 0 }}>
        <div className="card post mb-3">

            {imageSrc ? <img src={imageSrc} className="card-img-top custom-card-img" alt={title} style={{ objectFit: "cover", width: "100%" }} /> : ""}

            <div className="card-body">
                <p className="card-text">{postType}</p>

                <div className="flex">
                    <div className="d-flex just">
                        <h5 className="card-title" style={{ fontFamily: 'IBM Plex Sans', fontSize: "22px" }}>{title}</h5>
                        <div className="dropdown">
                            <button className="btn btn-light dropdown-toggle custom-post-options" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6667 14C18.6667 15.2833 19.7167 16.3333 21 16.3333C22.2834 16.3333 23.3334 15.2833 23.3334 14C23.3334 12.7166 22.2834 11.6666 21 11.6666C19.7167 11.6666 18.6667 12.7166 18.6667 14ZM16.3334 14C16.3334 12.7166 15.2834 11.6666 14 11.6666C12.7167 11.6666 11.6667 12.7166 11.6667 14C11.6667 15.2833 12.7167 16.3333 14 16.3333C15.2834 16.3333 16.3334 15.2833 16.3334 14ZM9.33337 14C9.33337 12.7166 8.28337 11.6666 7.00004 11.6666C5.71671 11.6666 4.66671 12.7166 4.66671 14C4.66671 15.2833 5.71671 16.3333 7.00004 16.3333C8.28337 16.3333 9.33337 15.2833 9.33337 14Z" fill="black" />
                                </svg>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Report</a></li>
                                <li><a className="dropdown-item" href="#">Option 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {subtitle ? <p className="card-text mb-1">{subtitle}</p> : ""}
                {description ? <p className="card-text">{description}</p> : ""}
                {buttonText ? <a href="#" className="btn btn-primary w-100">{buttonText}</a> : ""}

                <div className="blog-footer">
                    <div className="blog-avatar"><img src={userImg} /></div>
                    <div>
                        <span className="blog-author">{userName}</span>
                        <div className="blog-post">
                            <span>{views} views</span>
                        </div>
                    </div>
                    <button className="btn btn-sm-light"><FaShare /> Share</button>
                </div>

            </div>
        </div>

    </div>

}

export default Post