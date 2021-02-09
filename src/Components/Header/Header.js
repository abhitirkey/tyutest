import React, {Component, Suspense, lazy} from "react"
import CommonHeader from './CommonHeader'

class Header extends Component {
    render(){
        const isHomePage = window.location.pathname === '/' ? true: false;
        
        if(!isHomePage) 
            return <CommonHeader/>;

        // Only lazy load the Homepage Header since it is only loaded on a single page
        const HomePageHeader = lazy(() => import('./HomePageHeader'));
        return (
            <Suspense fallback={<CommonHeader/>}>
                <HomePageHeader/>
            </Suspense>
        );
    }
}

export default Header;