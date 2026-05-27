"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
    {
        label: "Collections",
        href: "/collections",
    },

    {
        label: "High Jewellery",
        href: "/high-jewellery",
    },

    {
        label: "Bespoke",
        href: "/bespoke",
    },

    {
        label: "Heritage",
        href: "/heritage",
    },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] =
        useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full border-b border-[#D4AF37]/10 bg-[#050816]/60 shadow-[0_4px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl">

            <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-3xl font-bold text-[#D4AF37] lg:text-4xl"
                    style={{
                        fontFamily: "var(--font-playfair)",
                    }}
                >
                    RR Jewellers
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 lg:flex">

                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="group relative text-sm uppercase tracking-[0.18em] text-white/80 transition hover:text-[#D4AF37]"
                        >
                            {item.label}

                            <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="https://wa.me/919346466666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-md bg-[#D4AF37] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-[#F1D27A] lg:block"
                >
                    Enquire
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() =>
                        setMobileMenuOpen(!mobileMenuOpen)
                    }
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
                >
                    <span className="text-2xl">
                        {mobileMenuOpen ? "×" : "☰"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="border-t border-white/10 bg-[#040816] lg:hidden">

                    <div className="flex flex-col px-6 py-8">

                        {[
                            {
                                name: "Collections",
                                href: "/collections",
                            },

                            {
                                name: "High Jewellery",
                                href: "/high-jewellery",
                            },

                            {
                                name: "Bespoke",
                                href: "/bespoke",
                            },

                            {
                                name: "Heritage",
                                href: "/heritage",
                            },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() =>
                                    setMobileMenuOpen(false)
                                }
                                className="border-b border-white/5 py-5 text-sm uppercase tracking-[0.18em] text-white/80 transition hover:text-[#D4AF37]"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <a
                            href="https://wa.me/919346466666"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 rounded-md bg-[#D4AF37] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black"
                        >
                            Enquire
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}