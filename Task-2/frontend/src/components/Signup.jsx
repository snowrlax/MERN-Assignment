const Signup = () => {
    return <div className="flex items-center justify-center h-screen">
        <div class="max-w-md bg-white rounded-lg shadow-md p-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
            <form>
                <div class="mb-4">
                    <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" name="firstName" class="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastName" name="lastName" class="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" name="email" class="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" class="mt-1 px-4 py-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 shadow-sm" />
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
            </form>
            <p class="mt-4 text-sm text-gray-600">Already have an account? <a href="#" class="text-blue-500 font-medium">Sign In</a></p>
        </div>
    </div>


}

export default Signup