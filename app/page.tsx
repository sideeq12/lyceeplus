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
    title: "Cours Complet de Mathématiques BPEC",
    instructor: "Dr. Jean Kaboré",
    price: 150000,
    rating: 4.8,
    reviewCount: 342,
    studentCount: 5243,
    image: "/demoImages/emmanuel-ikwuegbu-M-4lFg1Xfag-unsplash.jpg",
    category: "Mathématiques",
    level: "Intermediate" as const,
    featured: true,
  },
  {
    id: "2",
    title: "Langue Française pour BPEC & BAC",
    instructor: "Prof. Marie Ouédraogo",
    price: 125000,
    rating: 4.7,
    reviewCount: 287,
    studentCount: 4876,
    image: "/demoImages/charles-hembaor-xjrz_Gjyk8A-unsplash.jpg",
    category: "Français",
    level: "Beginner" as const,
  },
  {
    id: "3",
    title: "Maîtrise de la Physique : Préparation BPEC & BAC",
    instructor: "Prof. Aminata Sawadogo",
    price: 180000,
    rating: 4.9,
    reviewCount: 156,
    studentCount: 2345,
    image: "/demoImages/emmanuel-ikwuegbu-MUyq5MiVE2w-unsplash.jpg",
    category: "Physique",
    level: "Advanced" as const,
  },
  {
    id: "4",
    title: "Guide Complet de Chimie",
    instructor: "Dr. Boureima Kaboré",
    price: 165000,
    rating: 4.6,
    reviewCount: 203,
    studentCount: 3120,
    image: "/demoImages/dj-tears-plk-EAq5eTq1OXQ-unsplash.jpg",
    category: "Chimie",
    level: "Intermediate" as const,
  },
  {
    id: "5",
    title: "Biologie : Des Bases à l'Avancé",
    instructor: "Dr. Fatoumata Ouédraogo",
    price: 140000,
    rating: 4.7,
    reviewCount: 178,
    studentCount: 2890,
    image: "/demoImages/belinda-fewings-_CyyAj0QboY-unsplash.jpg",
    category: "Biologie",
    level: "Beginner" as const,
    featured: true,
  },
  {
    id: "6",
    title: "Histoire-Géographie pour BPEC",
    instructor: "Prof. Salam Sawadogo",
    price: 135000,
    rating: 4.5,
    reviewCount: 132,
    studentCount: 1876,
    image: "/demoImages/smart-araromi-SsowBguJYbY-unsplash.jpg",
    category: "Histoire-Géographie",
    level: "Intermediate" as const,
  },
  {
    id: "7",
    title: "Économie Simplifiée pour BAC",
    instructor: "Dr. Ibrahim Kaboré",
    price: 155000,
    rating: 4.8,
    reviewCount: 165,
    studentCount: 2450,
    image: "/demoImages/cin-ezFAew1dUJg-unsplash.jpg",
    category: "Économie",
    level: "Intermediate" as const,
  },
  {
    id: "8",
    title: "Philosophie : Guide Complet",
    instructor: "Prof. Awa Ouédraogo",
    price: 145000,
    rating: 4.6,
    reviewCount: 142,
    studentCount: 1980,
    image: "/demoImages/dahiru-wada-gunsau-UFyaTgd6UVE-unsplash.jpg",
    category: "Philosophie",
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
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Bienvenue sur LyceePlus
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Votre plateforme d'apprentissage en ligne pour les cours BEPC & BAC
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="font-medium" asChild>
                  <Link href="/courses">Explorer les Cours</Link>
                </Button>
                <Button size="lg" variant="outline" className="font-medium" asChild>
                  <Link href="/waitlist">S'inscrire Gratuitement</Link>
                </Button>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Rejoignez plus de 50 000 étudiants déjà en formation</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/demoImages/zach-wear-0XVJ5iMtRrQ-unsplash.jpg"
                alt="Étudiants en apprentissage"
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
                    <p className="text-sm text-muted-foreground">Cours</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">50K+</h3>
                    <p className="text-sm text-muted-foreground">Étudiants</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">15</h3>
                    <p className="text-sm text-muted-foreground">Matières</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <LayoutGrid className="h-8 w-8 text-primary mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">98%</h3>
                    <p className="text-sm text-muted-foreground">Taux de Réussite</p>
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
              <h2 className="text-3xl font-bold tracking-tight">Pourquoi choisir LyceePlus ?</h2>
              <Link href="/courses" className="flex items-center text-sm font-medium text-primary">
                Voir Tout
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="flex flex-wrap">
                <TabsTrigger value="all">Toutes les Matières</TabsTrigger>
                <TabsTrigger value="mathematics">Mathématiques</TabsTrigger>
                <TabsTrigger value="french">Français</TabsTrigger>
                <TabsTrigger value="sciences">Sciences</TabsTrigger>
                <TabsTrigger value="humanities">Humanités</TabsTrigger>
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
                    .filter((course) => course.category === "Mathématiques")
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="french" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses
                    .filter((course) => course.category === "Français")
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="sciences" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses
                    .filter((course) => ["Physique", "Chimie", "Biologie"].includes(course.category))
                    .map((course) => (
                      <CourseCard key={course.id} {...course} />
                    ))}
                </div>
              </TabsContent>
              <TabsContent value="humanities" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {courses
                    .filter((course) => ["Histoire-Géographie", "Philosophie", "Économie"].includes(course.category))
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
              <h2 className="text-3xl font-bold tracking-tight">Nos cours populaires</h2>
              <p className="text-muted-foreground">Trouvez le cours parfait pour votre préparation aux examens</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {[
                { name: "Mathématiques", icon: "📊" },
                { name: "Français", icon: "📝" },
                { name: "Physique", icon: "⚛️" },
                { name: "Chimie", icon: "🧪" },
                { name: "Biologie", icon: "🧬" },
                { name: "Histoire-Géographie", icon: "🏛️" },
                { name: "Économie", icon: "📈" },
                { name: "Philosophie", icon: "📚" },
                { name: "SVT", icon: "🌍" },
                { name: "Informatique", icon: "💻" },
                { name: "Comptabilité", icon: "🧮" },
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
              <h2 className="text-3xl font-bold tracking-tight">Ce que disent nos étudiants</h2>
              <p className="text-muted-foreground">Découvrez les témoignages d'étudiants qui ont réussi avec LyceePlus</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Aminata Traoré",
                  school: "Lycée Philippe Zinda Kaboré",
                  image: "/demoImages/jeff-kweba--qh8PWfA-OE-unsplash.jpg",
                  text: "LyceePlus m'a aidé à obtenir 18/20 en mathématiques au BAC. Les cours de mathématiques étaient particulièrement utiles !",
                },
                {
                  name: "Boubacar Ouédraogo",
                  school: "Lycée Bogodogo",
                  image: "/demoImages/shimo-yann-Wt9FwGDvp5E-unsplash.jpg",
                  text: "J'ai obtenu une mention Très Bien au BAC grâce à LyceePlus. Les explications vidéo ont rendu les sujets complexes faciles à comprendre.",
                },
                {
                  name: "Fatoumata Diallo",
                  school: "Lycée Nelson Mandela",
                  image: "/demoImages/iwaria-inc-KqERg6JywDk-unsplash.jpg",
                  text: "Les questions d'entraînement sur LyceePlus étaient très similaires à celles de l'examen réel. Je recommande vivement !",
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
            <h2 className="text-3xl font-bold tracking-tight">Rejoignez LyceePlus aujourd'hui</h2>
            <p className="mx-auto max-w-[600px]">
              Rejoignez des milliers d'étudiants qui ont transformé leurs performances académiques avec LyceePlus.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="secondary">
                Commencer Gratuitement
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent">
                Explorer les Cours
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
