import Link from "next/link"
import { CalendarDays, Clock, Trophy, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

// Sample quiz data
const weeklyQuizzes = [
  {
    id: "w1",
    title: "Mathematics Weekly Challenge",
    subject: "Mathematics",
    description: "Test your skills in Algebra, Geometry, and Calculus",
    questions: 20,
    duration: 30,
    participants: 1245,
    startDate: "May 5, 2023",
    endDate: "May 11, 2023",
    status: "active",
    points: 100,
  },
  {
    id: "w2",
    title: "English Language Quiz",
    subject: "English",
    description: "Vocabulary, Grammar, and Comprehension test",
    questions: 25,
    duration: 35,
    participants: 980,
    startDate: "May 5, 2023",
    endDate: "May 11, 2023",
    status: "active",
    points: 100,
  },
  {
    id: "w3",
    title: "Physics Weekly Test",
    subject: "Physics",
    description: "Mechanics, Electricity, and Waves concepts",
    questions: 15,
    duration: 25,
    participants: 756,
    startDate: "May 5, 2023",
    endDate: "May 11, 2023",
    status: "active",
    points: 100,
  },
  {
    id: "w4",
    title: "Chemistry Challenge",
    subject: "Chemistry",
    description: "Periodic Table, Chemical Reactions, and Organic Chemistry",
    questions: 20,
    duration: 30,
    participants: 689,
    startDate: "April 28, 2023",
    endDate: "May 4, 2023",
    status: "completed",
    points: 100,
  },
]

const monthlyQuizzes = [
  {
    id: "m1",
    title: "JAMB Preparation Grand Quiz",
    subject: "General",
    description: "Comprehensive test covering all JAMB subjects",
    questions: 50,
    duration: 60,
    participants: 3567,
    startDate: "May 1, 2023",
    endDate: "May 31, 2023",
    status: "active",
    points: 300,
  },
  {
    id: "m2",
    title: "Science Monthly Championship",
    subject: "Science",
    description: "Biology, Chemistry, and Physics combined challenge",
    questions: 45,
    duration: 60,
    participants: 2890,
    startDate: "May 1, 2023",
    endDate: "May 31, 2023",
    status: "active",
    points: 250,
  },
  {
    id: "m3",
    title: "Mathematics Master Challenge",
    subject: "Mathematics",
    description: "Advanced mathematics problems for top performers",
    questions: 30,
    duration: 45,
    participants: 1765,
    startDate: "May 1, 2023",
    endDate: "May 31, 2023",
    status: "active",
    points: 250,
  },
  {
    id: "m4",
    title: "Arts & Humanities Challenge",
    subject: "Arts",
    description: "Literature, Government, and History comprehensive test",
    questions: 40,
    duration: 50,
    participants: 1432,
    startDate: "April 1, 2023",
    endDate: "April 30, 2023",
    status: "completed",
    points: 250,
  },
]

// Sample personal stats
const personalStats = {
  totalQuizzesTaken: 12,
  totalPoints: 850,
  ranking: {
    national: 156,
    state: 8,
  },
  completionRate: 92,
  averageScore: 78,
  badges: ["Quick Thinker", "Math Wizard", "Science Expert"],
  recentQuizzes: [
    {
      id: "rq1",
      title: "Biology Weekly Quiz",
      date: "April 28, 2023",
      score: 85,
      points: 85,
    },
    {
      id: "rq2",
      title: "JAMB Practice Test",
      date: "April 15, 2023",
      score: 92,
      points: 276,
    },
    {
      id: "rq3",
      title: "English Language Challenge",
      date: "April 7, 2023",
      score: 78,
      points: 78,
    },
  ],
}

export default function QuizzesPage() {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold">ScholarBase Quizzes</h1>
            <p className="text-muted-foreground mt-2">
              Test your knowledge, compete with peers, and track your progress with our weekly and monthly quizzes
            </p>
          </div>

          {/* Personal Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Your Quiz Performance</CardTitle>
              <CardDescription>Track your progress and rankings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <p className="text-2xl font-bold text-primary">{personalStats.totalPoints}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">National Rank</p>
                  <p className="text-2xl font-bold">#{personalStats.ranking.national}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">State Rank</p>
                  <p className="text-2xl font-bold">#{personalStats.ranking.state}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Quizzes Taken</p>
                  <p className="text-2xl font-bold">{personalStats.totalQuizzesTaken}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-3">Recent Quiz Results</h3>
                <div className="space-y-3">
                  {personalStats.recentQuizzes.map((quiz) => (
                    <div key={quiz.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{quiz.title}</p>
                        <p className="text-sm text-muted-foreground">{quiz.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{quiz.score}%</p>
                        <p className="text-sm text-primary">{quiz.points} points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {personalStats.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary">
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>

          {/* Quiz Tabs */}
          <Tabs defaultValue="weekly" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="weekly">Weekly Quizzes</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Challenges</TabsTrigger>
            </TabsList>

            {/* Weekly Quizzes */}
            <TabsContent value="weekly" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Weekly Quizzes</h2>
                <Link href="/quizzes/leaderboard">
                  <Button variant="outline" className="gap-2">
                    <Trophy className="h-4 w-4" />
                    View Leaderboard
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weeklyQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant={quiz.status === "active" ? "default" : "secondary"}>
                          {quiz.status === "active" ? "Active" : "Completed"}
                        </Badge>
                        <Badge variant="outline">{quiz.subject}</Badge>
                      </div>
                      <CardTitle className="mt-2">{quiz.title}</CardTitle>
                      <CardDescription>{quiz.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{quiz.duration} minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{quiz.participants.toLocaleString()} participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-muted-foreground" />
                          <span>{quiz.points} points</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span>Ends {quiz.endDate}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      {quiz.status === "active" ? (
                        <Link href={`/quizzes/${quiz.id}`} className="w-full">
                          <Button className="w-full">Take Quiz</Button>
                        </Link>
                      ) : (
                        <Link href={`/quizzes/${quiz.id}/results`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Results
                          </Button>
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Monthly Quizzes */}
            <TabsContent value="monthly" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Monthly Challenges</h2>
                <Link href="/quizzes/leaderboard?type=monthly">
                  <Button variant="outline" className="gap-2">
                    <Trophy className="h-4 w-4" />
                    View Leaderboard
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthlyQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge variant={quiz.status === "active" ? "default" : "secondary"}>
                          {quiz.status === "active" ? "Active" : "Completed"}
                        </Badge>
                        <Badge variant="outline">{quiz.subject}</Badge>
                      </div>
                      <CardTitle className="mt-2">{quiz.title}</CardTitle>
                      <CardDescription>{quiz.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{quiz.duration} minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{quiz.participants.toLocaleString()} participants</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-muted-foreground" />
                          <span>{quiz.points} points</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span>Ends {quiz.endDate}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      {quiz.status === "active" ? (
                        <Link href={`/quizzes/${quiz.id}`} className="w-full">
                          <Button className="w-full">Take Quiz</Button>
                        </Link>
                      ) : (
                        <Link href={`/quizzes/${quiz.id}/results`} className="w-full">
                          <Button variant="outline" className="w-full">
                            View Results
                          </Button>
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
