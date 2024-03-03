const SocialComponent = ( props ) => {

    return <>
        <a className="btn btn-primary btn-lg btn-block w-100" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>{props.buttonText} with Facebook
        </a>
        <a className="btn btn-primary btn-lg btn-block w-100" style={{backgroundColor: "#55acee"}} href="#!"
            role="button">
            <i className="fab fa-twitter me-2"></i>{props.buttonText} with Twitter</a>
    </>
}

export default SocialComponent