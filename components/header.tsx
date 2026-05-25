"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

function useOutsideAlerter(refs: React.RefObject<HTMLElement>[], closeAll: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!refs.some(ref => ref.current && ref.current.contains(event.target as Node))) {
        closeAll()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [refs, closeAll])
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<"about" | "workshops" | "more" | null>(null)

  const aboutRef = useRef<HTMLDivElement | null>(null)
  const workshopsRef = useRef<HTMLDivElement | null>(null)
  const moreRef = useRef<HTMLDivElement | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  // Close all dropdowns on outside click
  useOutsideAlerter(
    [aboutRef as React.RefObject<HTMLElement>, workshopsRef as React.RefObject<HTMLElement>, moreRef as React.RefObject<HTMLElement>, mobileMenuRef as React.RefObject<HTMLElement>, mobileMenuRef as React.RefObject<HTMLElement>], 
    () => setOpenDropdown(null)
  )

  // Prevent background scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isMobileMenuOpen])

  // Close menu on scroll/resize
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      setOpenDropdown(null)
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Committee", href: "/committee" },
        { name: "Call for Papers", href: "/call-for-papers" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Speakers", href: "/speakers" },
    { name: "MNIT Jaipur ", href: "/about/mnit-jaipur" },
    // { name: "Glimpses", href: "/glimpses" },
  ]

  const aboutMenuItems = [
    { name: "COPEN", href: "/about/copen" },
    { name: "COPEN Comprehensive Portal", href: "/about/portal" },
    { name: "Pink City - Jaipur", href: "/about/jaipur" },
    
    
  
    // { name: "NIT Calicut", href: "/about/nit-calicut" },
    // { name: "IIT Palakkad", href: "/about/iit-palakkad" },
    // { name: "IIST Thiruvananthapuram", href: "/about/iist-thiruvananthapuram" },
    // { name: "NITK Surathkal", href: "/about/nitk-surathkal" },
  ]

  // const workshopsMenuItems = [
  //   { name: "Pre Conference Workshops", href: "/workshops/pre" },
  //   { name: "Post Conference Workshops", href: "/workshops/post" },
  // ]

  const moreMenuItems = [
    // { name: "Program", href: "/program" },
    { name: "Travel & Hospitality", href: "/hospitality" },
    

    // { name: "Pre‑COPEN Events", href: "/pre-copen-events" },
    { name: "Contact Us", href: "/contact" },
  ]

  // Dropdown rendering helper
  const Dropdown = ({ open, children, refEl }: any) =>
    open && (
      <div
        ref={refEl}
        tabIndex={-1}
        className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-md shadow-2xl z-40 p-2 ring-1 ring-black/5 animate-fade-in"
        role="menu"
      >
        {children}
      </div>
    )

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className={`transition ${isScrolled ? "bg-white/80 shadow-md backdrop-blur" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/images/copen.png" alt="MNIT Jaipur" width={40} height={40} className="rounded-full" />
              <div className="ml-2">
                <p className="font-serif font-bold text-lg text-primary">COPEN 14</p>
                <span className="text-xs text-muted-foreground">MNIT Jaipur</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 relative">
              <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
              
              {/* About Dropdown */}
              <div className="relative" ref={aboutRef}>
                <button
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "about"}
                  onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
                  onFocus={() => setOpenDropdown("about")}
                  tabIndex={0}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && setOpenDropdown(openDropdown === "about" ? null : "about")}
                >
                  About <ChevronDown className="w-4 h-4" />
                </button>
                <Dropdown open={openDropdown === "about"} refEl={aboutRef}>
                  {aboutMenuItems.map(item => (
                    <Link key={item.name} href={item.href} className="block px-4 py-2 rounded hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>
                      {item.name}
                    </Link>
                  ))}
                </Dropdown>
              </div>

              {navItems.slice(1).map(item => (
                <Link key={item.name} href={item.href} className="text-sm font-medium hover:text-primary">
                  {item.name}
                </Link>
              ))}

              {/* Workshops Dropdown */}
              <div className="relative" ref={workshopsRef}>
                {/* <button
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "workshops"}
                  onClick={() => setOpenDropdown(openDropdown === "workshops" ? null : "workshops")}
                  onFocus={() => setOpenDropdown("workshops")}
                  tabIndex={0}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && setOpenDropdown(openDropdown === "workshops" ? null : "workshops")}
                >
                  Workshops <ChevronDown className="w-4 h-4" />
                </button> */}
                {/* <Dropdown open={openDropdown === "workshops"} refEl={workshopsRef}>
                  {workshopsMenuItems.map(item => (
                    <Link key={item.name} href={item.href} className="block px-4 py-2 rounded hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>
                      {item.name}
                    </Link>
                  ))}
                </Dropdown> */}
              </div>

              {/* More Dropdown */}
              <div className="relative" ref={moreRef}>
                <button
                  className="flex items-center gap-1 text-sm font-medium hover:text-primary"
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === "more"}
                  onClick={() => setOpenDropdown(openDropdown === "more" ? null : "more")}
                  onFocus={() => setOpenDropdown("more")}
                  tabIndex={0}
                  onKeyDown={e => (e.key === "Enter" || e.key === " ") && setOpenDropdown(openDropdown === "more" ? null : "more")}
                >
                  More <ChevronDown className="w-4 h-4" />
                </button>
                <Dropdown open={openDropdown === "more"} refEl={moreRef}>
                  {moreMenuItems.map(item => (
                    <Link key={item.name} href={item.href} className="block px-4 py-2 rounded hover:bg-gray-100" onClick={() => setOpenDropdown(null)}>
                      {item.name}
                    </Link>
                  ))}
                </Dropdown>
              </div>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center space-x-2">
              <Button className="hidden md:inline-block" asChild>
                <Link href="/registration">Register Now</Link>
              </Button>
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
                aria-label="Open menu"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              >
                {isMobileMenuOpen ? <X size={26}/> : <Menu size={26}/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden bg-white shadow-xl px-6 py-4 absolute top-16 left-0 right-0 z-50 border-t">
            <Link href="/" className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <button
              className="w-full flex items-center justify-between py-2 font-medium"
              onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "about"}
            >
              About <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "about" && (
              <div className="pl-3 mb-2">
                {aboutMenuItems.map(item => (
                  <Link key={item.name} href={item.href} className="block py-1 text-sm" onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {navItems.slice(1).map(item => (
              <Link key={item.name} href={item.href} className="block py-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}

            {/* <button
              className="w-full flex items-center justify-between py-2 font-medium"
              onClick={() => setOpenDropdown(openDropdown === "workshops" ? null : "workshops")}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "workshops"}
            >
              Workshops <ChevronDown className="w-4 h-4" />
            </button> */}
            {/* {openDropdown === "workshops" && (
              // <div className="pl-3 mb-2">
              //   {workshopsMenuItems.map(item => (
              //     <Link key={item.name} href={item.href} className="block py-1 text-sm" onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}>
              //       {item.name}
              //     </Link>
              //   ))}
              // </div>
            )} */}
            <button
              className="w-full flex items-center justify-between py-2 font-medium"
              onClick={() => setOpenDropdown(openDropdown === "more" ? null : "more")}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "more"}
            >
              More <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "more" && (
              <div className="pl-3 mb-2">
                {moreMenuItems.map(item => (
                  <Link key={item.name} href={item.href} className="block py-1 text-sm" onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}>
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
            <Button className="mt-4 w-full" asChild>
              <Link href="/registration" onClick={() => setIsMobileMenuOpen(false)}>
                Register Now
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
