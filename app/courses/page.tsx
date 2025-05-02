"use client"

import { useState } from "react"
import { Filter, Search } from "lucide-react"

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
    title: "WAEC Mathematics Complete Course",
    instructor: "Dr. Adebayo Johnson",
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
    title: "English Language for JAMB & WAEC",
    instructor: "Prof. Chioma Okafor",
    price: 12500,
    rating: 4.7,
    reviewCount: 287,
    studentCount: 4876,
    image: "/demoImages/charles-hembaor-xjrz_Gjyk8A-unsplash.jpg",
    category: "English",
    level: "Beginner" as const,
  },
  {
    id: "3",
    title: "Physics Mastery: WAEC & JAMB Preparation",
    instructor: "Engr. Tunde Bakare",
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
    title: "Chemistry Comprehensive Guide",
    instructor: "Dr. Fatima Ibrahim",
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
    title: "Biology: From Basics to Advanced",
    instructor: "Dr. Emmanuel Osei",
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
    title: "Government & Politics for WAEC",
    instructor: "Prof. Nkechi Eze",
    price: 13500,
    rating: 4.5,
    reviewCount: 132,
    studentCount: 1876,
    image: "/demoImages/smart-araromi-SsowBguJYbY-unsplash.jpg",
    category: "Government",
    level: "Intermediate" as const,
  },
  {
    id: "7",
    title: "Economics Simplified for JAMB",
    instructor: "Dr. Oluwaseun Adeleke",
    price: 15500,
    rating: 4.8,
    reviewCount: 165,
    studentCount: 2450,
    image: "/demoImages/cin-ezFAew1dUJg-unsplash.jpg",
    category: "Economics",
    level: "Intermediate" as const,
  },
  {
    id: "8",
    title: "Literature in English: Complete Guide",
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
    title: "Geography for WAEC & JAMB",
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
    title: "Computer Science Fundamentals",
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
    title: "Accounting Principles for WAEC",
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
    title: "Commerce and Trade for WAEC",
    instructor: "Mr. Chinedu Okonkwo",
    price: 12500,
    rating: 4.4,
    reviewCount: 110,
    studentCount: 1600,
    image: "/demoImages/tobie-eniafe-7EZfQdvDAl8-unsplash.jpg",
    category: "Commerce",
    level: "Beginner" as const,
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
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
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category)

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
            <h1 className="text-3xl font-bold">Explore Courses</h1>
            <p className="text-muted-foreground mt-2">
              Browse our collection of high-quality WAEC and JAMB preparation courses
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              className="sm:hidden flex items-center gap-2"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
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
                    <span>₦{priceRange[0].toLocaleString()}</span>
                    <span>₦{priceRange[1].toLocaleString()}</span>
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
                      <span>₦{priceRange[0].toLocaleString()}</span>
                      <span>₦{priceRange[1].toLocaleString()}</span>
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
