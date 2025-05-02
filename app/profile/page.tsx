import Image from "next/image"
import Link from "next/link"
import { BookOpen, Clock, GraduationCap, Settings, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample user data
const user = {
  name: "Oluwaseun Adeyemi",
  email: "oluwaseun@example.com",
  image: "/demoImages/francis-odeyemi-AHvLXqAamC8-unsplash.jpg",
  enrolledCourses: [
    {
      id: "1",
      title: "WAEC Mathematics Complete Course",
      instructor: "Dr. Adebayo Johnson",
      image: "/placeholder.svg?height=200&width=400",
      progress: 65,
      lastAccessed: "2 days ago",
      nextLesson: "Quadratic Equations",
    },
    {
      id: "3",
      title: "Physics Mastery: WAEC & JAMB Preparation",
      instructor: "Engr. Tunde Bakare",
      image: "/placeholder.svg?height=200&width=400",
      progress: 30,
      lastAccessed: "1 week ago",
      nextLesson: "Newton's Laws of Motion",
    },
    {
      id: "5",
      title: "Biology: From Basics to Advanced",
      instructor: "Dr. Emmanuel Osei",
      image: "/placeholder.svg?height=200&width=400",
      progress: 10,
      lastAccessed: "2 weeks ago",
      nextLesson: "Cell Structure and Function",
    },
  ],
  completedCourses: [
    {
      id: "2",
      title: "English Language for JAMB & WAEC",
      instructor: "Prof. Chioma Okafor",
      image: "/placeholder.svg?height=200&width=400",
      completedDate: "3 months ago",
      certificate: true,
    },
  ],
  wishlist: [
    {
      id: "4",
      title: "Chemistry Comprehensive Guide",
      instructor: "Dr. Fatima Ibrahim",
      price: 16500,
      rating: 4.6,
      reviewCount: 203,
      image: "/demoImages/steward-masweneng-HStSHE55C5k-unsplash.jpg",
    },
    {
      id: "6",
      title: "Government & Politics for WAEC",
      instructor: "Prof. Nkechi Eze",
      price: 13500,
      rating: 4.5,
      reviewCount: 132,
      image: "/demoImages/tobie-eniafe-7EZfQdvDAl8-unsplash.jpg",
    },
  ],
}

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-6">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 mb-4">
                    <Image
                      src={user.image || "/placeholder.svg"}
                      alt={user.name}
                      fill
                      className="rounded-full object-cover border-4 border-background"
                    />
                  </div>
                  <h2 className="text-xl font-bold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <div className="mt-4 w-full">
                    <Button variant="outline" className="w-full gap-2">
                      <Settings className="h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Learning Statistics</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-sm">Courses Enrolled</span>
                    </div>
                    <span className="font-bold">{user.enrolledCourses.length + user.completedCourses.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-sm">Courses Completed</span>
                    </div>
                    <span className="font-bold">{user.completedCourses.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">Hours Learned</span>
                    </div>
                    <span className="font-bold">42</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-6">
            <Tabs defaultValue="my-learning" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="my-learning">My Learning</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              </TabsList>
              <TabsContent value="my-learning" className="space-y-4">
                <h2 className="text-2xl font-bold">My Learning</h2>
                {user.enrolledCourses.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {user.enrolledCourses.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progress</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground">Last accessed {course.lastAccessed}</p>
                          <p className="text-sm">
                            Next lesson: <span className="font-medium">{course.nextLesson}</span>
                          </p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Link href={`/learning/${course.id}`} className="w-full">
                            <Button className="w-full">Continue Learning</Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <BookOpen className="h-12 w-12 text-muted-foreground" />
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">No courses yet</h3>
                          <p className="text-muted-foreground">
                            You haven't enrolled in any courses yet. Browse our catalog to find courses that interest
                            you.
                          </p>
                        </div>
                        <Button asChild>
                          <Link href="/courses">Browse Courses</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                <h2 className="text-2xl font-bold">Completed Courses</h2>
                {user.completedCourses.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {user.completedCourses.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                          {course.certificate && (
                            <div className="absolute top-2 right-2">
                              <div className="rounded-full bg-primary p-1">
                                <GraduationCap className="h-4 w-4 text-primary-foreground" />
                              </div>
                            </div>
                          )}
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-2">
                          <p className="text-sm text-muted-foreground">Completed {course.completedDate}</p>
                          <Progress value={100} className="h-2" />
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                          <Link href={`/courses/${course.id}`} className="flex-1">
                            <Button variant="outline" className="w-full">
                              Review Course
                            </Button>
                          </Link>
                          {course.certificate && (
                            <Link href={`/certificates/${course.id}`} className="flex-1">
                              <Button className="w-full">View Certificate</Button>
                            </Link>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <GraduationCap className="h-12 w-12 text-muted-foreground" />
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">No completed courses</h3>
                          <p className="text-muted-foreground">
                            You haven't completed any courses yet. Continue learning to earn certificates.
                          </p>
                        </div>
                        <Button asChild>
                          <Link href="/profile">Go to My Learning</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              <TabsContent value="wishlist" className="space-y-4">
                <h2 className="text-2xl font-bold">Wishlist</h2>
                {user.wishlist.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {user.wishlist.map((course) => (
                      <Card key={course.id} className="overflow-hidden">
                        <div className="relative aspect-video">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-2">
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-amber-500">{course.rating.toFixed(1)}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(course.rating)
                                      ? "fill-amber-500 text-amber-500"
                                      : "fill-muted text-muted"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">({course.reviewCount})</span>
                          </div>
                          <div className="font-bold">₦{course.price.toLocaleString()}</div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                          <Link href={`/courses/${course.id}`} className="flex-1">
                            <Button variant="outline" className="w-full">
                              View Course
                            </Button>
                          </Link>
                          <Button className="flex-1">Add to Cart</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <BookOpen className="h-12 w-12 text-muted-foreground" />
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold">Your wishlist is empty</h3>
                          <p className="text-muted-foreground">
                            Save courses you're interested in to your wishlist for easy access later.
                          </p>
                        </div>
                        <Button asChild>
                          <Link href="/courses">Browse Courses</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
