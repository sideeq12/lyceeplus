import Image from "next/image"
import Link from "next/link"
import { Clock, Globe, PlayCircle, ShoppingCart, Star, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample course data
const course = {
  id: "1",
  title: "WAEC Mathematics Complete Course",
  instructor: "Dr. Adebayo Johnson",
  price: 15000,
  rating: 4.8,
  reviewCount: 342,
  studentCount: 5243,
  image: "/demoImages/emmanuel-ikwuegbu-M-4lFg1Xfag-unsplash.jpg",
  category: "Mathematics",
  level: "Intermediate",
  language: "English",
  lastUpdated: "March 2023",
  description:
    "This comprehensive course covers all the Mathematics topics required for the WAEC examination. From Algebra to Calculus, Geometry to Statistics, this course will prepare you thoroughly for success in your Mathematics exam.",
  whatYouWillLearn: [
    "Master all mathematical concepts required for WAEC",
    "Solve complex mathematical problems with ease",
    "Understand the application of mathematical principles",
    "Develop effective problem-solving techniques",
    "Practice with past WAEC questions and solutions",
    "Learn time-saving tips for the examination",
  ],
  courseContent: [
    {
      title: "Introduction to WAEC Mathematics",
      lessons: [
        { title: "Course Overview", duration: "10:15", preview: true },
        { title: "Understanding the WAEC Mathematics Syllabus", duration: "15:30", preview: false },
        { title: "Examination Format and Marking Scheme", duration: "12:45", preview: false },
      ],
    },
    {
      title: "Number and Numeration",
      lessons: [
        { title: "Number Bases", duration: "25:10", preview: false },
        { title: "Fractions, Decimals and Approximations", duration: "30:45", preview: false },
        { title: "Indices, Logarithms and Surds", duration: "28:20", preview: false },
        { title: "Sequence and Series", duration: "22:15", preview: false },
      ],
    },
    {
      title: "Algebra",
      lessons: [
        { title: "Algebraic Expressions", duration: "20:30", preview: false },
        { title: "Simple Equations and Inequalities", duration: "25:15", preview: false },
        { title: "Quadratic Equations", duration: "28:40", preview: false },
        { title: "Variation", duration: "18:25", preview: false },
        { title: "Matrices and Determinants", duration: "35:10", preview: false },
      ],
    },
    {
      title: "Geometry and Trigonometry",
      lessons: [
        { title: "Angles and Polygons", duration: "22:35", preview: false },
        { title: "Circles and Constructions", duration: "26:50", preview: false },
        { title: "Trigonometric Ratios", duration: "30:15", preview: false },
        { title: "Mensuration", duration: "28:20", preview: false },
      ],
    },
    {
      title: "Statistics and Probability",
      lessons: [
        { title: "Data Presentation and Analysis", duration: "24:45", preview: false },
        { title: "Measures of Central Tendency", duration: "22:30", preview: false },
        { title: "Probability", duration: "26:15", preview: false },
      ],
    },
  ],
  reviews: [
    {
      name: "Oluwaseun Adeyemi",
      rating: 5,
      date: "2 months ago",
      comment:
        "This course helped me score an A1 in my WAEC Mathematics. The explanations are clear and the practice questions are very similar to the actual exam questions.",
      image: "/demoImages/jeff-kweba--qh8PWfA-OE-unsplash.jpg",
    },
    {
      name: "Chidinma Okonkwo",
      rating: 4,
      date: "3 months ago",
      comment:
        "Very comprehensive course. The instructor explains complex concepts in a simple way. I particularly enjoyed the sections on Algebra and Trigonometry.",
      image: "/demoImages/shimo-yann-Wt9FwGDvp5E-unsplash.jpg",
    },
    {
      name: "Ibrahim Musa",
      rating: 5,
      date: "1 month ago",
      comment:
        "Best Mathematics course I've taken. The practice questions and past papers section is invaluable. Highly recommended for all WAEC candidates.",
      image: "/demoImages/iwaria-inc-KqERg6JywDk-unsplash.jpg",
    },
  ],
}

export default function CoursePage() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <h1 className="text-2xl font-bold md:text-3xl">{course.title}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{course.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="font-medium">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="font-medium">
                    {course.level}
                  </Badge>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-amber-500">{course.rating.toFixed(1)}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(course.rating) ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm text-muted-foreground">{course.studentCount.toLocaleString()} students</span>
                </div>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Created by{" "}
                <Link href="#" className="font-medium text-primary">
                  {course.instructor}
                </Link>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Last updated {course.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>{course.language}</span>
                </div>
              </div>
            </div>

            {/* Course Preview */}
            <div className="relative aspect-video overflow-hidden rounded-lg border">
              <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Button size="lg" variant="outline" className="gap-2 text-white hover:bg-primary hover:text-white">
                  <PlayCircle className="h-5 w-5" />
                  Preview Course
                </Button>
              </div>
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">What You Will Learn</h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {course.whatYouWillLearn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1 rounded-full bg-primary p-1">
                          <svg
                            className="h-3 w-3 text-primary-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Course Description</h3>
                  <div className="mt-4 space-y-4">
                    <p>
                      Welcome to the WAEC Mathematics Complete Course! This comprehensive program is designed to help
                      you excel in your WAEC Mathematics examination. Whether you're struggling with specific topics or
                      aiming for an A1, this course has everything you need to succeed.
                    </p>
                    <p>
                      The course is structured to follow the WAEC Mathematics syllabus, ensuring that you cover all the
                      required topics. Each section includes detailed video explanations, worked examples, and practice
                      questions to reinforce your understanding.
                    </p>
                    <p>
                      You'll also get access to past WAEC questions with step-by-step solutions, helping you familiarize
                      yourself with the examination pattern and question types. Our time-saving tips and examination
                      strategies will give you the confidence to tackle any question that comes your way.
                    </p>
                    <p>
                      By the end of this course, you'll have a solid understanding of all mathematical concepts required
                      for WAEC, improved problem-solving skills, and the ability to apply mathematical principles to
                      real-world situations.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Course Content</h3>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {course.courseContent.reduce((total, section) => total + section.lessons.length, 0)} lessons •{" "}
                    {Math.floor(
                      course.courseContent.reduce(
                        (total, section) =>
                          total +
                          section.lessons.reduce(
                            (sectionTotal, lesson) => sectionTotal + Number.parseInt(lesson.duration.split(":")[0]),
                            0,
                          ),
                        0,
                      ),
                    )}{" "}
                    hours total length
                  </div>
                  <div className="mt-4 space-y-4">
                    {course.courseContent.map((section, i) => (
                      <div key={i} className="rounded-lg border">
                        <div className="flex items-center justify-between p-4">
                          <h4 className="font-medium">{section.title}</h4>
                          <span className="text-sm text-muted-foreground">{section.lessons.length} lessons</span>
                        </div>
                        <Separator />
                        <div className="divide-y">
                          {section.lessons.map((lesson, j) => (
                            <div key={j} className="flex items-center justify-between p-4">
                              <div className="flex items-center gap-2">
                                <PlayCircle className="h-5 w-5 text-muted-foreground" />
                                <span>{lesson.title}</span>
                                {lesson.preview && (
                                  <Badge variant="secondary" className="ml-2">
                                    Preview
                                  </Badge>
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Student Reviews</h3>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-amber-500">{course.rating.toFixed(1)}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(course.rating) ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">({course.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-4">
                    {course.reviews.map((review, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-start gap-4">
                          <Image
                            src={review.image || "/placeholder.svg"}
                            alt={review.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{review.name}</h4>
                              <span className="text-xs text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Course Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="text-3xl font-bold">₦{course.price.toLocaleString()}</div>
                  <div className="space-y-2">
                    <Button className="w-full gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="w-full">
                      Buy Now
                    </Button>
                  </div>
                  <div className="text-sm text-center text-muted-foreground">30-Day Money-Back Guarantee</div>
                  <div className="space-y-2">
                    <h4 className="font-medium">This Course Includes:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        10 hours on-demand video
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          ></path>
                        </svg>
                        50 downloadable resources
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        Full lifetime access
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          ></path>
                        </svg>
                        Access on mobile and TV
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-muted-foreground"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          ></path>
                        </svg>
                        Certificate of completion
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Button variant="link" className="w-full text-primary">
                      Share this course
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
