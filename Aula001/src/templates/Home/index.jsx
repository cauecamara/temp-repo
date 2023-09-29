
import './Style.css';
import { Component } from "react";
import { loadpost } from "../../components/utils/loadpost";
import { Posts } from "../../components/NewPost/index"
import {Button} from "../../components/Button";

class Home extends Component {
    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 2,
      serchValue: ''
    }

    async componentDidMount() {
        await this.loadPost()
    }

    loadPost = async () =>{
        let postsAndPhotos = await loadpost()
        this.setState({
            posts: postsAndPhotos.slice(0,2),
            allPosts: postsAndPhotos
        })
    }

    loadMorePost = () => {
        const {page, postsPerPage, allPosts, posts} = this.state
        const nextPage = page + postsPerPage
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        console.log(page, postsPerPage, nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
        this.setState({posts, page: nextPage})
    }
    render() {
        console.log('oi')
    const { posts, serchValue, allPosts } = this.state
        const filteredPosters = !!serchValue ?
            posts.filter(post => {
               return post.title.toLowerCase().includes(serchValue.toLowerCase())
            }) : posts
        console.log(filteredPosters)
    return (
        <section className='conteiner'>
            {!!serchValue && (
                <>
                    <h1>searchtext:{serchValue}</h1>
                </>
            )}

            <input type='search'
                   value={serchValue}
                   onChange={(event) => {
                const {value} = event.target
                       console.log(value)
                this.setState({serchValue: value})

            }}/>
            <br/>
            <br/>
            <br/>
            <Posts newposts={filteredPosters}/>
            <Button text="Load More Posts" click={this.loadMorePost}/>
        </section>
    );
  }

}

export default Home

