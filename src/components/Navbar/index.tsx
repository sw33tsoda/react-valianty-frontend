import { NavLink } from "react-router-dom";

const navLinksList = [
    { url: '/request', label: 'Yêu cầu' },
    { url: '/products', label: 'Sản phẩm' },
    { url: '/contact', label: 'Liên hệ' },
];

const render = (navLinksList:any,className:string,activeClassName:string) => navLinksList.map((item:any,index:number) => (
    <NavLink className={className} activeClassName={className + activeClassName} to={item.url}>{item.label}</NavLink>
))

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__nav">
                <h1>Valiantly</h1>
                <div className="navbar__nav__wrapper">
                    {render(navLinksList,'navbar__nav__wrapper__item','--active')}
                </div>
            </div>

            <div className="navbar__nav__wrapper">
                <NavLink to="/request"><i className="navbar__nav__wrapper__item fas fa-search"></i></NavLink>
                <NavLink to="/contact"><i className="navbar__nav__wrapper__item fas fa-shopping-cart"></i></NavLink>
                <NavLink to="/products"><i className="navbar__nav__wrapper__item far fa-lightbulb"></i></NavLink>
            </div>
        </div>
    );
}