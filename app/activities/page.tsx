"use client"

import { useState } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Calendar, ArrowLeft, ExternalLink, MapPin } from "lucide-react"
import Link from "next/link"

interface ActivityItem {
  id: string
  title: string
  organization: string
  date: string
  type: string
  description: string
  skills: string[]
  details: string[]
  role: string
  location?: string
}

export default function ActivitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<ActivityItem | null>(null)

  const activities: ActivityItem[] = [
    {
      id: "1",
      title: "Programming Club President",
      organization: "University Computer Science Club",
      date: "2023 - 2024",
      type: "leadership",
      description: "Led a team of 50+ members in organizing coding workshops, hackathons, and tech talks...",
      skills: ["Leadership", "Event Management", "Public Speaking", "Team Building"],
      details: [
        "Organized 12 workshops with 500+ total attendees",
        "Increased club membership by 150% during tenure",
        "Established partnerships with 5 tech companies",
        "Mentored 20+ junior students in programming",
      ],
      role: "President",
      location: "University Campus",
    },
    {
      id: "2",
      title: "Youth Coding Instructor",
      organization: "Local Community Center",
      date: "Summer 2023",
      type: "volunteer",
      description: "Taught programming fundamentals to underprivileged youth aged 12-18...",
      skills: ["Teaching", "Curriculum Development", "Mentoring", "Community Service"],
      details: [
        "Taught 30+ students basic programming concepts",
        "Developed age-appropriate curriculum for beginners",
        "Achieved 95% course completion rate",
        "Helped 5 students secure tech internships",
      ],
      role: "Volunteer Instructor",
      location: "Downtown Community Center",
    },
    {
      id: "3",
      title: "Tech Conference Organizer",
      organization: "Regional Tech Summit",
      date: "April 2023",
      type: "event-planning",
      description: "Coordinated logistics for 500-person technology conference featuring industry leaders...",
      skills: ["Event Planning", "Logistics", "Vendor Management", "Marketing"],
      details: [
        "Managed budget of $50,000 with 10% under-spend",
        "Coordinated 20+ speakers from major tech companies",
        "Achieved 98% attendee satisfaction rating",
        "Generated $15,000 in sponsorship revenue",
      ],
      role: "Lead Organizer",
      location: "Convention Center",
    },
  ]

  const allTags = ["leadership", "volunteer", "event-planning", "mentoring", "community-service"]

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTags = selectedTags.length === 0 || selectedTags.includes(activity.type)
    return matchesSearch && matchesTags
  })

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  if (selectedItem) {
    return (
      <div className="relative min-h-screen">
        <GalaxyBackground />
        <div className="relative z-10 p-6">
          <Button
            onClick={() => setSelectedItem(null)}
            className="mb-6 bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-md border-pink-400/30 text-gray-100 hover:bg-pink-500/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Activities
          </Button>

          <Card className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border-pink-400/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-gray-100 mb-2">{selectedItem.title}</CardTitle>
                  <div className="flex items-center gap-4 text-gray-200 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {selectedItem.organization}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedItem.date}
                    </div>
                    {selectedItem.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedItem.location}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <Badge className="bg-pink-500/20 text-pink-200 border-pink-500/30">{selectedItem.role}</Badge>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-pink-400/30 text-gray-100 hover:bg-pink-500/20 bg-transparent"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {selectedItem.details.map((detail, index) => (
                    <li key={index} className="text-gray-200 flex items-start gap-2">
                      <span className="text-pink-400 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-3">Skills Developed</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.skills.map((skill, index) => (
                    <Badge key={index} className="bg-pink-500/20 text-pink-200 border-pink-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <GalaxyBackground />
      <Navigation activeSection="activities" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-md border-pink-400/30 text-gray-100 hover:bg-pink-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">Activities & Leadership</h1>
            <p className="text-gray-200">Community involvement and leadership experiences</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-black/30 backdrop-blur-md border-pink-400/30 text-gray-100 placeholder:text-gray-400"
            />
          </div>

          {/* Activity Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <Card
                key={activity.id}
                className="bg-black/30 backdrop-blur-md border-pink-400/20 hover:bg-black/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(activity)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Heart className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">{activity.date}</span>
                  </div>
                  <CardTitle className="text-gray-100 text-lg mb-2">{activity.title}</CardTitle>
                  <div className="text-pink-400 text-sm font-medium">{activity.organization}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 text-sm mb-4 line-clamp-3">{activity.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {activity.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} className="bg-pink-500/20 text-pink-200 border-pink-500/30 text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-pink-500/20 text-pink-200 border-pink-500/30 text-xs">{activity.role}</Badge>
                    {activity.location && (
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin className="w-3 h-3" />
                        {activity.location}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
