"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: "Leak Repair", href: "/services/leak-repair" },
    { name: "Pipe Installation", href: "/services/pipe-installation" },
    { name: "Water Heater Service", href: "/services/water-heater" },
    { name: "Residential Plumbing", href: "/services/residential" },
  ]

  return (
    <header className="bg-accent text-accent-foreground border-b border-accent-foreground/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img className="w-[150px]" src="/tidy_pipes_logo.png" alt="tidy pipes logo" />
          </Link>

          {/* Spacer to push mobile controls right */}
          <div className="flex-1" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-accent-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-accent-foreground hover:text-primary transition-colors">
              About
            </Link>

            <Link href="/contact" className="text-accent-foreground hover:text-primary transition-colors">
              Contact
            </Link>

            {/* Desktop Phone Number */}
            <div className="flex items-center space-x-4 text-sm text-accent bg-primary px-4 py-2 rounded-[1em]">
              <a href="tel:5855078992" className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>(585) 507-8992</span>
              </a>
            </div>
          </nav>

          {/* MOBILE CONTROLS (Call + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Call Button */}
            <a
              href="tel:5855078992"
              className="flex items-center bg-primary text-primary-foreground p-4 rounded-xl shadow-sm"
            >
              <Phone className="h-6 w-6" />
            </a>

            {/* Mobile hamburger */}
            <button
              className="flex items-center justify-center bg-primary text-accent p-4 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-foreground/20">
            <nav className="flex flex-col space-y-4">
              {/* Mobile Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-accent-foreground hover:text-primary transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-accent-foreground/80 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-accent-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-accent-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
