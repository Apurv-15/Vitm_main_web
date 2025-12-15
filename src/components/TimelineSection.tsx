import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base font-normal text-muted-foreground">
          A groundbreaking year for GDG VIT with record-breaking events and community growth.
        </p>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-blue" />
            DevFest 2024 - 500+ attendees
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-red" />
            Android Study Jam - 200+ developers
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-yellow" />
            Cloud Study Jam - 150+ participants
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span className="w-2 h-2 rounded-full bg-gdg-green" />
            Flutter Forward - 180+ attendees
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-blue/20 to-gdg-blue/5 border border-gdg-blue/20 flex items-center justify-center">
            <span className="text-3xl">🎉</span>
          </div>
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-red/20 to-gdg-red/5 border border-gdg-red/20 flex items-center justify-center">
            <span className="text-3xl">🚀</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base font-normal text-muted-foreground">
          Expanded our reach with hybrid events and international speaker sessions.
        </p>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-green" />
            Google I/O Extended - Virtual & In-person
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-yellow" />
            Compose Camp - 300+ participants
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span className="w-2 h-2 rounded-full bg-gdg-blue" />
            Web Development Bootcamp - 6 weeks
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-yellow/20 to-gdg-yellow/5 border border-gdg-yellow/20 flex items-center justify-center">
            <span className="text-3xl">💻</span>
          </div>
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-green/20 to-gdg-green/5 border border-gdg-green/20 flex items-center justify-center">
            <span className="text-3xl">🌐</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-6 text-sm md:text-base font-normal text-muted-foreground">
          Restarted in-person events post-pandemic with renewed energy and enthusiasm.
        </p>
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-red" />
            DevFest 2022 - First in-person event
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground mb-2">
            <span className="w-2 h-2 rounded-full bg-gdg-blue" />
            ML Study Jam - AI/ML workshops
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span className="w-2 h-2 rounded-full bg-gdg-green" />
            Hackathon 2022 - 50+ projects
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-red/20 to-gdg-red/5 border border-gdg-red/20 flex items-center justify-center">
            <span className="text-3xl">🎓</span>
          </div>
          <div className="h-24 md:h-44 lg:h-56 rounded-xl bg-gradient-to-br from-gdg-blue/20 to-gdg-blue/5 border border-gdg-blue/20 flex items-center justify-center">
            <span className="text-3xl">🤖</span>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="relative w-full overflow-clip bg-background">
      <Timeline data={timelineData} />
    </section>
  );
}
