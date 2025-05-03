"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart2, CheckCircle2, Clock, Trophy, XCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample competition results data
const competitionResults = {
  id: "c4",
  title: "JAMB Preparation Challenge",
  subject: "General",
  description: "Live competition covering all JAMB subjects",
  date: "May 10, 2023",
  totalParticipants: 342,
  userResult: {
    score: 80,
    points: 320,
    rank: 56,
    percentile: 84,
    correctAnswers: 16,
    incorrectAnswers: 4,
    certificate: true,
  },
  questions: [
    {
      id: "q1",
      text: "Which of the following is NOT a vector quantity?",
      options: [
        { id: "a", text: "Velocity" },
        { id: "b", text: "Force" },
        { id: "c", text: "Mass" },
        { id: "d", text: "Acceleration" },
      ],
      correctAnswer: "c",
      userAnswer: "c",
      isCorrect: true,
      timeTaken: 23, // seconds
    },
    {
      id: "q2",
      text: "The process by which plants make their own food is called:",
      options: [
        { id: "a", text: "Respiration" },
        { id: "b", text: "Photosynthesis" },
        { id: "c", text: "Transpiration" },
        { id: "d", text: "Digestion" },
      ],
      correctAnswer: "b",
      userAnswer: "b",
      isCorrect: true,
      timeTaken: 18, // seconds
    },
    {
      id: "q3",
      text: "Which of these elements has the highest electronegativity?",
      options: [
        { id: "a", text: "Sodium" },
        { id: "b", text: "Carbon" },
        { id: "c", text: "Chlorine" },
        { id: "d", text: "Fluorine" },
      ],
      correctAnswer: "d",
      userAnswer: "c",
      isCorrect: false,
      timeTaken: 32, // seconds
    },
    {
      id: "q4",
      text: "The quadratic formula for solving ax² + bx + c = 0 is:",
      options: [
        { id: "a", text: "x = (-b ± √(b² - 4ac)) / 2a" },
        { id: "b", text: "x = (-b ± √(b² + 4ac)) / 2a" },
        { id: "c", text: "x = (b ± √(b² - 4ac)) / 2a" },
        { id: "d", text: "x = (-b ± √(b² - 4ac)) / a" },
      ],
      correctAnswer: "a",
      userAnswer: "a",
      isCorrect: true,
      timeTaken: 25, // seconds
    },
    {
      id: "q5",
      text: "Which of the following is NOT a work by Chinua Achebe?",
      options: [
        { id: "a", text: "Things Fall Apart" },
        { id: "b", text: "Arrow of God" },
        { id: "c", text: "The Concubine" },
        { id: "d", text: "No Longer at Ease" },
      ],
      correctAnswer: "c",
      userAnswer: "c",
      isCorrect: true,
      timeTaken: 30, // seconds
    },
  ],
  topPerformers: [
    {
      rank: 1,
      name: "Oluwaseun Adeyemi",
      avatar: "/demoImages/jeff-kweba--qh8PWfA-OE-unsplash.jpg",
      school: "Federal Government College, Lagos",
      score: 95,
      points: 480,
    },
    {
      rank: 2,
      name: "Ibrahim Musa",
      avatar: "/demoImages/iwaria-inc-KqERg6JywDk-unsplash.jpg",
      school: "Government College, Kano",
      score: 90,
      points: 450,
    },
    {
      rank: 3,
      name: "Chioma Okafor",
      avatar: "/demoImages/shimo-yann-Wt9FwGDvp5E-unsplash.jpg",
      school: "Queens College, Enugu",
      score: 90,
      points: 430,
    },
  ],
  statistics: {
    averageScore: 65,
    highestScore: 95,
    lowestScore: 25,
    medianScore: 70,
    scoreDistribution: [
      { range: "0-20", count: 15 },
      { range: "21-40", count: 42 },
      { range: "41-60", count: 85 },
      { range: "61-80", count: 120 },
      { range: "81-100", count: 80 },
    ],
  },
}

export default function CompetitionResultsPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="space-y-6">
          {/* Back Button */}
          <div>
            <Link href="/quiz-competitions" className="inline-flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Competitions
            </Link>
          </div>

          {/* Results Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary">
                  {competitionResults.subject}
                </Badge>
                <Badge variant="secondary">Completed</Badge>
              </div>
              <h1 className="text-3xl font-bold mt-2">{competitionResults.title}</h1>
              <p className="text-muted-foreground mt-1">{competitionResults.description}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <p className="text-sm text-muted-foreground">Date: {competitionResults.date}</p>
              <p className="text-sm text-muted-foreground">{competitionResults.totalParticipants} participants</p>
            </div>
          </div>

          {/* Results Tabs */}
          <Tabs defaultValue="overview" className="space-y-6" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="questions">Questions</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="statistics">Statistics</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Performance</CardTitle>
                  <CardDescription>Detailed breakdown of your quiz results</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                    <span className="text-4xl font-bold text-primary">{competitionResults.userResult.score}%</span>
                    <span className="text-sm text-muted-foreground">Score</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                    <span className="text-4xl font-bold text-primary">{competitionResults.userResult.points}</span>
                    <span className="text-sm text-muted-foreground">Points</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                    <span className="text-4xl font-bold text-primary">#{competitionResults.userResult.rank}</span>
                    <span className="text-sm text-muted-foreground">Rank</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                    <span className="text-4xl font-bold text-primary">{competitionResults.userResult.percentile}%</span>
                    <span className="text-sm text-muted-foreground">Percentile</span>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Question Analysis</CardTitle>
                    <CardDescription>Breakdown of correct and incorrect answers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Correct Answers</span>
                      </div>
                      <span className="font-medium">{competitionResults.userResult.correctAnswers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span>Incorrect Answers</span>
                      </div>
                      <span className="font-medium">{competitionResults.userResult.incorrectAnswers}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Time Analysis</CardTitle>
                    <CardDescription>Average time spent per question</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">
                        {Math.round(
                          competitionResults.questions.reduce((acc, q) => acc + q.timeTaken, 0) /
                            competitionResults.questions.length
                        )}{" "}
                        seconds per question
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Questions Tab */}
            <TabsContent value="questions" className="space-y-4">
              {competitionResults.questions.map((question) => (
                <Card key={question.id} className={question.isCorrect ? "border-green-500" : "border-red-500"}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{question.text}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{question.timeTaken}s</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {question.options.map((option) => (
                        <div
                          key={option.id}
                          className={`p-3 rounded-lg ${
                            option.id === question.correctAnswer
                              ? "bg-green-500/10 border-green-500"
                              : option.id === question.userAnswer && !question.isCorrect
                              ? "bg-red-500/10 border-red-500"
                              : "bg-muted"
                          }`}
                        >
                          <span className="font-medium">{option.id.toUpperCase()}. </span>
                          {option.text}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Leaderboard Tab */}
            <TabsContent value="leaderboard" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Leading participants in this competition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {competitionResults.topPerformers.map((performer) => (
                    <div
                      key={performer.rank}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {performer.rank}
                        </div>
                        <div>
                          <p className="font-medium">{performer.name}</p>
                          <p className="text-sm text-muted-foreground">{performer.school}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{performer.points} pts</p>
                        <p className="text-sm text-muted-foreground">{performer.score}%</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Statistics Tab */}
            <TabsContent value="statistics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Score Distribution</CardTitle>
                  <CardDescription>How participants performed in this competition</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {competitionResults.statistics.scoreDistribution.map((range) => (
                      <div key={range.range} className="flex items-center gap-4">
                        <span className="w-16 text-sm">{range.range}</span>
                        <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary"
                            style={{
                              width: `${(range.count / competitionResults.totalParticipants) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="w-12 text-sm text-right">{range.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                      <span className="text-2xl font-bold">{competitionResults.statistics.averageScore}%</span>
                      <span className="text-sm text-muted-foreground">Average Score</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                      <span className="text-2xl font-bold">{competitionResults.statistics.highestScore}%</span>
                      <span className="text-sm text-muted-foreground">Highest Score</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                      <span className="text-2xl font-bold">{competitionResults.statistics.lowestScore}%</span>
                      <span className="text-sm text-muted-foreground">Lowest Score</span>
                    </div>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-primary/5">
                      <span className="text-2xl font-bold">{competitionResults.statistics.medianScore}%</span>
                      <span className="text-sm text-muted-foreground">Median Score</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
