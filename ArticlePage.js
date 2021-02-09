import React, {useLayoutEffect, useEffect} from 'react'

import './Blog.scss'
import MainArticleSection from './ArticlePage/MainArticleSection'
// import RecentPosts from './ArticlePage/RecentPosts'
import Subscribe from './Subscribe'
import Catapult from './Catapult'

function ArticlePage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <MainArticleSection/>
            {/* <RecentPosts/> */}
            <Subscribe/>
            <Catapult/>
                {/* <TopLinks/>
                <MainArticleSection/>
                <RecentPosts/>
                <Subscribe/>
                <Catapult/> */}
        </>
    )
}

export default ArticlePage
