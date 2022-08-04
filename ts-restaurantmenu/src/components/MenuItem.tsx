import React from "react";

const MenuItem: React.FC<{title: string, img: string, price: number, desc: string}>= (props) => {
    return (
        <article className='menu-item'>
            <img src={props.img} alt={props.title} className='photo' />
            <div className='item-info'>
                <header>
                    <h4>{props.title}</h4>
                    <h4 className='price'>${props.price}</h4>
                </header>
                <p className='item-text'>{props.desc}</p>
            </div>
        </article>
    );
}

export default MenuItem;