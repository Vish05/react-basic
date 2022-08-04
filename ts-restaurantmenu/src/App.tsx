import React, { useState } from 'react';
import MenuCategories from './components/MenuCategories';
import MenuList from './components/Menus';
import Menu from './models/menu';
import items from './data';
import './App.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {

    const [menuItems, setMenuItems] = useState<Menu[]>(items);
    const filterMenu = (category: string) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <MenuCategories categories={allCategories} filterMenu={filterMenu} />
                <MenuList items={menuItems} />
            </section>
        </main>
    );
}

export default App;
