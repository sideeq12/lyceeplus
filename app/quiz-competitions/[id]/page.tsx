import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CalendarDays, Clock, Trophy, Users, CheckCircle, AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Sample competition data
const competitionData = {
  id: "c1",
  title: "National Science Challenge",
  subject: "Science",
  description: "Test your knowledge against students nationwide in this science competition",
  longDescription:
    "The National Science Challenge is our premier science competition designed to test students' knowledge across various scientific disciplines including Physics, Chemistry, and Biology. This competition is open to all high school students preparing for WAEC and JAMB examinations.",
  startTime: "May 15, 2023 - 4:00 PM",
  duration: 45,
  participants: 243,
  maxParticipants: 500,
  questions: 30,
  pointsPerQuestion: 10,
  bonusPoints: 100,
  image: "/placeholder.svg?height=400&width=800",
  status: "upcoming",
  registrationOpen: true,
  prizes: [
    { position: "1st Place", prize: "₦30,000 + Gold Medal + Certificate" },
    { position: "2nd Place", prize: "₦15,000 + Silver Medal + Certificate" },
    { position: "3rd Place", prize: "₦5,000 + Bronze Medal + Certificate" },
    { position: "Top 10", prize: "Certificate of Excellence" },
    { position: "All Participants", prize: "Certificate of Participation" },
  ],
  rules: [
    "Competition will start exactly at the scheduled time. Late entries will not be permitted.",
    "Each question has a time limit of 45 seconds.",
    "Points are awarded based on correct answers and speed of response.",
    "Use of external resources or assistance is strictly prohibited.",
    "In case of a tie, the participant who completed the quiz faster will be ranked higher.",
    "The decision of the ScholarBase team is final in all matters related to the competition.",
  ],
  topics: [
    "Physics: Mechanics, Electricity, Waves, and Optics",
    "Chemistry: Periodic Table, Chemical Reactions, Organic Chemistry",
    "Biology: Cell Biology, Genetics, Ecology, Human Physiology",
  ],
  requirements: [
    "Stable internet connection",
    "Device with a modern web browser (laptop or tablet recommended)",
    "Quiet environment for concentration",
  ],
  isRegistered: false,
}

export default function CompetitionDetailsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Navbar />
      <main className="container py-8">
        <div className="space-y-6">
          {/* Back Button */}
          <div>
            <Link
              href="/quiz-competitions"
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Competitions
            </Link>
          </div>

          {/* Competition Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary border-primary">
                  {competitionData.subject}
                </Badge>
                <Badge variant={competitionData.registrationOpen ? "default" : "secondary"}>
                  {competitionData.registrationOpen ? "Registration Open" : "Registration Closed"}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold">{competitionData.title}</h1>
              <p className="text-muted-foreground">{competitionData.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Date & Time</span>
                  <span className="font-medium flex items-center gap-1">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {competitionData.startTime}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="font-medium flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    {competitionData.duration} minutes
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Participants</span>
                  <span className="font-medium flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    {competitionData.participants}/{competitionData.maxParticipants}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">Total Points</span>
                  <span className="font-medium flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-primary" />
                    {competitionData.questions * competitionData.pointsPerQuestion + competitionData.bonusPoints}
                  </span>
                </div>
              </div>
            </div>

            <Card className="md:col-span-1">
              <CardHeader className="pb-2">
                <CardTitle>Registration</CardTitle>
                <CardDescription>
                  {competitionData.registrationOpen
                    ? "Secure your spot in this competition"
                    : "Registration is currently closed"}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Registered</span>
                    <span className="font-medium">{competitionData.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Available Spots</span>
                    <span className="font-medium">
                      {competitionData.maxParticipants - competitionData.participants}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Questions</span>
                    <span className="font-medium">{competitionData.questions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Points per Question</span>
                    <span className="font-medium">{competitionData.pointsPerQuestion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Bonus Points</span>
                    <span className="font-medium">{competitionData.bonusPoints}</span>
                  </div>
                </div>

                {competitionData.isRegistered ? (
                  <Alert className="bg-green-500/10 border-green-500/20">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertTitle>You're Registered!</AlertTitle>
                    <AlertDescription>
                      You have successfully registered for this competition. Make sure to join on time!
                    </AlertDescription>
                  </Alert>
                ) : (
                  <Alert className="bg-primary/10 border-primary/20">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <AlertTitle>Important</AlertTitle>
                    <AlertDescription>
                      Be ready 5 minutes before the competition starts. Late entries are not permitted.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter>
                {competitionData.isRegistered ? (
                  <div className="w-full space-y-2">
                    <Button className="w-full" disabled>
                      Already Registered
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/quiz-competitions/${competitionData.id}/prepare`}>Prepare for Competition</Link>
                    </Button>
                  </div>
                ) : competitionData.registrationOpen ? (
                  <Button className="w-full" asChild>
                    <Link href={`/quiz-competitions/${competitionData.id}/register`}>Register Now</Link>
                  </Button>
                ) : (
                  <Button className="w-full" disabled>
                    Registration Closed
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>

          {/* Competition Image */}
          <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
            <Image
              src={competitionData.image || "/placeholder.svg"}
              alt={competitionData.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Competition Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Competition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{competitionData.longDescription}</p>

                  <div>
                    <h3 className="font-semibold mb-2">Topics Covered</h3>
                    <ul className="space-y-1">
                      {competitionData.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Rules */}
              <Card>
                <CardHeader>
                  <CardTitle>Competition Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {competitionData.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Technical Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {competitionData.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-1 space-y-6">
              {/* Prizes */}
              <Card>
                <CardHeader>
                  <CardTitle>Prizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {competitionData.prizes.map((prize, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {index < 3 ? (
                          <div
                            className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              index === 0
                                ? "bg-yellow-500/20 text-yellow-500"
                                : index === 1
                                  ? "bg-gray-300/20 text-gray-400"
                                  : "bg-amber-700/20 text-amber-700"
                            }`}
                          >
                            <Trophy className="h-5 w-5" />
                          </div>
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <CheckCircle className="h-5 w-5" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{prize.position}</p>
                          <p className="text-sm text-muted-foreground">{prize.prize}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Share */}
              <Card>
                <CardHeader>
                  <CardTitle>Share Competition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Invite your friends to join this competition and compete together!
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Copy Link
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Competitions */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold">Similar Competitions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Competition ${i}`}
                      alt={`Similar Competition ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle>{`${competitionData.subject} Challenge ${i}`}</CardTitle>
                    <CardDescription>Another exciting competition in {competitionData.subject}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span>May {20 + i}, 2023</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{100 + i * 50} registered</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/quiz-competitions/c${i + 3}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
