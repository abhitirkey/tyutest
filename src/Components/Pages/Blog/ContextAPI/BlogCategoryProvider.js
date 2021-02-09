import React, {useState} from 'react'
import BlogCategoryContext from './BlogCategoryContext'

const BlogCategoryProvider = ({children}) => {

    const [currentCategory, setCurrentCategory] = useState('all_posts');
    const [categoryDisplay, setCategoryDisplay] = useState('Blog');
    const [searchText, setSearchText] = useState("");

    return (
       <BlogCategoryContext.Provider value={{currentCategory, setCurrentCategory, categoryDisplay, setCategoryDisplay, searchText, setSearchText}}>
           {children}
       </BlogCategoryContext.Provider>
    )
}

export default BlogCategoryProvider;
