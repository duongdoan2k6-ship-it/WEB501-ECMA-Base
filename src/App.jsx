import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";

import ListPage from "./pages/List";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import RegisterPage from "./pages/signup";
import LoginPage from "./pages/signin";


function App() {
  return (
    <>
      <Toaster />

      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/List" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/Add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/signin" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="/signup" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB501</h1>
        <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p>
      </div>

      {/* ROUTERS */}
      <Routes>
        <Route path="/List" element={<ListPage />} />
        <Route path="/Add" element={<AddPage />} />
        <Route path="/Edit/:id" element={<EditPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
