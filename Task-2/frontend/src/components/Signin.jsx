const Signin = () => {
    return <div className="flex items-center justify-center h-screen">
        <div className="max-w-md bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign In</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign In</button>
            </form>
            <p class="mt-4 text-sm text-gray-600">Don't have an account? <a href="#" class="text-blue-500 font-medium">Sign Up</a></p>
        </div>
    </div>
}

export default Signin