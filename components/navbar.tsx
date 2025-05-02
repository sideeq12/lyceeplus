"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BookOpen, Menu, Search, ShoppingCart, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

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
                <BookOpen className="h-6 w-6" />
                <span>ScholarBase</span>
              </Link>
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/courses" className="text-lg font-medium">
                Courses
              </Link>
              <Link href="/profile" className="text-lg font-medium">
                My Learning
              </Link>
              <Link href="/cart" className="text-lg font-medium">
                Cart
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 ml-4 md:ml-0">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl hidden md:inline-block">ScholarBase</span>
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
                Home
              </Link>
              <Link
                href="/courses"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/courses" ? "text-primary" : "text-muted-foreground",
                )}
              >
                Courses
              </Link>
              <Link
                href="/profile"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === "/profile" ? "text-primary" : "text-muted-foreground",
                )}
              >
                My Learning
              </Link>
            </nav>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </>
        )}

        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
          <Link href="/login" className="hidden md:block">
            <Button variant="outline" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/signup" className="hidden md:block">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
