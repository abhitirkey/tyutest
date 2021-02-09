import React, {useLayoutEffect} from 'react'
import './Blog.scss'

import MainArticleSection from './ArticlePage/MainArticleSection'
import Subscribe from './Subscribe'
import Catapult from './Catapult'

function ArticlePage() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    
    return (
        <>
            <MainArticleSection/>
            <Subscribe/>
            <Catapult/>    
        </>
    )
}

export default ArticlePage
