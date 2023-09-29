import {PostCard} from "../PostCard"
export const Posts = ({newposts}) => {
    return (
        <div className="posts">
            {newposts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    cover={post.cover}/>
            ))}
        </div>
    )
}