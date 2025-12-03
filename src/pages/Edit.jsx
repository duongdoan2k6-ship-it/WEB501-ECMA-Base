import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
  });

  // Lấy dữ liệu tour theo ID
  useEffect(() => {
    axios.get(`http://localhost:3000/tours/${id}`)
      .then(res => setTour(res.data))
      .catch(() => toast.error("Không tìm thấy tour"));
  }, [id]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/tours/${id}`, tour);
      toast.success("Cập nhật thành công!");
      navigate("/List");
    } catch (err) {
      toast.error("Lỗi cập nhật!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Sửa tour</h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        
        <div>
          <label className="block font-medium mb-1">Hình ảnh</label>
          <input
            value={tour.image}
            onChange={e => setTour({ ...tour, image: e.target.value })}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Tên tour</label>
          <input
            value={tour.name}
            onChange={e => setTour({ ...tour, name: e.target.value })}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Điểm đến</label>
          <input
            value={tour.destination}
            onChange={e => setTour({ ...tour, destination: e.target.value })}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Giá</label>
          <input
            value={tour.price}
            onChange={e => setTour({ ...tour, price: e.target.value })}
            type="number"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Thời lượng</label>
          <input
            value={tour.duration}
            onChange={e => setTour({ ...tour, duration: e.target.value })}
            type="text"
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Lưu lại
        </button>
      </form>
    </div>
  );
}

export default EditPage;
