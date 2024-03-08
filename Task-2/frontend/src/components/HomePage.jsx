import Navbar from "./Navbar"
import PostCard from "./PostCard"

const HomePage = () => {
    return <div className="container mx-auto px-4 py-6">

        <Navbar />

        <div className="mt-8 flex justify-center items center">
            <div className="grid grid-cols w-5/6 md:w-3/6 lg:w-2/6 gap-y-8">

                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                
            </div>
        </div>
    </div>
}

export default HomePage