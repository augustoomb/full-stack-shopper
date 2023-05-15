import axios from 'axios';

// const backUrl = process.env.REACT_APP_BACKEND_URL;

const validateProduct = async(product: any) => {
    try {
        const response = await axios.post(`http://localhost:3000/products/validate`, {product});
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export { validateProduct };
