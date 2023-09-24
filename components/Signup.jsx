import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../public/firebaseconfig";
import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // Create a new user in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth, // Use your Firebase auth instance
        email,
        password
      );

      // User has been created successfully
      const user = userCredential.user;

      // Set success to true to display the success message
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to close the success modal and redirect to login
  const closeSuccessModal = () => {
    setSuccess(false);
    // Redirect to the login page or any other page as needed
    window.location.href = "/login";
  };

  return (
    <div className="bg-gray-50 h-screen flex">
      {/* Sign-up section */}
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <img
              className="mx-auto h-20 w-auto transition-transform duration-300 hover:scale-110"
              src="logo.png"
              alt="Perseverance Technology"
            />
          </Link>
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create Your Account
          </h2>
        </div>

        <div className="bg-white mt-8 p-6 sm:mx-auto sm:w-full sm:max-w-md border rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all duration-300 hover:bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all duration-300 hover:bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 transition-all duration-300 hover:bg-gray-100"
                />
              </div>
            </div>
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transform transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <hr className="flex-grow border-t border-gray-300" />
              <p className="mx-4 text-sm text-black">Or continue with</p>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-white border px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm transform transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <Image src="/google.png" alt="Google" width={24} height={24} />
                <span>Google</span>
              </button>
              <button
                type="submit"
                className="flex w-full justify-center items-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transform transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <FaLinkedin size={20} className="mr-2" />
                <span>LinkedIn</span>
              </button>
            </div>
          </form>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-blue-500 hover:text-blue-600"
          >
            Sign In
          </Link>
        </p>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center align-middle justify-center z-50 backdrop-blur">
          <div className="p-5 bg-white rounded-lg shadow-xl border-2 border-cyan-600">
            <p className=" flex justify-center text-xl font-semibold mb-3">
              User Successfully Created
            </p>
            <p>You can now log into your account.</p>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md transform hover:scale-105 transition-transform"
                onClick={closeSuccessModal}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image section (hidden on md and smaller screens) */}
      <div className="hidden md:block md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt="Image"
        />
      </div>
    </div>
  );
}
