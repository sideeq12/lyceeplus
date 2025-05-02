"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Download,
  List,
  MessageSquare,
  PlayCircle,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"

// Sample course data
const course = {
  id: "1",
  title: "WAEC Mathematics Complete Course",
  instructor: "Dr. Adebayo Johnson",
  progress: 65,
  currentModule: "Algebra",
  currentLesson: "Quadratic Equations",
  modules: [
    {
      id: "m1",
      title: "Introduction to WAEC Mathematics",
      completed: true,
      lessons: [
        { id: "l1", title: "Course Overview", duration: "10:15", completed: true },
        { id: "l2", title: "Understanding the WAEC Mathematics Syllabus", duration: "15:30", completed: true },
        { id: "l3", title: "Examination Format and Marking Scheme", duration: "12:45", completed: true },
      ],
    },
    {
      id: "m2",
      title: "Number and Numeration",
      completed: true,
      lessons: [
        { id: "l4", title: "Number Bases", duration: "25:10", completed: true },
        { id: "l5", title: "Fractions, Decimals and Approximations", duration: "30:45", completed: true },
        { id: "l6", title: "Indices, Logarithms and Surds", duration: "28:20", completed: true },
        { id: "l7", title: "Sequence and Series", duration: "22:15", completed: true },
      ],
    },
    {
      id: "m3",
      title: "Algebra",
      completed: false,
      lessons: [
        { id: "l8", title: "Algebraic Expressions", duration: "20:30", completed: true },
        { id: "l9", title: "Simple Equations and Inequalities", duration: "25:15", completed: true },
        { id: "l10", title: "Quadratic Equations", duration: "28:40", completed: false, current: true },
        { id: "l11", title: "Variation", duration: "18:25", completed: false },
        { id: "l12", title: "Matrices and Determinants", duration: "35:10", completed: false },
      ],
    },
    {
      id: "m4",
      title: "Geometry and Trigonometry",
      completed: false,
      lessons: [
        { id: "l13", title: "Angles and Polygons", duration: "22:35", completed: false },
        { id: "l14", title: "Circles and Constructions", duration: "26:50", completed: false },
        { id: "l15", title: "Trigonometric Ratios", duration: "30:15", completed: false },
        { id: "l16", title: "Mensuration", duration: "28:20", completed: false },
      ],
    },
    {
      id: "m5",
      title: "Statistics and Probability",
      completed: false,
      lessons: [
        { id: "l17", title: "Data Presentation and Analysis", duration: "24:45", completed: false },
        { id: "l18", title: "Measures of Central Tendency", duration: "22:30", completed: false },
        { id: "l19", title: "Probability", duration: "26:15", completed: false },
      ],
    },
  ],
  resources: [
    { id: "r1", title: "Quadratic Equations Formula Sheet", type: "PDF", size: "1.2 MB" },
    { id: "r2", title: "Practice Problems - Quadratic Equations", type: "PDF", size: "2.5 MB" },
    { id: "r3", title: "Quadratic Equations Cheat Sheet", type: "PDF", size: "0.8 MB" },
  ],
  notes: [
    {
      id: "n1",
      title: "Important formulas",
      content: "For a quadratic equation ax² + bx + c = 0, the solutions are given by x = (-b ± √(b² - 4ac)) / 2a",
      timestamp: "10:25",
    },
    {
      id: "n2",
      title: "Types of solutions",
      content:
        "If b² - 4ac > 0, there are two distinct real solutions\nIf b² - 4ac = 0, there is one repeated real solution\nIf b² - 4ac < 0, there are two complex solutions",
      timestamp: "15:40",
    },
  ],
}

export default function LearningPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [expandedModules, setExpandedModules] = useState<string[]>([course.modules.find((m) => !m.completed)?.id || ""])

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => (prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]))
  }

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const completedLessons = course.modules.reduce(
    (acc, module) => acc + module.lessons.filter((lesson) => lesson.completed).length,
    0,
  )

  function renderCourseContent() {
    return (
      <div className="divide-y">
        {course.modules.map((module) => (
          <div key={module.id}>
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50"
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center gap-2">
                {module.completed ? (
                  <CheckCircle className="h-5 w-5 text-primary" />
                ) : (
                  <div
                    className={`h-5 w-5 rounded-full border-2 ${
                      module.lessons.some((l) => l.current) ? "border-primary bg-primary/20" : "border-muted-foreground"
                    }`}
                  />
                )}
                <h3 className="font-medium">{module.title}</h3>
              </div>
              {expandedModules.includes(module.id) ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </div>
            {expandedModules.includes(module.id) && (
              <div className="pl-11 pr-4 pb-2 space-y-1">
                {module.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className={`py-2 px-3 rounded-md flex items-center justify-between ${
                      lesson.current ? "bg-primary/10 text-primary" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {lesson.completed ? (
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      ) : lesson.current ? (
                        <div className="h-4 w-4 rounded-full border-2 border-primary bg-primary/20 shrink-0" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground shrink-0" />
                      )}
                      <span className="text-sm">{lesson.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-4rem)]">
        {/* Course Header */}
        <div className="border-b bg-muted/40">
          <div className="container py-4 flex items-center gap-4">
            <Link href="/profile" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to My Learning</span>
            </Link>
            <div>
              <h1 className="text-xl font-bold line-clamp-1">{course.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>
                  {course.currentModule} - {course.currentLesson}
                </span>
                <div className="hidden md:flex items-center gap-1">
                  <span>
                    {completedLessons}/{totalLessons} lessons completed
                  </span>
                  <Progress value={(completedLessons / totalLessons) * 100} className="h-2 w-20" />
                </div>
              </div>
            </div>
            <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto md:hidden">
                  <List className="h-4 w-4 mr-2" />
                  Course Content
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold">Course Content</h2>
                      <Button variant="ghost" size="sm" onClick={() => setIsSidebarOpen(false)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                      <span>
                        {completedLessons}/{totalLessons} lessons completed
                      </span>
                      <Progress value={(completedLessons / totalLessons) * 100} className="h-2 w-20" />
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto">{renderCourseContent()}</div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex flex-1">
          {/* Sidebar - Desktop */}
          <div className="hidden md:block w-[300px] lg:w-[350px] border-r overflow-auto">
            <div className="p-4 border-b">
              <h2 className="font-semibold">Course Content</h2>
              <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                <span>
                  {completedLessons}/{totalLessons} lessons completed
                </span>
                <Progress value={(completedLessons / totalLessons) * 100} className="h-2 w-20" />
              </div>
            </div>
            <div>{renderCourseContent()}</div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            <div className="container py-6">
              <div className="space-y-6">
                {/* Video Player */}
                <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Button size="lg" variant="outline" className="gap-2 text-white hover:bg-primary hover:text-white">
                      <PlayCircle className="h-6 w-6" />
                      Play Video
                    </Button>
                  </div>
                </div>

                {/* Lesson Content */}
                <Tabs defaultValue="content" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="content">Lesson Content</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                    <TabsTrigger value="notes">My Notes</TabsTrigger>
                    <TabsTrigger value="discussion">Discussion</TabsTrigger>
                  </TabsList>
                  <TabsContent value="content" className="space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold">Quadratic Equations</h2>
                      <p className="text-muted-foreground">Module: Algebra • Duration: 28:40</p>
                    </div>
                    <div className="space-y-4">
                      <p>
                        Welcome to this lesson on Quadratic Equations. In this lesson, we'll explore the fundamental
                        concepts of quadratic equations, their properties, and various methods to solve them.
                      </p>
                      <h3 className="text-xl font-semibold">What is a Quadratic Equation?</h3>
                      <p>
                        A quadratic equation is a second-degree polynomial equation in a single variable x, where a, b,
                        and c are constants, and a ≠ 0:
                      </p>
                      <div className="p-4 bg-muted rounded-md text-center">ax² + bx + c = 0</div>
                      <h3 className="text-xl font-semibold">Methods of Solving Quadratic Equations</h3>
                      <p>There are several methods to solve quadratic equations:</p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Factorization Method</li>
                        <li>Completing the Square Method</li>
                        <li>Quadratic Formula Method</li>
                      </ol>
                      <h3 className="text-xl font-semibold">The Quadratic Formula</h3>
                      <p>The quadratic formula is a direct way to find the solutions of a quadratic equation:</p>
                      <div className="p-4 bg-muted rounded-md text-center">x = (-b ± √(b² - 4ac)) / 2a</div>
                      <p>The discriminant (b² - 4ac) determines the nature of the roots:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>If b² - 4ac {">"} 0, there are two distinct real roots</li>
                        <li>If b² - 4ac = 0, there is one repeated real root</li>
                        <li>If b² - 4ac {"<"} 0, there are two complex roots</li>
                      </ul>
                    </div>
                    <div className="flex justify-between pt-4">
                      <Button variant="outline">Previous Lesson</Button>
                      <Button>Next Lesson</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="resources" className="space-y-4">
                    <h2 className="text-xl font-semibold">Lesson Resources</h2>
                    <div className="space-y-2">
                      {course.resources.map((resource) => (
                        <div key={resource.id} className="flex items-center justify-between p-3 border rounded-md">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-md text-primary">
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-medium">{resource.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {resource.type} • {resource.size}
                              </p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="notes" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">My Notes</h2>
                      <Button size="sm">Add Note</Button>
                    </div>
                    <div className="space-y-3">
                      {course.notes.map((note) => (
                        <div key={note.id} className="p-3 border rounded-md">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{note.title}</h3>
                            <span className="text-xs text-muted-foreground">at {note.timestamp}</span>
                          </div>
                          <p className="mt-2 text-sm whitespace-pre-line">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="discussion" className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">Discussion</h2>
                      <Button size="sm">Ask a Question</Button>
                    </div>
                    <div className="p-6 text-center border rounded-md">
                      <MessageSquare className="h-10 w-10 mx-auto text-muted-foreground" />
                      <h3 className="mt-2 font-medium">No discussions yet</h3>
                      <p className="text-sm text-muted-foreground">
                        Be the first to ask a question or start a discussion about this lesson.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
