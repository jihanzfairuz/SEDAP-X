import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../assets/Orders.json";
import AddOrderForm from "../components/addorderForm";

export default function Orders() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setData(ordersData);
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <PageHeader title="Orders" breadcrumb="Dashboard / Orders">
        <button
          className="bg-gradient-to-r from-lime-400 to-green-400 text-white font-semibold px-6 py-2 rounded-lg hover:from-lime-500 hover:to-green-500 transition-all duration-300 shadow-md"
          onClick={toggleForm}
        >
          ➕ Add Order
        </button>
      </PageHeader>

      {showForm && <AddOrderForm closeForm={toggleForm} />}

      {/* Tabel Orders */}
      <div className="overflow-x-auto bg-white bg-opacity-90 shadow-xl rounded-xl mt-6 border border-lime-300">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-lime-200 text-lime-800 text-xs uppercase tracking-wider font-bold">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order, index) => (
              <tr
                key={order.id}
                className={`${
                  index % 2 === 0 ? "bg-lime-50" : "bg-white"
                } border-b hover:bg-lime-100 transition duration-150`}
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.price}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
