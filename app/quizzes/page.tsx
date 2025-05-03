"use client"

import { useState } from "react"
import { Calendar, Clock, Trophy, Filter, SortAsc } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample quiz data
const weeklyQuizzes = [
  {
    id: "w1",
    title: "Mathematics Weekly Challenge",
    subject: "Mathematics",
    description: "Test your skills in Algebra, Geometry, and Calculus",
    date: "May 5, 2023",
    duration: "45 minutes",
    questions: 30,
  },
  {
    id: "w2",
    title: "Science Weekly Challenge",
    subject: "Science",
    description: "Test your knowledge in Physics, Chemistry, and Biology",
    date: "May 12, 2023",
    duration: "60 minutes",
    questions: 40,
  },
]

const dailyQuizzes = [
  {
    id: "d1",
    title: "Daily Mathematics Quiz",
    subject: "Mathematics",
    description: "Quick 15-minute quiz on basic mathematics concepts",
    date: "Today",
    duration: "15 minutes",
    questions: 10,
  },
]

const monthlyQuizzes = [
  {
    id: "m1",
    title: "Monthly JAMB Challenge",
    subject: "General",
    description: "Comprehensive quiz covering all JAMB subjects",
    date: "May 2023",
    duration: "120 minutes",
    questions: 100,
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
  const [activeTab, setActiveTab] = useState("weekly")

  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center">
            <div className="flex flex-col space-y-2">
              <h1 className="text-2xl font-semibold tracking-tight">Quiz</h1>
              <p className="text-sm text-muted-foreground">
                Testez vos connaissances avec nos quiz interactifs
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
          </div>

          {/* Quiz Tabs */}
          <Tabs defaultValue="weekly" className="space-y-6" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>

            {/* Weekly Quizzes */}
            <TabsContent value="weekly" className="space-y-4">
              {weeklyQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{quiz.title}</CardTitle>
                        <CardDescription>{quiz.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{quiz.subject}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.questions} questions</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/quizzes/${quiz.id}`}>Start Quiz</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            {/* Daily Quizzes */}
            <TabsContent value="daily" className="space-y-4">
              {dailyQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{quiz.title}</CardTitle>
                        <CardDescription>{quiz.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{quiz.subject}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.questions} questions</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/quizzes/${quiz.id}`}>Start Quiz</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>

            {/* Monthly Quizzes */}
            <TabsContent value="monthly" className="space-y-4">
              {monthlyQuizzes.map((quiz) => (
                <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{quiz.title}</CardTitle>
                        <CardDescription>{quiz.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{quiz.subject}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span>{quiz.questions} questions</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <Link href={`/quizzes/${quiz.id}`}>Start Quiz</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
