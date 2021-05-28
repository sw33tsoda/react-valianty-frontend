import { useState } from 'react';
import { Currency } from '../../utilities/Currency';
import tShirt from './../../assets/images/t-shirt2.png';

const products = {
    shirt:{
        sizes:[
            {type:'XXS',price:3.5},
            {type:'XS',price:5.75},
            {type:'S',price:9.25},
            {type:'M',price:11.75},
            {type:'L',price:13.25},
            {type:'XL',price:16.3},
            {type:'XXL',price:19.7},
            {type:'3XL',price:21.2}
        ],
        materials:[
            {type:'Cotton',price:5.2},
            {type:'Polyester',price:10.1},
            {type:'Polyester Blend',price:22.52},
            {type:'Linen',price:26.8},
            {type:'Rayon',price:30.2}
        ],
        basedPrice:25,
    }
}

export default function RequestControls() {
    const [colorRange,setColorRanger] = useState(0);
    const [productSize,setProductSize] = useState({type:'',price:0});
    const [productMaterial,setProductMaterial] = useState({type:'',price:0});
    const pictureStyle = () => ({
        filter: `hue-rotate(${colorRange}deg)`,
    });

    const sizeClassNames = (sizeType:string,stateValue:any) => {
        return `radio-list__option ${stateValue.type === sizeType && 'radio-list__option--active'}`;
    }

    const totalPayment = products.shirt.basedPrice + productSize.price + productMaterial.price;

    return (
        <div className="request-controls">
            <div className="custom-product">
                <img src={tShirt} alt="" style={pictureStyle()}/>
            </div>
            <div className="custom-overlay">
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Chất liệu</label>
                    <div className="custom-overlay__control-wrapper__radio-list radio-list">
                        {products.shirt.materials.map((size,index) => <div className={sizeClassNames(size.type,productMaterial)} onClick={() => setProductMaterial(size)} key={index}>{size.type}</div>)}
                    </div>
                </div>
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Kích cỡ</label>
                    <div className="custom-overlay__control-wrapper__radio-list radio-list">
                        {products.shirt.sizes.map((size,index) => <div className={sizeClassNames(size.type,productSize)} onClick={() => setProductSize(size)} key={index}>{size.type}</div>)}
                    </div>
                </div>
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Màu sắc</label>
                    <input className="custom-overlay__control-wrapper__range-slider range-slider" type="range" min="0" max="360" value={colorRange} onChange={(event:any) => setColorRanger(event.target.value)} />
                </div>

                <div className="custom-overlay__control-wrapper">
                    <div className="custom-overlay__control-wrapper__payment">
                        <p className="custom-overlay__control-wrapper__payment__title">Tổng chi phí</p>
                        <table className="custom-overlay__control-wrapper__payment__table">
                            <thead>
                                <tr>
                                    <td>Tính chất</td>
                                    <td>Chi phí</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Chất liệu</td>
                                    <td>{Currency(productMaterial.price)}</td>
                                </tr>
                                <tr>
                                    <td>Kích cỡ</td>
                                    <td>{Currency(productSize.price)}</td>
                                </tr>
                                <tr>
                                    <td>Sản phẩm gốc</td>
                                    <td>{Currency(products.shirt.basedPrice)}</td>
                                </tr>
                                <tr>
                                    <td>Tổng</td>
                                    <td>{Currency(totalPayment)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}