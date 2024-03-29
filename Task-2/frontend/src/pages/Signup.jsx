import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { DATABASE_URL } from '../../config'

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="flex items-center justify-center h-screen">
        <div className="max-w-md bg-stone-100 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
            <div>
                <div className="mb-4">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input onChange={(e) => {
                        setFirstName(e.target.value)
                    }} type="text" id="firstName" name="firstName" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input onChange={(e) => {
                        setLastName(e.target.value)
                    }} type="text" id="lastName" name="lastName" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" id="password" name="password" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <button onClick={async () => {
                    const response = await axios.post(`${DATABASE_URL}/api/v1/user/signup`, {
                        firstName,
                        lastName,
                        email,
                        password
                    })
                    localStorage.setItem("token", response.data.token)
                    navigate('/')
                }}
                    type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
            </div>
            <p className="mt-4 text-sm text-gray-600">Already have an account? <a onClick={() => {
                navigate('/signin')
            }} className="text-blue-500 font-medium hover:cursor-pointer">Sign In</a></p>
        </div>
    </div>


}

export default Signup