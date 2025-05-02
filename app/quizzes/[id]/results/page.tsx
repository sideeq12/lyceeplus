import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Download, Trophy, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

// Sample quiz result data
const quizResult = {
  id: "w1",
  title: "Mathematics Weekly Challenge",
  subject: "Mathematics",
  description: "Test your skills in Algebra, Geometry, and Calculus",
  date: "May 5, 2023",
  totalParticipants: 1245,
  averageScore: 68,
  topScore: 98,
  userResult: {
    score: 85,
    points: 92,
    timeTaken: "22:15",
    rank: 56,
    correctAnswers: 17,
    incorrectAnswers: 3,
    skipped: 0,
    certificate: true,
  },
  questions: [
    {
      id: "q1",
      text: "If x² + y² = 25 and x + y = 7, what is the value of xy?",
      options: [
        { id: "a", text: "12" },
        { id: "b", text: "24" },
        { id: "c", text: "10" },
        { id: "d", text: "16" },
      ],
      correctAnswer: "b",
      userAnswer: "b",
      isCorrect: true,
    },
    {
      id: "q2",
      text: "Simplify: (3x² - x - 2) ÷ (x - 1)",
      options: [
        { id: "a", text: "3x + 2" },
        { id: "b", text: "3x - 2" },
        { id: "c", text: "3x + 1" },
        { id: "d", text: "3x - 1" },
      ],
      correctAnswer: "a",
      userAnswer: "a",
      isCorrect: true,
    },
    {
      id: "q3",
      text: "What is the derivative of f(x) = x³ - 4x² + 5x - 2?",
      options: [
        { id: "a", text: "3x² - 8x + 5" },
        { id: "b", text: "3x² - 4x + 5" },
        { id: "c", text: "3x² - 8x - 5" },
        { id: "d", text: "x³ - 8x + 5" },
      ],
      correctAnswer: "a",
      userAnswer: "c",
      isCorrect: false,
    },
    {
      id: "q4",
      text: "In a triangle ABC, if angle A = 60°, angle B = 45°, what is angle C?",
      options: [
        { id: "a", text: "75°" },
        { id: "b", text: "65°" },
        { id: "c", text: "85°" },
        { id: "d", text: "55°" },
      ],
      correctAnswer: "a",
      userAnswer: "a",
      isCorrect: true,
    },
    {
      id: "q5",
      text: "What is the area of a circle with radius 7 cm?",
      options: [
        { id: "a", text: "49π cm²" },
        { id: "b", text: "14π cm²" },
        { id: "c", text: "154 cm²" },
        { id: "d", text: "21π cm²" },
      ],
      correctAnswer: "a",
      userAnswer: "b",
      isCorrect: false,
    },
  ],
  topPerformers: [
    {
      rank: 1,
      name: "Oluwaseun Adeyemi",
      avatar: "/demoImages/jeff-kweba--qh8PWfA-OE-unsplash.jpg",
      school: "Federal Government College, Lagos",
      score: 98,
      points: 112,
      timeTaken: "18:45",
    },
    {
      rank: 2,
      name: "Chioma Okafor",
      avatar: "/demoImages/shimo-yann-Wt9FwGDvp5E-unsplash.jpg",
      school: "Queens College, Enugu",
      score: 95,
      points: 108,
      timeTaken: "19:20",
    },
    {
      rank: 3,
      name: "Ibrahim Musa",
      avatar: "/demoImages/iwaria-inc-KqERg6JywDk-unsplash.jpg",
      school: "Government College, Kano",
      score: 95,
      points: 105,
      timeTaken: "21:10",
    },
  ],
}

export default function QuizResultsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="space-y-6">
          {/* Page Header */}
          <div className="flex items-center gap-4">
            <Link href="/quizzes" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{quizResult.title} - Results</h1>
              <p className="text-muted-foreground">Completed on {quizResult.date}</p>
            </div>
          </div>

          {/* Results Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* User Performance Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Your Performance</CardTitle>
                <CardDescription>
                  You scored {quizResult.userResult.score}% and earned {quizResult.userResult.points} points
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Score Display */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-primary/20">
                    <div
                      className="absolute inset-0 rounded-full border-8 border-primary"
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${
                          50 + 50 * Math.sin((quizResult.userResult.score / 100) * 2 * Math.PI)
                        }% ${50 - 50 * Math.cos((quizResult.userResult.score / 100) * 2 * Math.PI)}%, ${
                          quizResult.userResult.score <= 25 ? "50% 50%" : ""
                        }${
                          quizResult.userResult.score > 25 && quizResult.userResult.score <= 50
                            ? `100% 50%, 100% 0%, 50% 0%`
                            : ""
                        }${
                          quizResult.userResult.score > 50 && quizResult.userResult.score <= 75
                            ? `100% 100%, 100% 0%, 50% 0%`
                            : ""
                        }${quizResult.userResult.score > 75 ? `0% 100%, 0% 0%, 50% 0%` : ""})`,
                      }}
                    />
                    <span className="text-3xl font-bold">{quizResult.userResult.score}%</span>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Points Earned</p>
                        <p className="text-xl font-bold text-primary">{quizResult.userResult.points}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Your Rank</p>
                        <p className="text-xl font-bold">#{quizResult.userResult.rank}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time Taken</p>
                        <p className="text-xl font-bold">{quizResult.userResult.timeTaken}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Participants</p>
                        <p className="text-xl font-bold">{quizResult.totalParticipants.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Answer Summary */}
                <div>
                  <h3 className="font-semibold mb-3">Answer Summary</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Correct</p>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <p className="text-xl font-semibold text-green-500">{quizResult.userResult.correctAnswers}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-red-500/10 rounded-lg">
                      <p className="text-sm text-muted-foreground">Incorrect</p>
                      <div className="flex items-center justify-center gap-1 mt-1">
                        <XCircle className="h-4 w-4 text-red-500" />
                        <p className="text-xl font-semibold text-red-500">{quizResult.userResult.incorrectAnswers}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">Skipped</p>
                      <p className="text-xl font-semibold">{quizResult.userResult.skipped}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Performance Comparison */}
                <div>
                  <h3 className="font-semibold mb-3">Performance Comparison</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm">Your Score</p>
                        <p className="text-sm font-medium">{quizResult.userResult.score}%</p>
                      </div>
                      <Progress value={quizResult.userResult.score} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm">Average Score</p>
                        <p className="text-sm font-medium">{quizResult.averageScore}%</p>
                      </div>
                      <Progress value={quizResult.averageScore} className="h-2 bg-muted" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm">Top Score</p>
                        <p className="text-sm font-medium">{quizResult.topScore}%</p>
                      </div>
                      <Progress value={quizResult.topScore} className="h-2 bg-muted" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                {quizResult.userResult.certificate && (
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" />
                    Download Certificate
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Top Performers Card */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>The highest scoring students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quizResult.topPerformers.map((performer) => (
                  <div key={performer.rank} className="flex items-center gap-3 p-3 rounded-lg border">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                      {performer.rank}
                    </div>
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src={performer.avatar || "/placeholder.svg"}
                        alt={performer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{performer.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{performer.school}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{performer.points} pts</p>
                      <p className="text-xs text-muted-foreground">{performer.score}%</p>
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <Link href={`/quizzes/leaderboard?quiz=${params.id}`}>
                    <Button variant="outline" className="w-full">
                      View Full Leaderboard
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Results */}
          <Card>
            <CardHeader>
              <CardTitle>Question Analysis</CardTitle>
              <CardDescription>Review your answers and see the correct solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="all">All Questions</TabsTrigger>
                  <TabsTrigger value="correct">Correct ({quizResult.userResult.correctAnswers})</TabsTrigger>
                  <TabsTrigger value="incorrect">Incorrect ({quizResult.userResult.incorrectAnswers})</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-6">
                  {quizResult.questions.map((question, index) => (
                    <div key={question.id} className="space-y-3 p-4 border rounded-lg">
                      <div className="flex items-start gap-2">
                        <div
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            question.isCorrect ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                          }`}
                        >
                          {question.isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <span className="text-muted-foreground">Q{index + 1}.</span> {question.text}
                          </h3>
                        </div>
                      </div>

                      <div className="ml-8 space-y-2">
                        {question.options.map((option) => (
                          <div
                            key={option.id}
                            className={`p-3 rounded-md ${
                              option.id === question.correctAnswer && option.id === question.userAnswer
                                ? "bg-green-500/10 border border-green-500/20"
                                : option.id === question.correctAnswer
                                  ? "bg-green-500/10 border border-green-500/20"
                                  : option.id === question.userAnswer
                                    ? "bg-red-500/10 border border-red-500/20"
                                    : "bg-muted/40 border"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium ${
                                  option.id === question.correctAnswer
                                    ? "bg-green-500 text-white"
                                    : option.id === question.userAnswer && !question.isCorrect
                                      ? "bg-red-500 text-white"
                                      : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {option.id.toUpperCase()}
                              </div>
                              <span
                                className={`${
                                  option.id === question.correctAnswer
                                    ? "font-medium text-green-500"
                                    : option.id === question.userAnswer && !question.isCorrect
                                      ? "font-medium text-red-500"
                                      : ""
                                }`}
                              >
                                {option.text}
                              </span>
                            </div>
                          </div>
                        ))}

                        {!question.isCorrect && (
                          <div className="mt-2 p-3 bg-primary/5 rounded-md">
                            <p className="text-sm font-medium">
                              Correct Answer: Option {question.correctAnswer.toUpperCase()}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="correct" className="space-y-6">
                  {quizResult.questions
                    .filter((q) => q.isCorrect)
                    .map((question, index) => (
                      <div key={question.id} className="space-y-3 p-4 border rounded-lg">
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              <span className="text-muted-foreground">Q{index + 1}.</span> {question.text}
                            </h3>
                          </div>
                        </div>

                        <div className="ml-8 space-y-2">
                          {question.options.map((option) => (
                            <div
                              key={option.id}
                              className={`p-3 rounded-md ${
                                option.id === question.correctAnswer
                                  ? "bg-green-500/10 border border-green-500/20"
                                  : "bg-muted/40 border"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium ${
                                    option.id === question.correctAnswer
                                      ? "bg-green-500 text-white"
                                      : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {option.id.toUpperCase()}
                                </div>
                                <span
                                  className={`${
                                    option.id === question.correctAnswer ? "font-medium text-green-500" : ""
                                  }`}
                                >
                                  {option.text}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="incorrect" className="space-y-6">
                  {quizResult.questions
                    .filter((q) => !q.isCorrect)
                    .map((question, index) => (
                      <div key={question.id} className="space-y-3 p-4 border rounded-lg">
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                            <XCircle className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-medium">
                              <span className="text-muted-foreground">Q{index + 1}.</span> {question.text}
                            </h3>
                          </div>
                        </div>

                        <div className="ml-8 space-y-2">
                          {question.options.map((option) => (
                            <div
                              key={option.id}
                              className={`p-3 rounded-md ${
                                option.id === question.correctAnswer
                                  ? "bg-green-500/10 border border-green-500/20"
                                  : option.id === question.userAnswer
                                    ? "bg-red-500/10 border border-red-500/20"
                                    : "bg-muted/40 border"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium ${
                                    option.id === question.correctAnswer
                                      ? "bg-green-500 text-white"
                                      : option.id === question.userAnswer
                                        ? "bg-red-500 text-white"
                                        : "bg-muted text-muted-foreground"
                                  }`}
                                >
                                  {option.id.toUpperCase()}
                                </div>
                                <span
                                  className={`${
                                    option.id === question.correctAnswer
                                      ? "font-medium text-green-500"
                                      : option.id === question.userAnswer
                                        ? "font-medium text-red-500"
                                        : ""
                                  }`}
                                >
                                  {option.text}
                                </span>
                              </div>
                            </div>
                          ))}

                          <div className="mt-2 p-3 bg-primary/5 rounded-md">
                            <p className="text-sm font-medium">
                              Correct Answer: Option {question.correctAnswer.toUpperCase()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1" asChild>
              <Link href="/quizzes">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Quizzes
              </Link>
            </Button>
            <Button className="flex-1" asChild>
              <Link href="/quizzes/leaderboard">
                <Trophy className="mr-2 h-4 w-4" />
                View Leaderboard
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
