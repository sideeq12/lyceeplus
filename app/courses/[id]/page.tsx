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
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Play } from "lucide-react"

// Sample course data - this would typically come from your database
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
    level: "Intermediate",
    language: "English",
    lastUpdated: "March 2023",
    description:
      "Ce cours complet couvre tous les sujets de mathématiques requis pour l'examen BPEC. De l'algèbre au calcul, de la géométrie aux statistiques, ce cours vous préparera parfaitement pour réussir votre examen de mathématiques.",
    whatYouWillLearn: [
      "Maîtriser tous les concepts mathématiques requis pour le BPEC",
      "Résoudre des problèmes mathématiques complexes avec facilité",
      "Comprendre l'application des principes mathématiques",
      "Développer des techniques efficaces de résolution de problèmes",
      "S'entraîner avec des questions et solutions des examens BPEC précédents",
      "Apprendre des astuces pour gagner du temps pendant l'examen",
    ],
    courseContent: [
      {
        title: "Introduction aux Mathématiques BPEC",
        lessons: [
          { title: "Aperçu du Cours", duration: "10:15", preview: true },
          { title: "Comprendre le Programme de Mathématiques BPEC", duration: "15:30", preview: false },
          { title: "Format de l'Examen et Barème de Notation", duration: "12:45", preview: false },
        ],
      },
      {
        title: "Nombres et Numération",
        lessons: [
          { title: "Bases Numériques", duration: "25:10", preview: false },
          { title: "Fractions, Nombres Décimaux et Approximations", duration: "30:45", preview: false },
          { title: "Indices, Logarithmes et Radicaux", duration: "28:20", preview: false },
          { title: "Suites et Séries", duration: "22:15", preview: false },
        ],
      },
      {
        title: "Algèbre",
        lessons: [
          { title: "Expressions Algébriques", duration: "20:30", preview: false },
          { title: "Équations Simples et Inéquations", duration: "25:15", preview: false },
          { title: "Équations Quadratiques", duration: "28:40", preview: false },
          { title: "Variation", duration: "18:25", preview: false },
          { title: "Matrices et Déterminants", duration: "35:10", preview: false },
        ],
      },
      {
        title: "Géométrie et Trigonométrie",
        lessons: [
          { title: "Angles et Polygones", duration: "22:35", preview: false },
          { title: "Cercles et Constructions", duration: "26:50", preview: false },
          { title: "Rapports Trigonométriques", duration: "30:15", preview: false },
          { title: "Mensuration", duration: "28:20", preview: false },
        ],
      },
      {
        title: "Statistiques et Probabilités",
        lessons: [
          { title: "Présentation et Analyse des Données", duration: "24:45", preview: false },
          { title: "Mesures de la Tendance Centrale", duration: "22:30", preview: false },
          { title: "Probabilités", duration: "26:15", preview: false },
        ],
      },
    ],
    reviews: [
      {
        name: "Oluwaseun Adeyemi",
        rating: 5,
        date: "il y a 2 mois",
        comment:
          "Ce cours m'a aidé à obtenir un A1 en mathématiques BPEC. Les explications sont claires et les questions d'entraînement sont très similaires aux questions réelles de l'examen.",
        image: "/demoImages/jeff-kweba--qh8PWfA-OE-unsplash.jpg",
      },
      {
        name: "Chidinma Okonkwo",
        rating: 4,
        date: "il y a 3 mois",
        comment:
          "Cours très complet. L'instructeur explique les concepts complexes de manière simple. J'ai particulièrement apprécié les sections sur l'algèbre et la trigonométrie.",
        image: "/demoImages/shimo-yann-Wt9FwGDvp5E-unsplash.jpg",
      },
      {
        name: "Ibrahim Musa",
        rating: 5,
        date: "il y a 1 mois",
        comment:
          "Meilleur cours de mathématiques que j'ai suivi. La section des questions d'entraînement et des examens précédents est inestimable. Fortement recommandé pour tous les candidats BPEC.",
        image: "/demoImages/iwaria-inc-KqERg6JywDk-unsplash.jpg",
      },
    ],
  },
  // ... other courses
]

export default function CoursePage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id === params.id)

  if (!course) {
    return (
      <>
        <Navbar />
        <main className="container py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Cours non trouvé</h1>
            <p className="text-muted-foreground mt-2">Le cours que vous recherchez n'existe pas.</p>
            <Link href="/courses">
              <Button className="mt-4">Retour aux Cours</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-8">
            {/* Course Header */}
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {course.title}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {course.description}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviewCount} avis)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="text-muted-foreground">{course.studentCount.toLocaleString()} étudiants</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-muted-foreground">Dernière mise à jour {course.lastUpdated}</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="font-medium">
                  Commencer le Cours
                </Button>
                <Button size="lg" variant="outline" className="font-medium">
                  Ajouter aux Favoris
                </Button>
              </div>
            </div>

            {/* Course Preview */}
            <div className="flex items-center justify-center">
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Course Tabs */}
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Aperçu</TabsTrigger>
                <TabsTrigger value="curriculum">Programme</TabsTrigger>
                <TabsTrigger value="reviews">Avis</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Ce que vous allez apprendre</h3>
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
                  <h3 className="text-xl font-semibold">Description du Cours</h3>
                  <div className="mt-4 space-y-4">
                    <p>
                      Bienvenue dans le Cours Complet de Mathématiques BPEC ! Ce programme complet est conçu pour vous aider
                      à exceller dans votre examen de mathématiques BPEC. Que vous ayez des difficultés avec des sujets spécifiques ou
                      que vous visiez un A1, ce cours a tout ce dont vous avez besoin pour réussir.
                    </p>
                    <p>
                      Le cours est structuré pour suivre le programme de mathématiques BPEC, vous assurant de couvrir tous les
                      sujets requis. Chaque section comprend des explications vidéo détaillées, des exemples résolus et des questions
                      d'entraînement pour renforcer votre compréhension.
                    </p>
                    <p>
                      Vous aurez également accès aux questions des examens BPEC précédents avec des solutions étape par étape, vous aidant
                      à vous familiariser avec le format de l'examen et les types de questions. Nos astuces pour gagner du temps et nos
                      stratégies d'examen vous donneront la confiance nécessaire pour aborder n'importe quelle question.
                    </p>
                    <p>
                      À la fin de ce cours, vous aurez une solide compréhension de tous les concepts mathématiques requis
                      pour le BPEC, des compétences améliorées en résolution de problèmes et la capacité d'appliquer les principes
                      mathématiques à des situations réelles.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">Contenu du Cours</h3>
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
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold line-through text-muted-foreground">3 500 CFA</span>
                    <span className="text-3xl font-bold text-green-600">Gratuit</span>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full gap-2" disabled>
                      <ShoppingCart className="h-4 w-4" />
                      Bientôt Disponible
                    </Button>
                    <Link href="/waitlist">
                      <Button className="w-full">
                        Rejoindre la Liste d'Attente
                      </Button>
                    </Link>
                  </div>
                  <div className="text-sm text-center text-muted-foreground">Garantie de Remboursement de 30 Jours</div>
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
