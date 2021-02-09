import React from 'react'
import './ArticlePage.scss'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
// import {FaFacebookF, FaInstagram, FaLinkedinIn, FaShareAlt} from 'react-icons/fa'

import NetworkingJPG from '../images/networking.jpg'

import Articles from '../Data/Articles'

function MainArticleSection() {
    
    let pathArray = window.location.pathname.split("/"); // 3rd element in array should match the article title stub

    let currentArticle = null;

    for (let i = 0; i < Articles.length; i++) {
        if(Articles[i].stub === pathArray[3]){
            currentArticle = Articles[i];
            break;
        }
    }

    let currentDate = new Date();
    let articleDate = new Date(new Date(currentArticle.dated));

    let timeDiff = Math.abs(currentDate.getTime() - articleDate.getTime());

    // days difference
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let articleDateFormatted = articleDate.toLocaleDateString(
        'en-gb',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      );

    return (
        <div className="page-top-section main__article__section">
            <p className="pinkText"><Link to="/blog">{"<"} Back to Blog</Link></p>
            <h3 className="article__title center">{currentArticle.title}</h3>  
            <div className="article__top__links">
                <div className="date__posted">{articleDateFormatted} <BsDot/> {diffDays} days ago</div>
                <div className="flex-spacer"></div>
                {/* <div className="social__media__share">
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaLinkedinIn/>
                    <FaShareAlt/>
                </div>     */}
            </div>
            <img src={currentArticle.image} alt={currentArticle.stub} />
            <div className="article__text" dangerouslySetInnerHTML={{__html : currentArticle.text}}></div>
        </div>
    )
}

export default MainArticleSection