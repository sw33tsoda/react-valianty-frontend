import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Currency = (price:number) => {
    const data = useSelector((state:RootState) => state.currency);
    return new Intl.NumberFormat(data.format,{ style: 'currency', currency: data.symbol }).format(data.symbol === 'VND' ? price * 23500 : price);
}