import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  Mail,
  MessageSquare,
  User,
  Lock,
  EyeOff,
  Eye,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import FormInput from "../components/auth/FormInput";
import AuthImagePattern from "../components/auth/AuthImagePattern";

const LoginPage = () => {
  const [formData, setFormdata] = useState({
    email: "demo@chitchat.com",
    password: "test1234",
  });

  const { login, isLogginIn } = useAuthStore();

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    // if (!/\S+@\S+\.\S+/.test(formData.email))
    //   return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    // if (formData.password.length < 6)
    //   return toast.error("Password must be at least 6 characters");

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();

    if (success === true) login(formData);
  };
  return (
    <div className="min-h-[100svh] grid lg:grid-cols-2">
      {/*left side  */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex place-items-center justify-center">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormdata({ ...formData, email: e.target.value })
              }
            />
            <FormInput
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormdata({ ...formData, password: e.target.value })
              }
            />

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLogginIn}
            >
              {isLogginIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default LoginPage;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2QzZjI4NTFjMTEzZmNjNWM2OGQ4MTgiLCJpYXQiOjE3NDE5NDQxNzIsImV4cCI6MTc0MjU0ODk3Mn0.LNU9rE2NIMWnbNm4yUdONV5BWE2MBBpbEjIT-4CmeF0

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2QzZjI4NTFjMTEzZmNjNWM2OGQ4MTgiLCJpYXQiOjE3NDE5NDQzMTgsImV4cCI6MTc0MjU0OTExOH0.1MNpgZGqHPMnjkItllZ2Dmypc10QA2sJWqlZ69MQyHQ
