import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListPage() {
  const [tours, setTours] = useState([]);

  // Fetch
  const getTours = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/tours");
      setTours(data);
    } catch (err) {
      toast.error(err.message);
    }
    
  };

  useEffect(() => {
    getTours();
  }, []);

  // DELETE
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Bạn có chắc muốn xóa tour này không?");

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/tours/${id}`);
      toast.success("Xóa tour thành công!");

      
      getTours();

    } catch (error) {
      toast.error("Lỗi: " + error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border">#</th>
              <th className="px-4 py-3 border">Ảnh</th>
              <th className="px-4 py-3 border">Tên tour</th>
              <th className="px-4 py-3 border">Điểm đến</th>
              <th className="px-4 py-3 border">Giá</th>
              <th className="px-4 py-3 border">Thời lượng</th>
              <th className="px-4 py-3 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour.id} className="hover:bg-gray-100 transition">
                <td className="px-4 py-3 border">{index + 1}</td>

                <td className="px-4 py-3 border">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-20 h-16 object-cover"
                  />
                </td>

                <td className="px-4 py-3 border">{tour.name}</td>

                <td className="px-4 py-3 border">{tour.destination}</td>

                <td className="px-4 py-3 border">
                  {tour.price.toLocaleString()} đ
                </td>

                <td className="px-4 py-3 border">{tour.duration}</td>

                <td className="px-4 py-3 border text-center flex gap-2 justify-center">

                  {/* EDIT */}
                  <Link
                    to={`/edit/${tour.id}`}
                    className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Edit
                  </Link>

                  {/* DELETE */}
                  <button
                    onClick={() => handleDelete(tour.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default ListPage;
