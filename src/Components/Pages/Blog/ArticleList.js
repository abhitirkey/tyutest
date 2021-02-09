import React, {useContext} from 'react'
import './Blog.scss'

import {Link} from 'react-router-dom'

import {BsSearch, BsDot} from 'react-icons/bs'

import BlogCategoryContext from './ContextAPI/BlogCategoryContext'

import Articles from './Data/Articles'
import {blogCategoriesAssoc} from './Data/BlogCategories'
import { GiIonCannonBlast } from 'react-icons/gi'

function ArticleList() {

    const {currentCategory, categoryDisplay, setCurrentCategory, setCategoryDisplay, setCurrentArticle, searchText, setSearchText} = useContext(BlogCategoryContext);

    let currentDate = new Date();
    
    const searchTextHandler = async e => {
        let keyword = e.target.value;
        await setSearchText(keyword);
    }

    const articles = Articles.filter((data) => {
        if(searchText === "")
            return data;
        else if(data.text.toLowerCase().includes(searchText.toLowerCase()) || data.title.toLowerCase().includes(searchText.toLowerCase()))
            return data;
        return null;
    }).map((item) => {

        if(item !== null){
            
            let textAsWordsArray = item.text.replace("<p>", "").replace("</p>", "").split(" ");
            let textExcerpt = '';
            
            for(var i = 0; i < 30; i++){
                textExcerpt += textAsWordsArray[i] + " ";
            }
            
            textExcerpt += '...';
    
            let articleDate = new Date(new Date(item.dated));
    
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
            if(currentCategory === 'all_posts' || currentCategory === item.category){
                return (
                    <div className="article__short">
                        <img src={item.image} alt="article__image"/>
                        <div className="article__text__part">
                            <h2 className=""><Link to={"/blog/article/"+item.stub}>{item.title}</Link></h2>
                            <p>in <span className="pinkText italic pointer" onClick={
                                async () => {
                                    await setCurrentCategory(item.category);
                                    await setCategoryDisplay(blogCategoriesAssoc[item.category]);
                                    window.scrollTo(0, 0);
                                } 
                            }>{blogCategoriesAssoc[item.category]}</span></p>
                            <p>{textExcerpt}<Link to={"/blog/article/"+item.stub}><span className="pinkText">Read More {'>>'}</span></Link></p>
                            <p>{articleDateFormatted} <BsDot/> {diffDays} days ago</p>
                        </div>
                    </div>
                )    
            }            
        }

        return null; 
    });

    console.log("Articles", articles);

    return (
        <div className="blog__articles">
            <div className="top__section">
                <h1 className="pinkText blog__category">{categoryDisplay}</h1>
                <div className="flex-spacer"></div>
                <div className="search__box">
                    <input type="text" placeholder="Search" className="search__field" value={searchText} onChange={searchTextHandler}/>
                    <BsSearch/>
                </div>
            </div>
            <div className="article__list">
                {articles.length > 0 ? articles: <h3 className="no__posts__found">No posts found.</h3>}
            </div>
        </div>
    )
}

export default ArticleList
