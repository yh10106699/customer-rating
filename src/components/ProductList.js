import React from "react";
import Product from "./Product";
import "../styles/ProductList.css"

const sampleProduct = [{
    imageUrl: "https://picsum.photos/id/5/200",
    description: "Sample description very very very very very very long ",
    rating: [314, 233, 1155, 610, 4511],
    price: 200.02,
    isPrime: true,
},
    {
        imageUrl: "https://picsum.photos/id/11/200",
        description: "Sample description very very very very very very long ",
        rating: [12, 3, 2, 5, 111],
        price: 123.45,
        isPrime: false,
    },
    {
        imageUrl: "https://picsum.photos/id/20/200",
        description: "Sample description very very very very very very long ",
        rating: [44, 33, 55, 33, 11],
        price: 12.03,
        isPrime: true,
    }
]


const ProductList = (props) => {
    const [products, setProducts] = React.useState(sampleProduct);
    return (
        <div className="listWrapper">
            {
                products.map(product => <Product imageUrl={product.imageUrl} description={product.description}
                                                 rating={product.rating} price={product.price}
                                                 isPrime={product.isPrime}
                                                 setDetail={props.setDetail}/>)
            }
        </div>
    )
}

export default ProductList;