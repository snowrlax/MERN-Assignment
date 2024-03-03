import Input from "./Input"

const SignupForm = () => {
    return <form >
        <div className="container-fluid custom-form mb-3">
            <div className="form-outline row">
                <Input type={"text"} placeholder={'First Name'} />
                <Input type={"text"} placeholder={'Last Name'} />
            </div>
            <div className="row">
                <Input type={"email"} placeholder={'Email'} />
            </div>
            <div className="row">
                <Input type={"password"} placeholder={'Password'} />
            </div>
            <div className="row">
                <Input type={"password"} placeholder={'Confirm Password'} />
            </div>
        </div>
        {/* 
        <div className="d-flex justify-content-around align-items-center mb-4">
            <a href="#!">Forgot password?</a>
        </div> */}

        <div className="d-flex justify-content-around align-items-center mb-4">
            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{ padding: "0.5rem 2rem 0.5rem 2rem", borderRadius: "30px" }}>Create Account</button>
            <a href="#!">or, Sign In</a>
        </div>
    </form>
}

export default SignupForm