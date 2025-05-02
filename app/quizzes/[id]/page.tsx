"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AlertCircle, ArrowLeft, CheckCircle, Clock, HelpCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/navbar"

// Sample quiz data
const quizData = {
  id: "w1",
  title: "Mathematics Weekly Challenge",
  subject: "Mathematics",
  description: "Test your skills in Algebra, Geometry, and Calculus",
  instructions: [
    "You have 30 minutes to complete this quiz",
    "Each question has only one correct answer",
    "You cannot go back to previous questions",
    "Points are awarded based on correct answers and time taken",
  ],
  totalQuestions: 20,
  duration: 30, // in minutes
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
    },
  ],
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [quizState, setQuizState] = useState<"intro" | "in-progress" | "review" | "completed">("intro")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(quizData.duration * 60) // in seconds
  const [results, setResults] = useState({
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    points: 0,
    timeTaken: 0,
  })

  // Timer effect
  useEffect(() => {
    if (quizState !== "in-progress") return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleQuizEnd()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizState])

  const startQuiz = () => {
    setQuizState("in-progress")
    setCurrentQuestion(0)
    setAnswers({})
    setTimeLeft(quizData.duration * 60)
  }

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }))
  }

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      handleQuizEnd()
    }
  }

  const handleQuizEnd = () => {
    // Calculate results
    const timeTaken = quizData.duration * 60 - timeLeft
    let correctCount = 0

    quizData.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++
      }
    })

    const score = Math.round((correctCount / quizData.questions.length) * 100)

    // Calculate points - base points plus time bonus
    const basePoints = Math.round((correctCount / quizData.questions.length) * 100)
    const timeBonus = Math.round(timeLeft > 0 ? (timeLeft / (quizData.duration * 60)) * 20 : 0)
    const totalPoints = basePoints + timeBonus

    setResults({
      score,
      correctAnswers: correctCount,
      incorrectAnswers: quizData.questions.length - correctCount,
      points: totalPoints,
      timeTaken,
    })

    setQuizState("completed")
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const currentQuestionData = quizData.questions[currentQuestion]

  return (
    <>
      <Navbar />
      <main className="container py-8">
        {quizState === "intro" && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Link href="/quizzes" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
                <Badge>{quizData.subject}</Badge>
              </div>
              <CardTitle className="text-2xl mt-4">{quizData.title}</CardTitle>
              <CardDescription>{quizData.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Quiz Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Questions</p>
                    <p className="font-medium">{quizData.totalQuestions}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Time Limit</p>
                    <p className="font-medium">{quizData.duration} minutes</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Points</p>
                    <p className="font-medium">100 + time bonus</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Instructions</h3>
                <ul className="space-y-2">
                  {quizData.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Once you start the quiz, you cannot pause or exit until you complete all questions or the time runs
                  out.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button onClick={startQuiz} className="w-full">
                Start Quiz
              </Button>
            </CardFooter>
          </Card>
        )}

        {quizState === "in-progress" && currentQuestionData && (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Quiz Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">{quizData.title}</h1>
                <p className="text-muted-foreground">
                  Question {currentQuestion + 1} of {quizData.questions.length}
                </p>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className={timeLeft < 60 ? "text-destructive animate-pulse" : ""}>{formatTime(timeLeft)}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <Progress value={((currentQuestion + 1) / quizData.questions.length) * 100} className="h-2" />

            {/* Question Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  <span className="text-primary mr-2">Q{currentQuestion + 1}.</span>
                  {currentQuestionData.text}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={answers[currentQuestionData.id] || ""}
                  onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}
                >
                  <div className="space-y-3">
                    {currentQuestionData.options.map((option) => (
                      <div
                        key={option.id}
                        className={`flex items-center space-x-2 rounded-md border p-3 ${
                          answers[currentQuestionData.id] === option.id ? "border-primary bg-primary/5" : ""
                        }`}
                      >
                        <RadioGroupItem value={option.id} id={`option-${option.id}`} />
                        <label
                          htmlFor={`option-${option.id}`}
                          className="flex-1 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.text}
                        </label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  disabled={currentQuestion === 0}
                  onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                  className="invisible"
                >
                  Previous
                </Button>
                <Button onClick={handleNext} disabled={!answers[currentQuestionData.id]}>
                  {currentQuestion < quizData.questions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {quizState === "completed" && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              <CardDescription>Here's how you performed on {quizData.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Display */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-primary/20">
                  <div
                    className="absolute inset-0 rounded-full border-8 border-primary"
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${
                        50 + 50 * Math.sin((results.score / 100) * 2 * Math.PI)
                      }% ${50 - 50 * Math.cos((results.score / 100) * 2 * Math.PI)}%, ${
                        results.score <= 25 ? "50% 50%" : ""
                      }${results.score > 25 && results.score <= 50 ? `100% 50%, 100% 0%, 50% 0%` : ""}${
                        results.score > 50 && results.score <= 75 ? `100% 100%, 100% 0%, 50% 0%` : ""
                      }${results.score > 75 ? `0% 100%, 0% 0%, 50% 0%` : ""})`,
                    }}
                  />
                  <span className="text-3xl font-bold">{results.score}%</span>
                </div>
                <p className="mt-4 text-xl font-semibold text-primary">{results.points} points earned!</p>
              </div>

              {/* Results Summary */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-muted-foreground text-sm">Correct</p>
                  <p className="text-xl font-semibold text-green-500">{results.correctAnswers}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-muted-foreground text-sm">Incorrect</p>
                  <p className="text-xl font-semibold text-red-500">{results.incorrectAnswers}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-muted-foreground text-sm">Time Taken</p>
                  <p className="text-xl font-semibold">{formatTime(results.timeTaken)}</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-muted-foreground text-sm">Time Bonus</p>
                  <p className="text-xl font-semibold">+{results.points - results.score} pts</p>
                </div>
              </div>

              <Separator />

              {/* Performance Analysis */}
              <div>
                <h3 className="font-semibold mb-3">Performance Analysis</h3>
                <div className="space-y-3">
                  {results.score >= 80 ? (
                    <Alert className="bg-green-500/10 border-green-500/20">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <AlertTitle>Excellent Performance!</AlertTitle>
                      <AlertDescription>
                        You've demonstrated a strong understanding of the subject matter. Keep up the great work!
                      </AlertDescription>
                    </Alert>
                  ) : results.score >= 60 ? (
                    <Alert className="bg-primary/10 border-primary/20">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <AlertTitle>Good Performance</AlertTitle>
                      <AlertDescription>
                        You've shown a good grasp of the concepts. With a bit more practice, you'll excel!
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert className="bg-amber-500/10 border-amber-500/20">
                      <HelpCircle className="h-4 w-4 text-amber-500" />
                      <AlertTitle>Room for Improvement</AlertTitle>
                      <AlertDescription>
                        You might need to review some concepts. Don't worry, practice makes perfect!
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => router.push("/quizzes")}>
                Back to Quizzes
              </Button>
              <Button className="w-full sm:w-auto" onClick={() => router.push("/quizzes/leaderboard")}>
                View Leaderboard
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </>
  )
}
