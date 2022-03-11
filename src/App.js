import React,{ useState} from 'react'
import Author from './Author'
import Authorarticle from './Authorarticle'
import Footer from './Footer'
import Navbar from './Navbar'
import { article } from './Data';
// import Pagination from './Pagination'


const App = () => {
  const [posts, setPosts] = useState(article);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
    <Navbar />
    <Author />
    <div className='more'>More from the <span> Author</span></div>
    <Authorarticle 
     posts={currentPosts} 
    />

    {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /> */}
    <Footer />
    </div>
  )
}

export default App
