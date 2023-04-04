import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    // const { id } = useParams();

    // const navigate = useNavigate();
    useEffect(() => {
        fectData();
    }, []);

    const fectData = async() => {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setProducts(data);
    }

    const deleteProduct = async(id) => {
        const product = {};
        await fetch('http://localhost:8080/products/' + id, {
            method: "DELETE",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fectData();
    }

    return (   
        <div>
            <Link to= "/add" className="button is-primary">Add new</Link>
            <table className="table is-striped is-fullwidht">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{ index +1 } </td>
                            <td>{ product.title } </td>
                            <td>{ product.price } </td>
                            <td>
                                <Link to={'edit/' + product.id} className="button is-small is-info" >Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger" >Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList