import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface CourseCardProps {
  id: string
  title: string
  instructor: string
  price: number
  rating: number
  reviewCount: number
  studentCount: number
  image: string
  category: string
  level: "Beginner" | "Intermediate" | "Advanced"
  featured?: boolean
}

export function CourseCard({
  id,
  title,
  instructor,
  price,
  rating,
  reviewCount,
  studentCount,
  image,
  category,
  level,
  featured = false,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className={`h-full overflow-hidden transition-all hover:shadow-md ${featured ? "border-primary/50" : ""}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
          {featured && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {category}
              </Badge>
              <span className="text-xs text-muted-foreground">{level}</span>
            </div>
            <h3 className="font-semibold line-clamp-2">{title}</h3>
            <p className="text-sm text-muted-foreground">By {instructor}</p>
            <div className="flex items-center gap-1">
              <span className="font-bold text-amber-500">{rating.toFixed(1)}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating) ? "fill-amber-500 text-amber-500" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            </div>
            <p className="text-xs text-muted-foreground">{studentCount.toLocaleString()} students</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="font-bold">₦{price.toLocaleString()}</div>
        </CardFooter>
      </Card>
    </Link>
  )
}
