import React, {useContext} from 'react'
import './Blog.scss'
import {BsSearch} from 'react-icons/bs'

import BlogCategoryContext from './ContextAPI/BlogCategoryContext'

import {blogCategories} from './Data/BlogCategories'

function Sidebar() {

    const {currentCategory, setCurrentCategory, setCategoryDisplay, searchText, setSearchText} = useContext(BlogCategoryContext);

    const searchFieldHandler = async e => {
        await setSearchText(e.target.value);
    }

    return (
        <>
            <div className="category__dropdown">
                <select className="form-control">
                    {
                        blogCategories.map((item) => {
                            return <option>{item.title}</option>
                        })
                    }
                </select>
                <div className="search__box">
                    <input type="text" placeholder="Search" className="search__field" value={searchText} onChange={searchFieldHandler}/>
                    <BsSearch/>
                </div>
            </div>
            <div className="blog__sidebar">
                {
                    blogCategories.map((item) => {
                        let spanClass = '';
                        if(currentCategory === item.stub)
                            spanClass = 'pinkText boldText';
                        return <span onClick={async () =>{
                            await setCurrentCategory(item.stub);
                            await setCategoryDisplay(item.title);
                        }} className={spanClass}>{item.title}</span>
                    })
                }
            </div>
        </>
        
    )
}

export default Sidebar
