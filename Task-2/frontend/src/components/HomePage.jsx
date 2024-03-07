const Home = () => {
    return <div class="container mx-auto px-4 py-6">

        <Navbar />

        <div class="mt-8 flex justify-center items center">
            <div class="grid grid-cols md:w-3/6 gap-6">

                <Card />
                
            </div>
        </div>
    </div>
}

export default Home