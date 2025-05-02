"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Medal, Search, Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

// Sample leaderboard data
const leaderboardData = {
  weekly: [
    {
      id: "u1",
      name: "Oluwaseun Adeyemi",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Lagos",
      school: "Federal Government College, Lagos",
      points: 1250,
      rank: 1,
      badges: ["Math Wizard", "Quick Thinker"],
      quizzesTaken: 12,
    },
    {
      id: "u2",
      name: "Chioma Okafor",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Anambra",
      school: "Queens College, Enugu",
      points: 1180,
      rank: 2,
      badges: ["Science Expert", "Perfect Score"],
      quizzesTaken: 10,
    },
    {
      id: "u3",
      name: "Ibrahim Musa",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Kano",
      school: "Government College, Kano",
      points: 1120,
      rank: 3,
      badges: ["Rising Star"],
      quizzesTaken: 11,
    },
    {
      id: "u4",
      name: "Amina Mohammed",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Kaduna",
      school: "Federal Government Girls College, Zaria",
      points: 1050,
      rank: 4,
      badges: ["English Expert"],
      quizzesTaken: 9,
    },
    {
      id: "u5",
      name: "David Okonkwo",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Rivers",
      school: "Government Secondary School, Port Harcourt",
      points: 980,
      rank: 5,
      badges: ["Consistent Performer"],
      quizzesTaken: 12,
    },
    // Add more users to make up 30
    {
      id: "u6",
      name: "Fatima Ibrahim",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Kano",
      school: "Federal Government College, Kano",
      points: 950,
      rank: 6,
      badges: [],
      quizzesTaken: 8,
    },
    {
      id: "u7",
      name: "Emmanuel Osei",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Lagos",
      school: "Kings College, Lagos",
      points: 920,
      rank: 7,
      badges: [],
      quizzesTaken: 10,
    },
    {
      id: "u8",
      name: "Ngozi Eze",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Enugu",
      school: "Federal Government Girls College, Enugu",
      points: 890,
      rank: 8,
      badges: [],
      quizzesTaken: 9,
    },
    {
      id: "u9",
      name: "Yusuf Abdullahi",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Kaduna",
      school: "Government Secondary School, Kaduna",
      points: 860,
      rank: 9,
      badges: [],
      quizzesTaken: 11,
    },
    {
      id: "u10",
      name: "Grace Adichie",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Anambra",
      school: "Federal Government College, Awka",
      points: 830,
      rank: 10,
      badges: [],
      quizzesTaken: 8,
    },
    // Current user
    {
      id: "current",
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Lagos",
      school: "Government College, Ikorodu",
      points: 850,
      rank: 156,
      badges: ["Quick Thinker"],
      quizzesTaken: 12,
      isCurrentUser: true,
    },
  ],
  monthly: [
    {
      id: "u1",
      name: "Oluwaseun Adeyemi",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Lagos",
      school: "Federal Government College, Lagos",
      points: 3250,
      rank: 1,
      badges: ["Math Wizard", "Quick Thinker", "Top Performer"],
      quizzesTaken: 25,
    },
    {
      id: "u2",
      name: "Ibrahim Musa",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Kano",
      school: "Government College, Kano",
      points: 3120,
      rank: 2,
      badges: ["Rising Star", "Science Expert"],
      quizzesTaken: 24,
    },
    {
      id: "u3",
      name: "Chioma Okafor",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Anambra",
      school: "Queens College, Enugu",
      points: 2980,
      rank: 3,
      badges: ["Science Expert", "Perfect Score"],
      quizzesTaken: 22,
    },
    {
      id: "u4",
      name: "Amina Mohammed",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Kaduna",
      school: "Federal Government Girls College, Zaria",
      points: 2850,
      rank: 4,
      badges: ["English Expert"],
      quizzesTaken: 20,
    },
    {
      id: "u5",
      name: "David Okonkwo",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Rivers",
      school: "Government Secondary School, Port Harcourt",
      points: 2780,
      rank: 5,
      badges: ["Consistent Performer"],
      quizzesTaken: 23,
    },
    // Current user
    {
      id: "current",
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      state: "Lagos",
      school: "Government College, Ikorodu",
      points: 2250,
      rank: 98,
      badges: ["Quick Thinker"],
      quizzesTaken: 18,
      isCurrentUser: true,
    },
  ],
}

// Nigerian states
const nigerianStates = [
  "All States",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
]

export default function LeaderboardPage() {
  const [selectedState, setSelectedState] = useState("All States")
  const [searchQuery, setSearchQuery] = useState("")
  const [leaderboardType, setLeaderboardType] = useState<"weekly" | "monthly">("weekly")

  // Filter leaderboard data based on selected state and search query
  const filteredLeaderboard = leaderboardData[leaderboardType].filter((user) => {
    const matchesState = selectedState === "All States" || user.state === selectedState
    const matchesSearch =
      searchQuery === "" ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.school.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesState && matchesSearch
  })

  // Find current user
  const currentUser = leaderboardData[leaderboardType].find((user) => user.isCurrentUser)

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
              <h1 className="text-3xl font-bold">Leaderboard</h1>
              <p className="text-muted-foreground">See how you rank against other students across Nigeria</p>
            </div>
          </div>

          {/* Leaderboard Tabs */}
          <Tabs
            defaultValue="weekly"
            value={leaderboardType}
            onValueChange={(value) => setLeaderboardType(value as "weekly" | "monthly")}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <TabsList>
                <TabsTrigger value="weekly">Weekly Leaderboard</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Leaderboard</TabsTrigger>
              </TabsList>

              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    className="pl-9 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Filter by state" />
                  </SelectTrigger>
                  <SelectContent>
                    {nigerianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="weekly" className="space-y-6">
              {/* Top 3 Winners */}
              <div className="hidden md:block">
                <h2 className="text-xl font-semibold mb-4">Top Performers</h2>
                <div className="grid grid-cols-3 gap-4">
                  {filteredLeaderboard.slice(0, 3).map((user, index) => (
                    <Card key={user.id} className={index === 0 ? "border-yellow-500/50 bg-yellow-500/5" : ""}>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="relative">
                          {index === 0 && (
                            <div className="absolute -top-3 -right-3">
                              <Trophy className="h-6 w-6 text-yellow-500" />
                            </div>
                          )}
                          <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-background">
                            <Image
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm border-2 border-background">
                            {user.rank}
                          </div>
                        </div>
                        <h3 className="font-semibold mt-3">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.state}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-full">{user.school}</p>
                        <p className="text-xl font-bold text-primary mt-2">{user.points} pts</p>
                        <div className="flex flex-wrap gap-1 mt-2 justify-center">
                          {user.badges.slice(0, 2).map((badge, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Leaderboard Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Leaderboard</CardTitle>
                  <CardDescription>
                    Showing top {filteredLeaderboard.length} students
                    {selectedState !== "All States" ? ` from ${selectedState}` : ""}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                      <div className="col-span-1">Rank</div>
                      <div className="col-span-5 md:col-span-4">Student</div>
                      <div className="col-span-3 hidden md:block">School</div>
                      <div className="col-span-3 md:col-span-2">State</div>
                      <div className="col-span-3 md:col-span-2 text-right">Points</div>
                    </div>

                    <Separator />

                    {/* Leaderboard Entries */}
                    <div className="space-y-4">
                      {filteredLeaderboard.map((user) => (
                        <div
                          key={user.id}
                          className={`grid grid-cols-12 gap-4 items-center py-2 ${
                            user.isCurrentUser ? "bg-primary/5 rounded-md p-2 border border-primary/20" : ""
                          }`}
                        >
                          <div className="col-span-1 font-semibold">
                            {user.rank <= 3 ? (
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                                  user.rank === 1
                                    ? "bg-yellow-500/20 text-yellow-500"
                                    : user.rank === 2
                                      ? "bg-gray-300/20 text-gray-400"
                                      : "bg-amber-700/20 text-amber-700"
                                }`}
                              >
                                <Medal className="h-4 w-4" />
                              </div>
                            ) : (
                              user.rank
                            )}
                          </div>
                          <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                              <Image
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-xs text-muted-foreground md:hidden truncate">{user.school}</p>
                            </div>
                          </div>
                          <div className="col-span-3 hidden md:block text-sm truncate">{user.school}</div>
                          <div className="col-span-3 md:col-span-2 text-sm">{user.state}</div>
                          <div className="col-span-3 md:col-span-2 text-right font-bold">
                            {user.points.toLocaleString()} pts
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current User Card */}
              {currentUser && !filteredLeaderboard.some((user) => user.isCurrentUser) && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Your Ranking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1 font-semibold">{currentUser.rank}</div>
                      <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={currentUser.avatar || "/placeholder.svg"}
                            alt={currentUser.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{currentUser.name}</p>
                          <p className="text-xs text-muted-foreground md:hidden truncate">{currentUser.school}</p>
                        </div>
                      </div>
                      <div className="col-span-3 hidden md:block text-sm truncate">{currentUser.school}</div>
                      <div className="col-span-3 md:col-span-2 text-sm">{currentUser.state}</div>
                      <div className="col-span-3 md:col-span-2 text-right font-bold">
                        {currentUser.points.toLocaleString()} pts
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="monthly" className="space-y-6">
              {/* Top 3 Winners */}
              <div className="hidden md:block">
                <h2 className="text-xl font-semibold mb-4">Top Performers</h2>
                <div className="grid grid-cols-3 gap-4">
                  {filteredLeaderboard.slice(0, 3).map((user, index) => (
                    <Card key={user.id} className={index === 0 ? "border-yellow-500/50 bg-yellow-500/5" : ""}>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="relative">
                          {index === 0 && (
                            <div className="absolute -top-3 -right-3">
                              <Trophy className="h-6 w-6 text-yellow-500" />
                            </div>
                          )}
                          <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-background">
                            <Image
                              src={user.avatar || "/placeholder.svg"}
                              alt={user.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm border-2 border-background">
                            {user.rank}
                          </div>
                        </div>
                        <h3 className="font-semibold mt-3">{user.name}</h3>
                        <p className="text-sm text-muted-foreground">{user.state}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-full">{user.school}</p>
                        <p className="text-xl font-bold text-primary mt-2">{user.points} pts</p>
                        <div className="flex flex-wrap gap-1 mt-2 justify-center">
                          {user.badges.slice(0, 2).map((badge, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Leaderboard Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Leaderboard</CardTitle>
                  <CardDescription>
                    Showing top {filteredLeaderboard.length} students
                    {selectedState !== "All States" ? ` from ${selectedState}` : ""}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Table Header */}
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                      <div className="col-span-1">Rank</div>
                      <div className="col-span-5 md:col-span-4">Student</div>
                      <div className="col-span-3 hidden md:block">School</div>
                      <div className="col-span-3 md:col-span-2">State</div>
                      <div className="col-span-3 md:col-span-2 text-right">Points</div>
                    </div>

                    <Separator />

                    {/* Leaderboard Entries */}
                    <div className="space-y-4">
                      {filteredLeaderboard.map((user) => (
                        <div
                          key={user.id}
                          className={`grid grid-cols-12 gap-4 items-center py-2 ${
                            user.isCurrentUser ? "bg-primary/5 rounded-md p-2 border border-primary/20" : ""
                          }`}
                        >
                          <div className="col-span-1 font-semibold">
                            {user.rank <= 3 ? (
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                                  user.rank === 1
                                    ? "bg-yellow-500/20 text-yellow-500"
                                    : user.rank === 2
                                      ? "bg-gray-300/20 text-gray-400"
                                      : "bg-amber-700/20 text-amber-700"
                                }`}
                              >
                                <Medal className="h-4 w-4" />
                              </div>
                            ) : (
                              user.rank
                            )}
                          </div>
                          <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                              <Image
                                src={user.avatar || "/placeholder.svg"}
                                alt={user.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-xs text-muted-foreground md:hidden truncate">{user.school}</p>
                            </div>
                          </div>
                          <div className="col-span-3 hidden md:block text-sm truncate">{user.school}</div>
                          <div className="col-span-3 md:col-span-2 text-sm">{user.state}</div>
                          <div className="col-span-3 md:col-span-2 text-right font-bold">
                            {user.points.toLocaleString()} pts
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current User Card */}
              {currentUser && !filteredLeaderboard.some((user) => user.isCurrentUser) && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Your Ranking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-1 font-semibold">{currentUser.rank}</div>
                      <div className="col-span-5 md:col-span-4 flex items-center gap-3">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={currentUser.avatar || "/placeholder.svg"}
                            alt={currentUser.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{currentUser.name}</p>
                          <p className="text-xs text-muted-foreground md:hidden truncate">{currentUser.school}</p>
                        </div>
                      </div>
                      <div className="col-span-3 hidden md:block text-sm truncate">{currentUser.school}</div>
                      <div className="col-span-3 md:col-span-2 text-sm">{currentUser.state}</div>
                      <div className="col-span-3 md:col-span-2 text-right font-bold">
                        {currentUser.points.toLocaleString()} pts
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
