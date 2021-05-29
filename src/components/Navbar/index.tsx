import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { switchCurrencyFormat } from "../../redux/slices/currencySlice";
import { AppDispatch, RootState } from "../../redux/store";

const navLinksList = [
    { url: '/request', label: 'Yêu cầu' },
    { url: '/products', label: 'Sản phẩm' },
    { url: '/contact', label: 'Liên hệ' },
];

const render = (navLinksList:any,className:string,activeClassName:string) => navLinksList.map((item:any,index:number) => (
    <NavLink 
        key={index}
        className={className} 
        activeClassName={className + activeClassName} 
        to={item.url}
    >
        {item.label}
    </NavLink>
))

export default function Navbar() {
    const currency = useSelector((state:RootState) => state.currency);
    const dispatch:AppDispatch = useDispatch();
    const handleSwitchCurrencyFormat = () => {
        dispatch(switchCurrencyFormat());
    }
    return (
        <div className="navbar">
            <div className="navbar__nav">
                <h1>Valiantly</h1>
                <div className="navbar__nav__wrapper">
                    {render(navLinksList,'navbar__nav__wrapper__item','--active')}
                </div>
            </div>

            <div className="navbar__nav__wrapper">
                <i className="navbar__nav__wrapper__item fas fa-search"></i>
                <i id="cart" className="navbar__nav__wrapper__item fas fa-shopping-cart"></i>
                <i className="navbar__nav__wrapper__item far fa-lightbulb"></i>
                <i className="navbar__nav__wrapper__item currency" onClick={handleSwitchCurrencyFormat}>{currency.symbol}</i>
            </div>
        </div>
    );
}