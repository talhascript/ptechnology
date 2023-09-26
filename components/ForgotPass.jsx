import React, { useState } from "react";
import { auth } from "../public/firebaseconfig";
import { sendPasswordResetEmail } from "firebase/auth";
// TUSFF

export default function ForgotPass() {
    const [email, setEmail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [error, setError] = useState(null);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();

        await sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("IT WORKS")
            setIsEmailSent(true);
            setError(null);
        })
        .catch((error) => {
            setError(error.message);
        });
        
    };

    return (
        <div className=" bg-gray-100 h-full">

            <div className="flex justify-center items-center h-screen">
                {isEmailSent ? (
                    <div className="text-center">
                        <p className="text-2xl font-bold text-primary mb-4">Password Reset Email Sent</p>
                        <p className="text-gray-600 mb-6">
                            Please check your email for instructions to reset your password.
                        </p>
                    </div>
                ) : (
                    <form
                        onSubmit={handleEmailSubmit}
                        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
                    >
                        <h1 className="text-2xl font-bold text-center text-primary mb-4">Password Reset</h1>
                        <p className="text-gray-600 text-center mb-6">
                            Enter the email address that you logged in with, and we'll send you an email with instructions to reset your password.
                        </p>
                        <div className="mb-4">
                            <label htmlFor="typeEmail" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input w-full border rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:border-primary"
                                placeholder="Enter your email"
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm mb-4">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-primary-dark focus:outline-none focus:ring focus:bg-primary-dark"
                        >
                            Reset Password
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}