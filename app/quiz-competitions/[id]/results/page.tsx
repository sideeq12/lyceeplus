"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"

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
      avatar: "/placeholder.svg?height=40&width=40",
      school: "Federal Government College, Lagos",
      score: 95,
      points: 480,
    },
    {
      rank: 2,
      name: "Ibrahim Musa",
      avatar: "/placeholder.svg?height=40&width=40",
      school: "Government College, Kano",
      score: 90,
      points: 450,
    },
    {
      rank: 3,
      name: "Chioma Okafor",
      avatar: "/placeholder.svg?height=40&width=40",
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
                <Badge variant="secondary">Completed</Badge>\
