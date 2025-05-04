"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BookOpen, Menu, Search, ShoppingCart, User, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <Image src="/logo.svg" alt="LyceePlus" width={40} height={40} />
                  <span>LyceePlus</span>
                </Link>
                <Link href="/" className="text-lg font-medium">
                  Accueil
                </Link>
                <Link href="/courses" className="text-lg font-medium">
                  Cours
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 ml-4 md:ml-0">
            <span className="font-bold text-xl hidden md:inline-block">LyceePlus</span>
          </Link>

          {isSearchOpen ? (
            <div className="flex items-center flex-1 mx-4">
              <form onSubmit={handleSearch} className="flex w-full">
                <Input
                  placeholder="Search for WAEC, JAMB courses..."
                  className="h-9 md:w-[300px] lg:w-[400px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" variant="ghost" size="icon" className="ml-2">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close search</span>
                </Button>
              </form>
            </div>
          ) : (
            <>
              <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                <Link
                  href="/"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === "/" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Accueil
                </Link>
                <Link
                  href="/courses"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === "/courses" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Cours
                </Link>
              </nav>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </>
          )}

          <div className="flex items-center gap-2 ml-auto md:ml-0">
            <ThemeToggle />
            <div className="flex items-center gap-4">
              <Button size="sm" className="md:hidden" asChild>
                <Link href="/waitlist">Rejoindre la Liste d'Attente</Link>
              </Button>
              <Button size="sm" className="hidden md:flex" asChild>
                <Link href="/waitlist">Rejoindre la Liste d'Attente</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src="/logo.svg" alt="LyceePlus" width={40} height={40} /> */}
            <span className="font-bold">LyceePlus</span>
          </Link>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium">
              Accueil
            </Link>
            <Link href="/courses" className="text-sm font-medium">
              Cours
            </Link>
            <Link href="/about" className="text-sm font-medium">
              À Propos
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Button className="w-full" asChild>
              <Link href="/waitlist">Rejoindre la Liste d'Attente</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
