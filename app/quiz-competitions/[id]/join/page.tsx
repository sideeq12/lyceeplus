"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AlertCircle, CheckCircle, Clock, Users, XCircle, Trophy, Timer } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/navbar"

// Sample competition data
const competitionData = {
  id: "c4",
  title: "JAMB Preparation Challenge",
  subject: "General",
  description: "Live competition covering all JAMB subjects",
  startTime: "Live Now",
  duration: 60,
  totalParticipants: 342,
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
      timeLimit: 45, // seconds
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
      timeLimit: 45, // seconds
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
      timeLimit: 45, // seconds
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
      timeLimit: 45, // seconds
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
      timeLimit: 45, // seconds
    },
  ],
  leaderboard: [
    { name: "Oluwaseun A.", points: 245, position: 1 },
    { name: "Ibrahim M.", points: 230, position: 2 },
    { name: "Chioma O.", points: 215, position: 3 },
    { name: "Amina M.", points: 200, position: 4 },
    { name: "David O.", points: 185, position: 5 },
    { name: "Current User", points: 0, position: 342, isCurrentUser: true },
  ],
}

export default function JoinCompetitionPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [quizState, setQuizState] = useState<"waiting" | "in-progress" | "completed">("waiting")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(5) // 5 seconds countdown before start
  const [questionTimeLeft, setQuestionTimeLeft] = useState(0)
  const [results, setResults] = useState({
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    points: 0,
    rank: 0,
  })
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  // Countdown before quiz starts
  useEffect(() => {
    if (quizState !== "waiting") return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setQuizState("in-progress")
          setQuestionTimeLeft(competitionData.questions[0].timeLimit)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizState])

  // Timer for each question
  useEffect(() => {
    if (quizState !== "in-progress" || showFeedback) return

    const timer = setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleAnswer(competitionData.questions[currentQuestion].id, "")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizState, currentQuestion, showFeedback])

  const handleAnswer = (questionId: string, answerId: string) => {
    const question = competitionData.questions[currentQuestion]
    const isAnswerCorrect = answerId === question.correctAnswer

    // Calculate points based on correctness and time taken
    const timeTaken = question.timeLimit - questionTimeLeft
    const timeBonus = Math.max(0, Math.floor((questionTimeLeft / question.timeLimit) * 5))
    const questionPoints = isAnswerCorrect ? 10 + timeBonus : 0

    setAnswers((prev) => ({ ...prev, [questionId]: answerId }))
    setIsCorrect(isAnswerCorrect)
    setShowFeedback(true)

    // Update results
    setResults((prev) => ({
      ...prev,
      score: prev.score + (isAnswerCorrect ? 1 : 0),
      correctAnswers: prev.correctAnswers + (isAnswerCorrect ? 1 : 0),
      incorrectAnswers: prev.incorrectAnswers + (isAnswerCorrect ? 0 : 1),
      points: prev.points + questionPoints,
    }))

    // Show feedback for 2 seconds, then move to next question
    setTimeout(() => {
      setShowFeedback(false)

      if (currentQuestion < competitionData.questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1)
        setQuestionTimeLeft(competitionData.questions[currentQuestion + 1].timeLimit)
      } else {
        handleQuizEnd()
      }
    }, 2000)
  }

  const handleQuizEnd = () => {
    // Calculate final rank (simulated)
    const finalRank = Math.floor(Math.random() * 100) + 50
    setResults((prev) => ({ ...prev, rank: finalRank }))
    setQuizState("completed")

    // Redirect to results page after 5 seconds
    setTimeout(() => {
      router.push(`/quiz-competitions/${params.id}/results`)
    }, 5000)
  }

  const currentQuestionData = competitionData.questions[currentQuestion]

  return (
    <>
      <Navbar />
      <main className="container py-8">
        {quizState === "waiting" && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Card className="w-full max-w-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{competitionData.title}</CardTitle>
                <CardDescription>Get ready! The competition is about to start.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="text-6xl font-bold text-primary mb-2">{timeLeft}</div>
                  <p className="text-muted-foreground">Starting in seconds...</p>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Important</AlertTitle>
                  <AlertDescription>
                    Make sure you're in a quiet environment. Each question has a time limit of 45 seconds.
                  </AlertDescription>
                </Alert>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{competitionData.totalParticipants} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{competitionData.questions.length} questions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {quizState === "in-progress" && currentQuestionData && (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Quiz Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">{competitionData.title}</h1>
                <p className="text-muted-foreground">
                  Question {currentQuestion + 1} of {competitionData.questions.length}
                </p>
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Timer className="h-5 w-5 text-muted-foreground" />
                <span className={questionTimeLeft < 10 ? "text-destructive animate-pulse" : ""}>
                  {questionTimeLeft}s
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <Progress value={((currentQuestion + 1) / competitionData.questions.length) * 100} className="h-2" />

            {/* Question Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  <span className="text-primary mr-2">Q{currentQuestion + 1}.</span>
                  {currentQuestionData.text}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {currentQuestionData.options.map((option) => (
                    <button
                      key={option.id}
                      className={`flex w-full items-center space-x-2 rounded-md border p-3 text-left ${
                        showFeedback && option.id === currentQuestionData.correctAnswer
                          ? "border-green-500 bg-green-500/10"
                          : showFeedback &&
                              option.id === answers[currentQuestionData.id] &&
                              option.id !== currentQuestionData.correctAnswer
                            ? "border-red-500 bg-red-500/10"
                            : "hover:bg-muted/50"
                      }`}
                      onClick={() => !showFeedback && handleAnswer(currentQuestionData.id, option.id)}
                      disabled={showFeedback}
                    >
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                          showFeedback && option.id === currentQuestionData.correctAnswer
                            ? "border-green-500 bg-green-500 text-white"
                            : showFeedback &&
                                option.id === answers[currentQuestionData.id] &&
                                option.id !== currentQuestionData.correctAnswer
                              ? "border-red-500 bg-red-500 text-white"
                              : "border-muted-foreground"
                        }`}
                      >
                        {option.id.toUpperCase()}
                      </div>
                      <span className="font-medium">{option.text}</span>

                      {showFeedback && option.id === currentQuestionData.correctAnswer && (
                        <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
                      )}
                      {showFeedback &&
                        option.id === answers[currentQuestionData.id] &&
                        option.id !== currentQuestionData.correctAnswer && (
                          <XCircle className="ml-auto h-5 w-5 text-red-500" />
                        )}
                    </button>
                  ))}
                </div>
              </CardContent>
              {showFeedback && (
                <CardFooter className="bg-muted/30">
                  <div className="w-full text-center">
                    {isCorrect ? (
                      <p className="text-green-500 font-medium">
                        Correct! +{10 + Math.max(0, Math.floor((questionTimeLeft / currentQuestionData.timeLimit) * 5))}{" "}
                        points
                      </p>
                    ) : (
                      <p className="text-red-500 font-medium">
                        Incorrect! The correct answer is Option {currentQuestionData.correctAnswer.toUpperCase()}
                      </p>
                    )}
                  </div>
                </CardFooter>
              )}
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 flex flex-col items-center">
                  <p className="text-xs text-muted-foreground">Score</p>
                  <p className="text-xl font-bold">
                    {results.correctAnswers}/{currentQuestion + 1}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center">
                  <p className="text-xs text-muted-foreground">Points</p>
                  <p className="text-xl font-bold text-primary">{results.points}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 flex flex-col items-center">
                  <p className="text-xs text-muted-foreground">Questions Left</p>
                  <p className="text-xl font-bold">{competitionData.questions.length - currentQuestion - 1}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {quizState === "completed" && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Card className="w-full max-w-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Competition Completed!</CardTitle>
                <CardDescription>Great job! Here's how you performed.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-primary mb-2">{results.points}</div>
                  <p className="text-lg">Total Points</p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Correct</p>
                    <p className="text-xl font-semibold text-green-500">{results.correctAnswers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Incorrect</p>
                    <p className="text-xl font-semibold text-red-500">{results.incorrectAnswers}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rank</p>
                    <p className="text-xl font-semibold">#{results.rank}</p>
                  </div>
                </div>

                <Alert className="bg-primary/10 border-primary/20">
                  <Trophy className="h-4 w-4 text-primary" />
                  <AlertTitle>Redirecting to Results</AlertTitle>
                  <AlertDescription>You'll be redirected to the full results page in a few seconds...</AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </>
  )
}
