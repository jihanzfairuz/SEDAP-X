import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../assets/Customer.json";
import AddCustomerForm from "../components/addcustomerForm";

export default function Customer() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setData(customersData);
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <PageHeader title="Customers" breadcrumb="Dashboard / Customers">
        <button
          className="bg-gradient-to-r from-lime-400 to-green-400 text-white font-semibold px-6 py-2 rounded-lg hover:from-lime-500 hover:to-green-500 transition-all duration-300 shadow-md"
          onClick={toggleForm}
        >
          ➕ Add Customer
        </button>
      </PageHeader>

      {showForm && <AddCustomerForm closeForm={toggleForm} />}

      {/* Tabel Customers */}
      <div className="overflow-x-auto bg-white bg-opacity-90 shadow-xl rounded-xl mt-6 border border-lime-300">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-lime-200 text-lime-800 text-xs uppercase tracking-wider font-bold">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, index) => (
              <tr
                key={c.id}
                className={`${
                  index % 2 === 0 ? "bg-lime-50" : "bg-white"
                } border-b hover:bg-lime-100 transition duration-150`}
              >
                <td className="px-6 py-4 font-medium text-gray-900">{c.id}</td>
                <td className="px-6 py-4">{c.name}</td>
                <td className="px-6 py-4">{c.email}</td>
                <td className="px-6 py-4">{c.phone}</td>
                <td className="px-6 py-4">{c.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
