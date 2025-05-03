import Image from "next/image"
import Link from "next/link"
import { BookOpen, Clock, GraduationCap, Settings, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { CardDescription } from "@/components/ui/card"
import { CheckCircle, Trophy } from "lucide-react"

// Sample user data
const user = {
  name: "Aminata Ouédraogo",
  email: "aminata.ouedraogo@example.com",
  image: "/demoImages/francis-odeyemi-AHvLXqAamC8-unsplash.jpg",
  level: "Terminale",
  school: "Lycée Philippe Zinda Kaboré",
  location: "Ouagadougou",
  enrolledCourses: [
    {
      id: "1",
      title: "Mathématiques pour le BEPC",
      instructor: "Dr. Jean Kaboré",
      image: "/demoImages/emmanuel-ikwuegbu-M-4lFg1Xfag-unsplash.jpg",
      progress: 65,
      lastAccessed: "il y a 2 jours",
      nextLesson: "Équations du Second Degré",
    },
    {
      id: "3",
      title: "Physique : Préparation BAC",
      instructor: "Prof. Aminata Ouédraogo",
      image: "/demoImages/emmanuel-ikwuegbu-MUyq5MiVE2w-unsplash.jpg",
      progress: 30,
      lastAccessed: "il y a 1 semaine",
      nextLesson: "Les Lois de Newton",
    },
    {
      id: "5",
      title: "Biologie : Des Bases à l'Avancé",
      instructor: "Dr. Fatoumata Traoré",
      image: "/demoImages/belinda-fewings-_CyyAj0QboY-unsplash.jpg",
      progress: 10,
      lastAccessed: "il y a 2 semaines",
      nextLesson: "Structure et Fonction de la Cellule",
    },
  ],
  completedCourses: [
    {
      id: "2",
      title: "Français pour le BEPC & BAC",
      instructor: "Prof. Marie Diallo",
      image: "/demoImages/charles-hembaor-xjrz_Gjyk8A-unsplash.jpg",
      completedDate: "il y a 3 mois",
      certificate: true,
    },
  ],
  wishlist: [
    {
      id: "4",
      title: "Guide Complet de Chimie",
      instructor: "Dr. Ibrahim Sanou",
      price: 16500,
      rating: 4.6,
      reviewCount: 203,
      image: "/demoImages/dj-tears-plk-EAq5eTq1OXQ-unsplash.jpg",
    },
    {
      id: "6",
      title: "Histoire-Géographie pour le BEPC",
      instructor: "Prof. Nkechi Eze",
      price: 13500,
      rating: 4.5,
      reviewCount: 132,
      image: "/demoImages/smart-araromi-SsowBguJYbY-unsplash.jpg",
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
                      Modifier le Profil
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Statistiques d'Apprentissage</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-sm">Cours Inscrits</span>
                    </div>
                    <span className="font-bold">{user.enrolledCourses.length + user.completedCourses.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="text-sm">Cours Terminés</span>
                    </div>
                    <span className="font-bold">{user.completedCourses.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-sm">Heures d'Apprentissage</span>
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
                <TabsTrigger value="my-learning">Mon Apprentissage</TabsTrigger>
                <TabsTrigger value="completed">Terminés</TabsTrigger>
                <TabsTrigger value="wishlist">Liste de Souhaits</TabsTrigger>
              </TabsList>
              <TabsContent value="my-learning" className="space-y-4">
                <h2 className="text-2xl font-bold">Mon Apprentissage</h2>
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
                          <p className="text-sm text-muted-foreground">Instructeur : {course.instructor}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Progression</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                          <p className="text-sm text-muted-foreground">Dernier accès {course.lastAccessed}</p>
                          <p className="text-sm">
                            Prochaine leçon : <span className="font-medium">{course.nextLesson}</span>
                          </p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0">
                          <Link href={`/learning/${course.id}`} className="w-full">
                            <Button className="w-full">Continuer l'Apprentissage</Button>
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
                          <h3 className="text-xl font-semibold">Aucun cours pour le moment</h3>
                          <p className="text-muted-foreground">
                            Vous n'êtes pas encore inscrit à des cours. Parcourez notre catalogue pour trouver des cours qui vous intéressent.
                          </p>
                        </div>
                        <Button asChild>
                          <Link href="/courses">Parcourir les Cours</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              <TabsContent value="completed" className="space-y-4">
                <h2 className="text-2xl font-bold">Cours Terminés</h2>
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
                          <p className="text-sm text-muted-foreground">Instructeur : {course.instructor}</p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0 space-y-2">
                          <p className="text-sm text-muted-foreground">Terminé {course.completedDate}</p>
                          <Progress value={100} className="h-2" />
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex gap-2">
                          <Link href={`/courses/${course.id}`} className="flex-1">
                            <Button variant="outline" className="w-full">
                              Revoir le Cours
                            </Button>
                          </Link>
                          {course.certificate && (
                            <Link href={`/certificates/${course.id}`} className="flex-1">
                              <Button className="w-full">Voir le Certificat</Button>
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
                          <h3 className="text-xl font-semibold">Aucun cours terminé</h3>
                          <p className="text-muted-foreground">
                            Vous n'avez pas encore terminé de cours. Continuez à apprendre pour obtenir des certificats.
                          </p>
                        </div>
                        <Button asChild>
                          <Link href="/profile">Aller à Mon Apprentissage</Link>
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
                          <div className="font-bold">{course.price.toLocaleString()} CFA</div>
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
