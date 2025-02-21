"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post('/api/users/verifyemail', { token });
            setVerified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
    <h1 className="text-4xl font-bold mb-4">Verify Email</h1>
    <h2 className="p-2 bg-orange-500 text-black rounded mb-4 break-words overflow-hidden">
        {token ? `${token}` : "No token"}
    </h2>

    {verified && (
        <div>
            <h2 className="text-2xl font-bold text-green-500 mb-4">Email Verified</h2>
            
        </div>
    )}
    {error && (
        <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
        </div>
    )}
</div>

        </div>
    );
}