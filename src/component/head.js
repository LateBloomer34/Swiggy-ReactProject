const AppIcon =()=>( <a href="https://swiggy.com"><img className="appIcon" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="SwiggyIcon" /></a>)

const AppList= ()=>(
    <ul id="listMain">
        <li className="appListEle"><a href="#">home</a></li>
        <li className="appListEle"><a href="#">product</a></li>
        <li className="appListEle"><a href="#">cart</a></li>

    </ul>
)

const Header =()=>(
    <div id="appHeader">
    {/* 
    icon -complete
    list of home, product, cart -complete
     */}
     <AppIcon/>
     <AppList/>
    </div>
)
export default Header;