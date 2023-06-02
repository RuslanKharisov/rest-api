import {makeAutoObservable} from 'mobx'

export default class PrioductStore {
    constructor() {
        this._products = [
            {
                id: 1,
                sku: "СР-2",
                title: "Баня из оцилиндрованного бревна Печка",
                price: 2350000,
                area: 120,
                rating: "0",
                img: "https://img.freepik.com/premium-photo/wall-of-wooden-house_127089-7371.jpg?w=1800",
            },
            {
                id: 2,
                sku: "СР-3",
                title: "Лазурь",
                price: 2350000,
                area: 100,
                rating: "0",
                img: "https://img.freepik.com/free-photo/small-private-house-in-the-forest-in-tuddal-gaustatoppen-norway_181624-20194.jpg?w=1800&t=st=1681902522~exp=1681903122~hmac=962f914c50a8585545a981c7914fe192477cacdfabae887b2cae126312c5e8b2",
            
            },
                {
                id: 3,
                sku: "СР-4",
                title: "Самарканд",
                price: 2350000,
                area: 220,
                rating: "0",
                img: "https://img.freepik.com/premium-photo/construction-of-a-house-made-of-laminated-veneer-wood-lumber_301558-78.jpg?w=1800",
            },
            {
                id: 4,
                sku: "СР-5",
                title: "Ашхабад",
                price: 2350000,
                area: 85,
                rating: "0",
                img: "https://img.freepik.com/premium-photo/wood-house-of-timber-in-nature-in-winter_153912-2530.jpg?w=1800",
            },
            {
                id: 5,
                sku: "СР-6",
                title: "Бирибджан",
                price: 8350000,
                area: 170,
                rating: "0",
                img: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=1060&t=st=1682533918~exp=1682534518~hmac=dbaddbfb8dbcdab339712e5a162a55879e8d75c709ba8b8c63b215629efee5d9",
            },
            {
                id: 6,
                sku: "СР-7",
                title: "Бирибджан",
                price: 8350000,
                area: 340,
                rating: "0",
                img: "https://images.unsplash.com/photo-1683802175943-c71b4bd66c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2286&q=80",
            },
            {
                id: 7,
                sku: "СР-5",
                title: "Ашхабад",
                price: 2350000,
                area: 70,
                rating: "0",
                img: "https://img.freepik.com/premium-photo/wood-house-of-timber-in-nature-in-winter_153912-2530.jpg?w=1800",
            },
            {
                id: 9,
                sku: "СР-7",
                title: "Бирибджан",
                price: 8350000,
                area: 280,
                rating: "0",
                img: "https://images.unsplash.com/photo-1683802175943-c71b4bd66c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2286&q=80",
            }
        ]
        makeAutoObservable(this)
    }

    setProuducts(products) {
        this._types = products
    }

    get products() {
        return this._products
    }

}


