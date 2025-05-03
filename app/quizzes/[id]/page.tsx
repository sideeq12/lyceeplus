"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Clock, CheckCircle2, XCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample quiz data
const quizData = {
  id: "w1",
  title: "Mathematics Weekly Challenge",
  subject: "Mathematics",
  description: "Test your skills in Algebra, Geometry, and Calculus",
  duration: 45, // in minutes
  questions: [
    {
      id: 1,
      question: "What is the value of x in the equation 2x + 5 = 15?",
      options: ["5", "10", "15", "20"],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "What is the area of a circle with radius 7cm? (π = 22/7)",
      options: ["154 cm²", "44 cm²", "22 cm²", "77 cm²"],
      correctAnswer: 0,
    },
    {
      id: 3,
      question: "If y = 3x + 2, what is the value of y when x = 4?",
      options: ["10", "12", "14", "16"],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "If a triangle has angles of 30°, 60°, and 90°, what is the ratio of its sides?",
      options: ["1:1:√2", "1:√2:2", "1:√3:2", "1:2:3"],
      correctAnswer: 2,
    },
  ],
}

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [timeLeft, setTimeLeft] = useState(quizData.duration * 60) // Convert minutes to seconds
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit()
    }
  }, [timeLeft, isSubmitted])

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = parseInt(value)
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    let correctCount = 0
    answers.forEach((answer, index) => {
      if (answer === quizData.questions[index].correctAnswer) {
        correctCount++
      }
    })
    setScore((correctCount / quizData.questions.length) * 100)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="space-y-6">
          {/* Quiz Header */}
          <div className="flex items-center justify-between">
            <Button variant="ghost" className="gap-2" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
              Back to Quizzes
            </Button>
            <div className="flex items-center gap-2 text-lg font-medium">
              <Clock className="h-5 w-5" />
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Progress Bar */}
          <Progress
            value={((currentQuestion + 1) / quizData.questions.length) * 100}
            className="h-2"
          />
          <p className="text-sm text-muted-foreground text-right">
            Question {currentQuestion + 1} of {quizData.questions.length}
          </p>

          {/* Quiz Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {quizData.title} - Question {currentQuestion + 1}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!isSubmitted ? (
                <>
                  <p className="text-lg">{quizData.questions[currentQuestion].question}</p>
                  <RadioGroup
                    value={answers[currentQuestion]?.toString()}
                    onValueChange={handleAnswerSelect}
                  >
                    <div className="grid gap-4">
                      {quizData.questions[currentQuestion].options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="text-lg">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                    >
                      Previous
                    </Button>
                    {currentQuestion === quizData.questions.length - 1 ? (
                      <Button onClick={handleSubmit}>Submit Quiz</Button>
                    ) : (
                      <Button onClick={handleNext}>Next</Button>
                    )}
                  </div>
                </>
              ) : (
                <div className="space-y-6 text-center">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Quiz Completed!</h2>
                    <p className="text-lg">Your score: {score.toFixed(1)}%</p>
                  </div>
                  <div className="grid gap-4">
                    {quizData.questions.map((question, index) => (
                      <div
                        key={question.id}
                        className="p-4 rounded-lg border"
                      >
                        <div className="flex items-start gap-2">
                          {answers[index] === question.correctAnswer ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                          <div className="space-y-2">
                            <p className="font-medium">{question.question}</p>
                            <p className="text-sm text-muted-foreground">
                              Your answer: {question.options[answers[index]]}
                            </p>
                            {answers[index] !== question.correctAnswer && (
                              <p className="text-sm text-green-500">
                                Correct answer: {question.options[question.correctAnswer]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href="/quizzes">Back to Quizzes</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
