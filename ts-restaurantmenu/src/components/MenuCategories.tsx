import React from "react";

const MenuCategories: React.FC<{categories: string[], filterMenu: (category: string) => any}>= (props) => {
    return(
        <div className="btn-container">
            {props.categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => props.filterMenu(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}

export default MenuCategories;