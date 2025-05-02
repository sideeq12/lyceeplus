import Link from "next/link"
import Image from "next/image"
import { BookOpen, ChevronRight, GraduationCap, LayoutGrid, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseCard } from "@/components/course-card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample course data
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
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/20 to-background py-12 md:py-24">
          <div className="container grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ace Your WAEC & JAMB Exams with ScholarBase
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Access high-quality courses designed specifically for Nigerian high school students. Learn at your own
                pace and excel in your exams.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="font-medium">
                  Explore Courses
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Sign Up Free
                </Button>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Join over 50,000 students already learning</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/demoImages/zach-wear-0XVJ5iMtRrQ-unsplash.jpg"
                alt="Students learning"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-muted/40 py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <GraduationCap className="h-8 w-8 text-primary mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">200+</h3>
                    <p className="text-sm text-muted-foreground">Courses</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">50K+</h3>
                    <p className="text-sm text-muted-foreground">Students</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">15</h3>
                    <p className="text-sm text-muted-foreground">Subjects</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <LayoutGrid className="h-8 w-8 text-primary mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">98%</h3>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-12 md:py-16">
          <div className="container space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Courses</h2>
              <Link href="/courses" className="flex items-center text-sm font-medium text-primary">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="flex flex-wrap">
                <TabsTrigger value="all">All Subjects</TabsTrigger>
                <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
                <TabsTrigger value="english">English</TabsTrigger>
                <TabsTrigger value="sciences">Sciences</TabsTrigger>
                <TabsTrigger value="arts">Arts & Humanities</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="mathematics" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses
                    .filter((course) => course.category === "Mathematics")
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="english" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses
                    .filter((course) => course.category === "English")
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="sciences" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses
                    .filter((course) => ["Physics", "Chemistry", "Biology"].includes(course.category))
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="arts" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses
                    .filter((course) => ["Government", "Literature"].includes(course.category))
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-muted/40 py-12 md:py-16">
          <div className="container space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Browse by Category</h2>
              <p className="text-muted-foreground">Find the perfect course for your exam preparation</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                { name: "Mathematics", icon: "📊" },
                { name: "English", icon: "📝" },
                { name: "Physics", icon: "⚛️" },
                { name: "Chemistry", icon: "🧪" },
                { name: "Biology", icon: "🧬" },
                { name: "Government", icon: "🏛️" },
                { name: "Economics", icon: "📈" },
                { name: "Literature", icon: "📚" },
                { name: "Geography", icon: "🌍" },
                { name: "Computer Science", icon: "💻" },
                { name: "Accounting", icon: "🧮" },
                { name: "Commerce", icon: "🛒" },
              ].map((category) => (
                <Link href={`/courses?category=${category.name.toLowerCase()}`} key={category.name}>
                  <Card className="h-full transition-all hover:border-primary hover:shadow-sm">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-3xl mb-2">{category.icon}</span>
                      <h3 className="font-medium">{category.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16">
          <div className="container space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What Our Students Say</h2>
              <p className="text-muted-foreground">Hear from students who have achieved success with ScholarBase</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Chioma Nwosu",
                  school: "Federal Government College, Lagos",
                  image: "/demoImages/jeff-kweba--qh8PWfA-OE-unsplash.jpg",
                  text: "ScholarBase helped me score 298 in my JAMB. The Mathematics and Physics courses were particularly helpful!",
                },
                {
                  name: "Emeka Okonkwo",
                  school: "Kings College, Lagos",
                  image: "/demoImages/shimo-yann-Wt9FwGDvp5E-unsplash.jpg",
                  text: "I got straight A's in my WAEC exams thanks to ScholarBase. The video explanations made complex topics easy to understand.",
                },
                {
                  name: "Amina Mohammed",
                  school: "Queens College, Lagos",
                  image: "/demoImages/iwaria-inc-KqERg6JywDk-unsplash.jpg",
                  text: "The practice questions on ScholarBase were very similar to what appeared in my actual exams. Highly recommended!",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                      </div>
                    </div>
                    <blockquote className="mt-4 border-l-2 pl-4 italic">"{testimonial.text}"</blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-12 md:py-16">
          <div className="container text-center space-y-6">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to Excel in Your Exams?</h2>
            <p className="mx-auto max-w-[600px]">
              Join thousands of students who have transformed their academic performance with ScholarBase.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Explore Courses
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
