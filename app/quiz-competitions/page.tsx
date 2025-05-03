import Link from "next/link"
import Image from "next/image"
import { CalendarDays, Clock, Trophy, Users, ArrowRight, Timer, Filter, SortAsc } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

// Sample competition data
const upcomingCompetitions = [
  {
    id: "c1",
    title: "National Science Challenge",
    subject: "Science",
    description: "Test your knowledge against students nationwide in this science competition",
    startTime: "May 15, 2023 - 4:00 PM",
    duration: 45,
    participants: 0,
    maxParticipants: 500,
    questions: 30,
    pointsPerQuestion: 10,
    bonusPoints: 100,
    image: "/placeholder.svg?height=200&width=400",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "c2",
    title: "Mathematics Olympiad",
    subject: "Mathematics",
    description: "Compete in advanced mathematics problems with the best students in the country",
    startTime: "May 18, 2023 - 5:00 PM",
    duration: 60,
    participants: 0,
    maxParticipants: 300,
    questions: 25,
    pointsPerQuestion: 12,
    bonusPoints: 120,
    image: "/placeholder.svg?height=200&width=400",
    status: "upcoming",
    registrationOpen: true,
  },
  {
    id: "c3",
    title: "English Language Challenge",
    subject: "English",
    description: "Test your vocabulary, grammar, and comprehension skills in this competitive quiz",
    startTime: "May 20, 2023 - 3:30 PM",
    duration: 40,
    participants: 0,
    maxParticipants: 400,
    questions: 35,
    pointsPerQuestion: 8,
    bonusPoints: 80,
    image: "/placeholder.svg?height=200&width=400",
    status: "upcoming",
    registrationOpen: true,
  },
]

const liveCompetitions = [
  {
    id: "c4",
    title: "JAMB Preparation Challenge",
    subject: "General",
    description: "Live competition covering all JAMB subjects",
    startTime: "Live Now",
    duration: 60,
    participants: 342,
    maxParticipants: 500,
    questions: 40,
    pointsPerQuestion: 10,
    bonusPoints: 100,
    image: "/demoImages/mad-knoxx-deluxe-uU7xbrc0SX8-unsplash.jpg",
    status: "live",
    progress: 65, // percentage complete
    currentQuestion: 26,
    currentLeaders: [
      { name: "Oluwaseun A.", points: 245 },
      { name: "Ibrahim M.", points: 230 },
      { name: "Chioma O.", points: 215 },
    ],
  },
]

const pastCompetitions = [
  {
    id: "c5",
    title: "Biology Mastery Challenge",
    subject: "Biology",
    description: "Test your knowledge of biological concepts and theories",
    date: "May 1, 2023",
    participants: 423,
    winner: "Oluwaseun Adeyemi",
    winnerSchool: "Federal Government College, Lagos",
    winnerPoints: 480,
    image: "/demoImages/abdulmajid-sanusi-VfenC4twHA4-unsplash.jpg",
    status: "completed",
    yourRank: 56,
    yourPoints: 320,
  },
  {
    id: "c6",
    title: "Physics Challenge",
    subject: "Physics",
    description: "Competition on mechanics, electricity, and waves",
    date: "April 25, 2023",
    participants: 356,
    winner: "Ibrahim Musa",
    winnerSchool: "Government College, Kano",
    winnerPoints: 450,
    image: "/demoImages/charles-hembaor-MCGz5wV5wkc-unsplash.jpg",
    status: "completed",
    yourRank: 12,
    yourPoints: 410,
  },
]

export default function QuizCompetitionsPage() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">Concours LyceePlus</h1>
            <p className="text-sm text-muted-foreground">
              Participez à nos compétitions de quiz et gagnez des prix
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="mr-2 h-4 w-4" />
              Trier
            </Button>
          </div>

          {/* Hero Banner */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40">
              <Image
                src="/demoImages/james-sserumaga-bplo36RvpEQ-unsplash.jpg"
                alt="Quiz Competition"
                fill
                className="object-cover mix-blend-overlay"
              />
            </div>
            <div className="relative p-8 md:p-12 text-white">
              <div className="max-w-2xl space-y-4">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Featured Competition</Badge>
                <h2 className="text-2xl md:text-4xl font-bold">National Science Challenge</h2>
                <p className="text-white/90 text-lg">
                  Join hundreds of students nationwide in our biggest science competition of the year. Test your
                  knowledge, compete for prizes, and earn recognition!
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                    <CalendarDays className="h-4 w-4" />
                    <span className="text-sm">May 15, 2023 - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full">
                    <Trophy className="h-4 w-4" />
                    <span className="text-sm">₦50,000 in prizes</span>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Register Now
                </Button>
              </div>
            </div>
          </div>

          {/* Competition Tabs */}
          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="live">Live Now</TabsTrigger>
              <TabsTrigger value="past">Past Competitions</TabsTrigger>
            </TabsList>

            {/* Upcoming Competitions */}
            <TabsContent value="upcoming" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingCompetitions.map((competition) => (
                  <Card key={competition.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={competition.image || "/placeholder.svg"}
                        alt={competition.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-white/80 text-primary">
                          {competition.subject}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{competition.title}</CardTitle>
                      <CardDescription>{competition.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span>{competition.startTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{competition.duration} minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>Max {competition.maxParticipants} participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-muted-foreground" />
                          <span>
                            {competition.questions * competition.pointsPerQuestion + competition.bonusPoints} points
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/quiz-competitions/${competition.id}`} className="w-full">
                        <Button className="w-full">Register</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Live Competitions */}
            <TabsContent value="live" className="space-y-6">
              {liveCompetitions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {liveCompetitions.map((competition) => (
                    <Card key={competition.id} className="overflow-hidden border-primary/50">
                      <div className="relative aspect-video">
                        <Image
                          src={competition.image || "/placeholder.svg"}
                          alt={competition.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="bg-red-500/90 text-white px-4 py-2 rounded-full flex items-center gap-2 animate-pulse">
                            <div className="h-3 w-3 rounded-full bg-white"></div>
                            <span className="font-bold">LIVE NOW</span>
                          </div>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{competition.title}</CardTitle>
                            <CardDescription>{competition.description}</CardDescription>
                          </div>
                          <Badge variant="outline" className="border-primary text-primary">
                            {competition.subject}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2 space-y-4">
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>
                              Question {competition.currentQuestion}/{competition.questions}
                            </span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary" style={{ width: `${competition.progress}%` }}></div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-2">Current Leaders</h4>
                          <div className="space-y-2">
                            {competition.currentLeaders.map((leader, index) => (
                              <div key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded-md">
                                <div className="flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                                    {index + 1}
                                  </div>
                                  <span className="font-medium">{leader.name}</span>
                                </div>
                                <span className="font-bold text-primary">{leader.points} pts</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{competition.participants} participants</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Timer className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Time remaining: ~{Math.round(competition.duration * (1 - competition.progress / 100))} min
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/quiz-competitions/${competition.id}/join`} className="w-full">
                          <Button className="w-full">Join Competition</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="rounded-full bg-muted p-3 mb-4">
                      <Timer className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">No Live Competitions</h3>
                    <p className="text-muted-foreground mt-2">
                      There are no competitions happening right now. Check the upcoming tab for scheduled competitions.
                    </p>
                    <Button className="mt-4" variant="outline" asChild>
                      <Link href="#upcoming">View Upcoming Competitions</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Past Competitions */}
            <TabsContent value="past" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastCompetitions.map((competition) => (
                  <Card key={competition.id} className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={competition.image || "/placeholder.svg"}
                        alt={competition.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-white/80 text-primary">
                          {competition.subject}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle>{competition.title}</CardTitle>
                      <CardDescription>{competition.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 space-y-4">
                      <div className="text-sm text-muted-foreground">
                        Completed on {competition.date} • {competition.participants} participants
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Trophy className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Winner</p>
                            <p className="font-medium">{competition.winner}</p>
                            <p className="text-xs text-muted-foreground">{competition.winnerSchool}</p>
                          </div>
                          <div className="ml-auto text-right">
                            <p className="font-bold text-primary">{competition.winnerPoints} pts</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/5 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">Your Performance</p>
                            <p className="font-medium">Rank #{competition.yourRank}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{competition.yourPoints} pts</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/quiz-competitions/${competition.id}/results`} className="w-full">
                        <Button variant="outline" className="w-full">
                          View Results
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* How It Works Section */}
          <div className="bg-muted/30 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">How Quiz Competitions Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Register</h3>
                <p className="text-muted-foreground">
                  Browse upcoming competitions and register for the ones that interest you. Registration closes 30
                  minutes before the competition starts.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Compete</h3>
                <p className="text-muted-foreground">
                  Join the competition at the scheduled time. Answer multiple-choice questions within the time limit.
                  Points are awarded based on correct answers and speed.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Win Prizes</h3>
                <p className="text-muted-foreground">
                  Top performers win prizes and recognition. All participants receive certificates and points that
                  contribute to their ScholarBase ranking.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold">Ready to test your knowledge?</h2>
                <p className="mt-2">
                  Join our next competition and compete with students across Nigeria for prizes and recognition.
                </p>
              </div>
              <Button size="lg" variant="secondary" className="whitespace-nowrap" asChild>
                <Link href="#upcoming">
                  Browse Competitions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
