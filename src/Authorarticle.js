import React from 'react'
// import { article } from './Data';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';



const Authorarticle = ({ posts }) => {
  // const [posts, setPosts] = useState(article);

  return (
    <div className='art'>
      {

        posts.map((article) => (
          <div className='artic'>
            <div className='main1'> <img src={article.photo} className='article-photo'></img></div>
            <div className='main2'>
              <div className='article-text'>{article.articletext}</div>
              <div className='time'>
                <div className='rating'>Rating:</div>
                <div className='point'>4.6</div>
                <div className='star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
                <div className='eye'><FaEye /></div>
                <div className='number'>24</div>
              </div>
            </div>
          </div>
        ))

      }
    </div>
  )
}

export default Authorarticle