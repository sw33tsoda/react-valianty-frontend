import { useEffect, useState } from 'react';
import { Currency } from '../../utilities/Currency';
import tShirt from './../../assets/images/t-shirt2.png';
import pants from './../../assets/images/pants.png';

interface ProductsList {
    [key:string]:any;
}

const products:ProductsList = {
    clothes:[
        {type:'shirt',label:'Áo',url:tShirt},
        {type:'pants',label:'Quần',url:pants},
    ],
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
    },
    pants:{
        sizes:[
            {type:'S',price:12.25},
            {type:'M',price:14.75},
            {type:'L',price:17.25},
            {type:'XL',price:22.3},
        ],
        materials:[
            {type:'Broken Twill',price:7.2},
            {type:'Preshrunk',price:5.1},
            {type:'Chambray',price:17},
            {type:'Demin',price:22.8},
        ],
        basedPrice:25,
    },
    shoes:{
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
    const [selectedClothType,setSelectedClothType] = useState(products.clothes[0]);
    const [colorRange,setColorRanger] = useState(0);
    const [productSize,setProductSize] = useState(products[selectedClothType.type].sizes[0]);
    const [productMaterial,setProductMaterial] = useState(products[selectedClothType.type].materials[0]);
    const [productQuantity,setProductQuantity] = useState(1);

    useEffect(() => {
        setColorRanger(0);
        setProductSize(products[selectedClothType.type].sizes[0]);
        setProductMaterial(products[selectedClothType.type].materials[0]);
        setProductQuantity(1);
    },[selectedClothType]);

    const pictureStyle = () => ({
        filter: `hue-rotate(${colorRange}deg)`,
    });

    const classNames = (sizeType:string,stateValue:any) => {
        return `radio-list__option ${stateValue.type === sizeType && 'radio-list__option--active'}`;
    }

    const unitPrice = products[selectedClothType.type].basedPrice + productSize.price + productMaterial.price;
    const totalPayment = (products[selectedClothType.type].basedPrice + productSize.price + productMaterial.price) * productQuantity;

    const handleSubmitRequest = () => {
        document.getElementById('cart')?.scrollIntoView({behavior:'smooth', block: "end", inline: "nearest"});
    }

    return (
        <div className="request-controls">
            <div className="custom-product">
                <img src={selectedClothType.url} alt="" style={pictureStyle()}/>
            </div>
            <div className="custom-overlay">
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Chất liệu</label>
                    <div className="custom-overlay__control-wrapper__radio-list radio-list">
                        {products.clothes.map((cloth:any,index:number) => <div className={classNames(cloth.type,selectedClothType)} onClick={() => setSelectedClothType(cloth)} key={index}>{cloth.label}</div>)}
                    </div>
                </div>
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Chất liệu</label>
                    <div className="custom-overlay__control-wrapper__radio-list radio-list">
                        {products[selectedClothType.type].materials.map((size:any,index:number) => <div className={classNames(size.type,productMaterial)} onClick={() => setProductMaterial(size)} key={index}>{size.type}</div>)}
                    </div>
                </div>
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Kích cỡ</label>
                    <div className="custom-overlay__control-wrapper__radio-list radio-list">
                        {products[selectedClothType.type].sizes.map((size:any,index:number) => <div className={classNames(size.type,productSize)} onClick={() => setProductSize(size)} key={index}>{size.type}</div>)}
                    </div>
                </div>
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Màu sắc</label>
                    <input className="custom-overlay__control-wrapper__range-slider range-slider" type="range" min="0" max="360" value={colorRange} onChange={(event:any) => setColorRanger(event.target.value)} />
                </div>
                <div className="custom-overlay__control-wrapper">
                    <label className="custom-overlay__control-wrapper__label">Số lượng</label>
                    <div className="custom-overlay__control-wrapper__quantity">
                        <input className="custom-overlay__control-wrapper__quantity__input input-number" onChange={(event:any) => setProductQuantity(parseInt(event.target.value))} value={productQuantity} type="number"/>
                        <div className="custom-overlay__control-wrapper__quantity__input-control button" onClick={() => setProductQuantity(productQuantity + 1)}>+</div>
                        <div className="custom-overlay__control-wrapper__quantity__input-control button" onClick={() => setProductQuantity(productQuantity - 1)}>-</div>
                    </div>
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
                                    <td>{Currency(products[selectedClothType.type].basedPrice)}</td>
                                </tr>
                                <tr>
                                    <td>Tổng đơn giá</td>
                                    <td>{Currency(unitPrice)}</td>
                                </tr>
                                <tr>
                                    <td>Tổng cộng</td>
                                    <td>{Currency(totalPayment)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button className="button" onClick={handleSubmitRequest}>Đặt hàng</button>
            </div>
        </div>
    );
}