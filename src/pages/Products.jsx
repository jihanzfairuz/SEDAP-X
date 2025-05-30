import PageHeader from "../components/PageHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Products() {
    const breadcrumb = ["Dashboard", "Product List"];

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            axios
                .get(`https://dummyjson.com/products/search?q=${query}`)
                .then((response) => {
                    if (response.status !== 200) {
                        setError(response.data.message);
                        return;
                    }
                    setProducts(response.data.products);
                })
                .catch((err) => {
                    setError(err.message || "An unknown error occurred");
                });
        }, 500);
        return () => clearTimeout(timeout);
    }, [query]);

    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-green-700 mb-6">🛍️ Product List</h2>
            <PageHeader title="Products" breadcrumb={breadcrumb} />
            {errorInfo}
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari produk..."
                className="mb-4 p-3 w-full bg-white rounded-xl shadow border border-lime-300"
            />

            <div className="overflow-x-auto bg-white bg-opacity-90 shadow-lg rounded-xl border border-lime-300">
                <table className="min-w-full text-sm text-left text-gray-800">
                    <thead className="bg-lime-200 text-lime-800 text-xs uppercase font-bold tracking-wider">
                        <tr>
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Vendor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`${
                                    index % 2 === 0 ? "bg-white" : "bg-lime-50"
                                } border-b hover:bg-lime-100 transition duration-150`}
                            >
                                <td className="px-6 py-4 font-medium">{index + 1}.</td>
                                <td className="px-6 py-4">
                                    <Link
                                        to={`/products/${item.id}`}
                                        className="text-emerald-600 hover:text-emerald-800"
                                    >
                                        {item.title}
                                    </Link>
                                </td>
                                <td className="px-6 py-4">{item.category}</td>
                                <td className="px-6 py-4">Rp {item.price * 1000}</td>
                                <td className="px-6 py-4">{item.brand}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
