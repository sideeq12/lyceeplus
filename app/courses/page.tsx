"use client"

import { useState } from "react"
import { Filter, Search, Video, BookOpen, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { CourseCard } from "@/components/course-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample course data (same as in homepage)
const courses = [
  {
    id: "1",
    title: "Mathématiques pour le BEPC",
    instructor: "Dr. Jean Kaboré",
    price: 15000,
    rating: 4.8,
    reviewCount: 342,
    studentCount: 5243,
    image: "/demoImages/emmanuel-ikwuegbu-M-4lFg1Xfag-unsplash.jpg",
    category: "Mathematics",
    level: "Intermediate" as const,
    featured: true,
  },
  {
    id: "2",
    title: "Français pour le BEPC & BAC",
    instructor: "Prof. Marie Diallo",
    price: 12500,
    rating: 4.7,
    reviewCount: 287,
    studentCount: 4876,
    image: "/demoImages/charles-hembaor-xjrz_Gjyk8A-unsplash.jpg",
    category: "French",
    level: "Beginner" as const,
  },
  {
    id: "3",
    title: "Physique : Préparation BAC",
    instructor: "Prof. Aminata Ouédraogo",
    price: 18000,
    rating: 4.9,
    reviewCount: 156,
    studentCount: 2345,
    image: "/demoImages/emmanuel-ikwuegbu-MUyq5MiVE2w-unsplash.jpg",
    category: "Physics",
    level: "Advanced" as const,
  },
  {
    id: "4",
    title: "Guide Complet de Chimie",
    instructor: "Dr. Ibrahim Sanou",
    price: 16500,
    rating: 4.6,
    reviewCount: 203,
    studentCount: 3120,
    image: "/demoImages/dj-tears-plk-EAq5eTq1OXQ-unsplash.jpg",
    category: "Chemistry",
    level: "Intermediate" as const,
  },
  {
    id: "5",
    title: "Biologie : Des Bases à l'Avancé",
    instructor: "Dr. Fatoumata Traoré",
    price: 14000,
    rating: 4.7,
    reviewCount: 178,
    studentCount: 2890,
    image: "/demoImages/belinda-fewings-_CyyAj0QboY-unsplash.jpg",
    category: "Biology",
    level: "Beginner" as const,
    featured: true,
  },
  {
    id: "6",
    title: "Histoire-Géographie pour le BEPC",
    instructor: "Prof. Nkechi Eze",
    price: 13500,
    rating: 4.5,
    reviewCount: 132,
    studentCount: 1876,
    image: "/demoImages/smart-araromi-SsowBguJYbY-unsplash.jpg",
    category: "History",
    level: "Intermediate" as const,
  },
  {
    id: "7",
    title: "Philosophie pour le BAC",
    instructor: "Dr. Boureima Sawadogo",
    price: 15500,
    rating: 4.8,
    reviewCount: 165,
    studentCount: 2450,
    image: "/demoImages/cin-ezFAew1dUJg-unsplash.jpg",
    category: "Philosophy",
    level: "Intermediate" as const,
  },
  {
    id: "8",
    title: "Littérature Française : Guide Complet",
    instructor: "Prof. Grace Adichie",
    price: 14500,
    rating: 4.6,
    reviewCount: 142,
    studentCount: 1980,
    image: "/demoImages/dahiru-wada-gunsau-UFyaTgd6UVE-unsplash.jpg",
    category: "Literature",
    level: "Advanced" as const,
  },
  {
    id: "9",
    title: "Géographie pour le BEPC & BAC",
    instructor: "Dr. Kofi Mensah",
    price: 13000,
    rating: 4.5,
    reviewCount: 120,
    studentCount: 1750,
    image: "/demoImages/abdulmajid-sanusi-VfenC4twHA4-unsplash.jpg",
    category: "Geography",
    level: "Intermediate" as const,
  },
  {
    id: "10",
    title: "Informatique : Fondamentaux",
    instructor: "Engr. Yusuf Ibrahim",
    price: 16000,
    rating: 4.7,
    reviewCount: 185,
    studentCount: 2100,
    image: "/demoImages/charles-hembaor-MCGz5wV5wkc-unsplash.jpg",
    category: "Computer Science",
    level: "Beginner" as const,
  },
  {
    id: "11",
    title: "Comptabilité pour le BAC",
    instructor: "Mrs. Folake Adeola",
    price: 14000,
    rating: 4.6,
    reviewCount: 130,
    studentCount: 1850,
    image: "/demoImages/steward-masweneng-HStSHE55C5k-unsplash.jpg",
    category: "Accounting",
    level: "Intermediate" as const,
  },
  {
    id: "12",
    title: "Économie pour le BAC",
    instructor: "Mr. Chinedu Okonkwo",
    price: 12500,
    rating: 4.4,
    reviewCount: 110,
    studentCount: 1600,
    image: "/demoImages/tobie-eniafe-7EZfQdvDAl8-unsplash.jpg",
    category: "Economics",
    level: "Beginner" as const,
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 20000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevel, setSelectedLevel] = useState<string>("")
  const [sortBy, setSortBy] = useState("popular")
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

  // Filter courses based on search query and filters
  const filteredCourses = courses.filter((course) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())

    // Price range filter
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]

    // Category filter
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory

    // Level filter
    const matchesLevel = selectedLevel === "" || course.level === selectedLevel

    return matchesSearch && matchesPrice && matchesCategory && matchesLevel
  })

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id.localeCompare(a.id) // Using ID as a proxy for date
      default: // popular
        return b.studentCount - a.studentCount
    }
  })

  // Get unique categories
  const categories = Array.from(new Set(courses.map((course) => course.category)))

  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="flex flex-col space-y-6">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Cours pour le BEPC & BAC
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Découvrez nos cours de haute qualité conçus pour vous aider à exceller dans vos examens nationaux.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              placeholder="Rechercher un cours..."
              className="max-w-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Toutes les matières" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les matières</SelectItem>
                <SelectItem value="mathematics">Mathématiques</SelectItem>
                <SelectItem value="french">Français</SelectItem>
                <SelectItem value="physics">Physique</SelectItem>
                <SelectItem value="chemistry">Chimie</SelectItem>
                <SelectItem value="biology">Biologie</SelectItem>
                <SelectItem value="history">Histoire-Géographie</SelectItem>
                <SelectItem value="philosophy">Philosophie</SelectItem>
                <SelectItem value="economics">Économie</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Filters - Desktop */}
            <Card className="hidden md:block h-fit">
              <CardHeader>
                <h2 className="font-semibold">Filters</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Range */}
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Price Range</h3>
                  <Slider
                    defaultValue={[0, 20000]}
                    max={20000}
                    step={500}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>{priceRange[0].toLocaleString()} CFA</span>
                    <span>{priceRange[1].toLocaleString()} CFA</span>
                  </div>
                </div>

                <Separator />

                {/* Categories */}
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategories([...selectedCategories, category])
                            } else {
                              setSelectedCategories(selectedCategories.filter((c) => c !== category))
                            }
                          }}
                        />
                        <Label htmlFor={`category-${category}`} className="text-sm">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Level */}
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Level</h3>
                  <RadioGroup value={selectedLevel} onValueChange={setSelectedLevel}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="level-all" />
                      <Label htmlFor="level-all" className="text-sm">
                        All Levels
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Beginner" id="level-beginner" />
                      <Label htmlFor="level-beginner" className="text-sm">
                        Beginner
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Intermediate" id="level-intermediate" />
                      <Label htmlFor="level-intermediate" className="text-sm">
                        Intermediate
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Advanced" id="level-advanced" />
                      <Label htmlFor="level-advanced" className="text-sm">
                        Advanced
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Reset Filters */}
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedLevel("")
                    setPriceRange([0, 20000])
                  }}
                >
                  Reset Filters
                </Button>
              </CardContent>
            </Card>

            {/* Filters - Mobile */}
            {isMobileFilterOpen && (
              <Card className="md:hidden col-span-full">
                <CardHeader className="flex flex-row items-center justify-between">
                  <h2 className="font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={() => setIsMobileFilterOpen(false)}>
                    <Filter className="h-4 w-4 mr-2" />
                    Close
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price Range */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">Price Range</h3>
                    <Slider
                      defaultValue={[0, 20000]}
                      max={20000}
                      step={500}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>{priceRange[0].toLocaleString()} CFA</span>
                      <span>{priceRange[1].toLocaleString()} CFA</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Categories */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">Categories</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`mobile-category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedCategories([...selectedCategories, category])
                              } else {
                                setSelectedCategories(selectedCategories.filter((c) => c !== category))
                              }
                            }}
                          />
                          <Label htmlFor={`mobile-category-${category}`} className="text-sm">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Level */}
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">Level</h3>
                    <RadioGroup value={selectedLevel} onValueChange={setSelectedLevel}>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="" id="mobile-level-all" />
                          <Label htmlFor="mobile-level-all" className="text-sm">
                            All Levels
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Beginner" id="mobile-level-beginner" />
                          <Label htmlFor="mobile-level-beginner" className="text-sm">
                            Beginner
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Intermediate" id="mobile-level-intermediate" />
                          <Label htmlFor="mobile-level-intermediate" className="text-sm">
                            Intermediate
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="Advanced" id="mobile-level-advanced" />
                          <Label htmlFor="mobile-level-advanced" className="text-sm">
                            Advanced
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  {/* Apply/Reset Filters */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => {
                        setSelectedCategories([])
                        setSelectedLevel("")
                        setPriceRange([0, 20000])
                      }}
                    >
                      Reset
                    </Button>
                    <Button className="flex-1" onClick={() => setIsMobileFilterOpen(false)}>
                      Apply Filters
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Course Grid */}
            <div className="md:col-span-3">
              {/* Results Count */}
              <div className="mb-4">
                <p className="text-muted-foreground">
                  Showing {sortedCourses.length} of {courses.length} courses
                </p>
              </div>

              {/* Course Cards */}
              {sortedCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <Card className="w-full">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <Search className="h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold">No courses found</h3>
                    <p className="text-muted-foreground mt-2">
                      Try adjusting your search or filter criteria to find what you're looking for.
                    </p>
                    <Button
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery("")
                        setSelectedCategories([])
                        setSelectedLevel("")
                        setPriceRange([0, 20000])
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Pagination */}
              {sortedCourses.length > 0 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
