class Menu {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;

    constructor(id: number, title: string, category: string, price: number,img: string, desc:string) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.img = img;
        this.desc = desc;
    }
}

export default Menu;