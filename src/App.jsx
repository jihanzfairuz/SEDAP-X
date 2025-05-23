import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customer"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/authLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const User = React.lazy(() => import("./pages/User"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));

// Tambahan Guest
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const GuestHome = React.lazy(() => import("./pages/GuestHome"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Layout utama (Admin) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<User />} />
        </Route>

        {/* Layout autentikasi */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Layout Guest */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<GuestHome />} />
        </Route>

        {/* Halaman Error */}
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
