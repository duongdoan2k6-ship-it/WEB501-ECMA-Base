import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
 
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
   const [password, setpassword] = useState("");
 

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    if (
      !username ||
      !email ||
      !password 
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/register", {
        username,
        email,
        password,
        
      });
      toast.success("Dang ki thanh cong!");
    
      navigate("/signin"); 

    
    } catch (error) {
      console.error(error); 
      toast.error("Lỗi: " + (error.response?.data?.message || error.message));
    }
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Đăng kí </h1>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Passworwd</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Đăng kí 
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;