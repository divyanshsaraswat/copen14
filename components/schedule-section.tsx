import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin } from "lucide-react"

export function ScheduleSection() {
  const schedule = {
    day1: [
      { time: "08:00 - 09:00", title: "Registration & Welcome Coffee", location: "Main Lobby" },
      { time: "09:00 - 09:30", title: "Opening Ceremony", location: "Main Auditorium", type: "ceremony" },
      { time: "09:30 - 10:30", title: "Keynote Address", location: "Main Auditorium", type: "keynote" },
      { time: "10:30 - 11:00", title: "Coffee Break", location: "Conference Hall" },
      {
        time: "11:00 - 13:00",
        title: "Technical Session 1: Precision Manufacturing",
        location: "Hall A",
        type: "session",
      },
      { time: "13:00 - 14:00", title: "Lunch Break", location: "Dining Hall" },
      { time: "14:00 - 16:00", title: "Technical Session 2: Micro Engineering", location: "Hall A", type: "session" },
      { time: "16:00 - 16:30", title: "Tea Break", location: "Conference Hall" },
      { time: "16:30 - 18:00", title: "Poster Session", location: "Exhibition Area", type: "poster" },
    ],
    day2: [
      { time: "09:00 - 10:00", title: "Keynote Address", location: "Main Auditorium", type: "keynote" },
      { time: "10:00 - 10:30", title: "Coffee Break", location: "Conference Hall" },
      { time: "10:30 - 12:30", title: "Technical Session 3: Nano Engineering", location: "Hall A", type: "session" },
      { time: "12:30 - 13:30", title: "Lunch Break", location: "Dining Hall" },
      { time: "13:30 - 15:30", title: "Technical Session 4: Advanced Materials", location: "Hall A", type: "session" },
      { time: "15:30 - 16:00", title: "Tea Break", location: "Conference Hall" },
      { time: "16:00 - 18:00", title: "Panel Discussion", location: "Main Auditorium", type: "panel" },
      { time: "19:00 - 21:00", title: "Conference Banquet", location: "Grand Hall", type: "social" },
    ],
    day3: [
      { time: "09:00 - 10:00", title: "Invited Talk", location: "Main Auditorium", type: "keynote" },
      { time: "10:00 - 10:30", title: "Coffee Break", location: "Conference Hall" },
      {
        time: "10:30 - 12:30",
        title: "Technical Session 5: Metrology & Measurement",
        location: "Hall A",
        type: "session",
      },
      {
        time: "12:30 - 13:00",
        title: "Best Paper Awards & Closing Ceremony",
        location: "Main Auditorium",
        type: "ceremony",
      },
      { time: "13:00 - 14:00", title: "Farewell Lunch", location: "Dining Hall" },
    ],
  }

  const getEventColor = (type?: string) => {
    switch (type) {
      case "keynote":
        return "border-l-4 border-l-primary bg-primary/5"
      case "session":
        return "border-l-4 border-l-secondary bg-secondary/5"
      case "poster":
        return "border-l-4 border-l-accent bg-accent/5"
      case "ceremony":
        return "border-l-4 border-l-accent bg-accent/10"
      case "panel":
        return "border-l-4 border-l-primary bg-primary/10"
      case "social":
        return "border-l-4 border-l-accent bg-accent/10"
      default:
        return "border-l-4 border-l-muted"
    }
  }

  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-primary">Conference Schedule</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive three-day program featuring keynote addresses, technical sessions, poster presentations, and
            networking opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
              <TabsTrigger value="day3">Day 3</TabsTrigger>
            </TabsList>

            {Object.entries(schedule).map(([day, events]) => (
              <TabsContent key={day} value={day} className="space-y-4">
                {events.map((event, index) => (
                  <Card key={index} className={`${getEventColor(event.type)}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-2 text-primary font-semibold min-w-[140px]">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            ))}
          </Tabs>

          <Card className="mt-8 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-center">Important Dates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Abstract Submission Deadline</p>
                  <p className="font-semibold text-lg">September 30, 2025</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Acceptance Notification</p>
                  <p className="font-semibold text-lg">October 31, 2025</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Early Bird Registration</p>
                  <p className="font-semibold text-lg">November 15, 2025</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Final Registration</p>
                  <p className="font-semibold text-lg">November 30, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
