import React, { useState } from 'react';
import { Data } from './Data';
import {FaLinkedinIn,FaTwitter,FaFacebookF,FaInstagram,FaBookmark} from 'react-icons/fa';

function Author() {
    const [posts, setPosts] = useState(Data);

    return (
        <div className='authors'>
            <h2>About Author</h2>
            <div className='auth'>
                {
                    posts.map((Data) => (
                        <div className='authormain'>
                            <div className='breadcrumb'>Home     {">"}     Blog     {">"}      Author  </div>
                            <div className='author'>

                                <div className='author1'>
                                    <img src={Data.image} alt={Data.Name} className='person-img'></img>
                                </div>
                                <div className='author2'>
                                    <div className='name'>{Data.Name}</div><br />
                                    <div className='desig'>{Data.designation}</div><br />
                                    <div className='text'>{Data.text}</div><br />
                                    <div className='topic'><i className='topics'>Topics: </i>{Data.topic}</div><br />
                                    <div className='icons'>
                                        <div className='icon1' style={{paddingLeft:'15px'}}>{Data.icon1 ? <FaLinkedinIn /> : null}</div>
                                        {/* <div className='icon2' style={"Data.icon2  ? paddingLeft:'15px' : paddingLeft:'0px'"}>{Data.icon2 ? <FaTwitter /> : null}</div> */}
                                        <div className='icon3' style={{paddingLeft:'15px'}}>{Data.icon3 ? <FaFacebookF /> : null}</div>
                                        <div className='icon4' style={{paddingLeft:'15px'}}>{Data.icon4 ? <FaInstagram /> : null}</div>
                                        <div className='icon5' style={{paddingLeft:'15px'}}><FaBookmark /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Author;
