import { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.error("Gagal fetch data users:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">👥 User List</h2>

      <div className="overflow-x-auto bg-white bg-opacity-90 shadow-lg rounded-xl border border-lime-300">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-lime-200 text-lime-800 text-xs uppercase font-bold tracking-wider">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-lime-50"
                } border-b hover:bg-lime-100 transition duration-150`}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4 capitalize">{user.gender}</td>
                <td className="px-6 py-4">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
