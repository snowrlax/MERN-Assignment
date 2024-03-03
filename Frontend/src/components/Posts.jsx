import feed from '../data/feedData'
import Post from './Post'
const Posts = () => {

    return <div className="posts">
        <div className="row">
            {feed.map(post => (
                <Post key={post.id} 
                    imageSrc={post.imageSrc} 
                    postType={post.postType} 
                    title={post.title} 
                    subtitle={post.subtitle}
                    location={post.location}
                    buttonText={post.buttonText}
                    description={post.description}
                    userName={post.userName}
                    userImg={post.userImg}
                    views={post.views}
                 />
            ))}
            
        </div>
    </div>
}

export default Posts