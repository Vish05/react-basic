import React from "react";

import MenuItem from "./MenuItem";
import Menu from "../models/menu";

const MenuList: React.FC<{items: Menu[]}>= (props) => {
    return (
        <div className='section-center'>
            {props.items.map((menuItem) => (
                <MenuItem key={menuItem.id} title={menuItem.title} img={menuItem.img} desc={menuItem.desc} price={menuItem.price} />
            ))}
        </div>
      );
}

export default MenuList;