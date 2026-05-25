"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin() {
    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);

      setLoading(false);

      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#040816] px-6 text-white">
      
      <div className="w-full max-w-md rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          RR Jewellers
        </p>

        <h1
          className="mt-4 text-5xl text-white"
          style={{
            fontFamily:
              "var(--font-playfair)",
          }}
        >
          Admin Login
        </h1>

        <div className="mt-10 space-y-5">
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-[#0B0E1A] px-5 py-4 text-white outline-none transition focus:border-[#D4AF37]"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-xl bg-[#D4AF37] py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A]"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>
        </div>
      </div>
    </main>
  );
}