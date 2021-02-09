import React, {useLayoutEffect} from 'react'
import './Blog.scss'

import Sidebar from './Sidebar'
import ArticleList from './ArticleList'
import Subscribe from './Subscribe'
import Catapult from './Catapult'

import BlogCategoryProvider from './ContextAPI/BlogCategoryProvider'

function Blog() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <div className="blog">
                <div className="blog__top__section">
                    <BlogCategoryProvider>
                        <Sidebar/>
                        <ArticleList/>
                    </BlogCategoryProvider>
                </div>
                <Subscribe/>
                {/* <Slider/>
                <Sidebar/>
                <ListOfArticles/>
                <Subscribe/>
              */}
            </div>
            <Catapult/> 
        </>
    )
}

export default Blog
