import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

function ListPage() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const getTours = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/tours");
        setTours(data);
      } catch (err) {
        toast.error(err)
      }
    };
    getTours();
  }, [])
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border">#</th>
              <th className="px-4 py-3 border">ảnh</th>
              <th className="px-4 py-3 border">Tên tour</th>
              <th className="px-4 py-3 border">Điểm đến</th>
              <th className="px-4 py-3 border">Giá</th>
              <th className="px-4 py-3 border">Thời lượng</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour.id} className="hover:bg-gray-100 transition">
                <td className="px-4 py-3 border">{index + 1}</td>
                <td>  <img src={tour.image} alt={tour.name} className="w-20 h-16 align-item:center "
                /></td>
                <td className="px-4 py-3 border">{tour.name}</td>
                <td className="px-4 py-3 border">{tour.destination}</td>
                <td className="px-4 py-3 border ">
                  {tour.price} đ </td>
                <td className="px-4 py-3 border">{tour.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


  );
}

export default ListPage;
