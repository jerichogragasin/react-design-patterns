import LargeProductListitem from "./HandlistList/products/LargeProductListitem";
import Modal from "./Modal";

const products = [{
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal.',
    rating: 4.5
}, {
    name: 'Basketball',
    price: '$10',
    description: ' Just like the pros use.',
    rating: 3.0
}, {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum training.',
    rating: 4.2
}
]

const App = () => {
    return(
        <>
            <Modal>
                <LargeProductListitem product={products[0]}></LargeProductListitem>
            </Modal>
        </>
    )
}

export default App;