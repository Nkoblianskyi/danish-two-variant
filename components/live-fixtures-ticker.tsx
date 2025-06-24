"use client"

import { useEffect, useState } from "react"
import { Calendar, Clock, Zap } from "lucide-react"
import Image from "next/image"

interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  date: string
  time: string
  league: string
}

export function LiveFixturesTicker() {
  const [matches, setMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMatches = async () => {
    try {
      const res = await fetch("https://www.scorebat.com/video-api/v3/")
      const data = await res.json()

      if (!data.response) return

      const allMatches = data.response.slice(0, 15).map((match: any, index: number) => {
        const [homeTeam, awayTeam] = match.title.split(" - ")
        const dateObj = new Date(match.date)

        return {
          id: `match-${index}`,
          homeTeam: homeTeam?.trim() || "TBD",
          awayTeam: awayTeam?.trim() || "TBD",
          date: dateObj.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
          }),
          time: dateObj.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }),
          league: match.competition || "Friendly",
        }
      })

      setMatches(allMatches)
    } catch (error) {
      setMatches([
        {
          id: "1",
          homeTeam: "Man United",
          awayTeam: "Liverpool",
          date: "15 Jun",
          time: "20:00",
          league: "Premier League",
        },
        {
          id: "2",
          homeTeam: "Barcelona",
          awayTeam: "Real Madrid",
          date: "16 Jun",
          time: "21:30",
          league: "La Liga",
        },
        {
          id: "3",
          homeTeam: "Bayern Munich",
          awayTeam: "Dortmund",
          date: "17 Jun",
          time: "19:00",
          league: "Bundesliga",
        },
        {
          id: "4",
          homeTeam: "PSG",
          awayTeam: "Marseille",
          date: "18 Jun",
          time: "22:00",
          league: "Ligue 1",
        },
        {
          id: "5",
          homeTeam: "Chelsea",
          awayTeam: "Arsenal",
          date: "19 Jun",
          time: "16:00",
          league: "Premier League",
        },
        {
          id: "6",
          homeTeam: "Juventus",
          awayTeam: "AC Milan",
          date: "20 Jun",
          time: "19:15",
          league: "Serie A",
        },
        {
          id: "7",
          homeTeam: "Ajax",
          awayTeam: "PSV",
          date: "21 Jun",
          time: "18:00",
          league: "Eredivisie",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMatches()
    const interval = setInterval(fetchMatches, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="tech-card border-2 border-tech-gold max-w-[1580px] mx-auto mb-4">
        <div className="bg-tech-black text-tech-white py-3 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-tech-gold animate-pulse"></div>
            <div className="w-2 h-2 bg-tech-red animate-pulse"></div>
            <span className="text-sm font-bold tech-subheading">LOADING LIVE DATA...</span>
            <div className="w-2 h-2 bg-tech-red animate-pulse"></div>
            <div className="w-2 h-2 bg-tech-gold animate-pulse"></div>
          </div>
        </div>
      </div>
    )
  }

  if (matches.length === 0) return null

  return (
    <div className="relative overflow-hidden mb-4 max-w-[1580px] mx-auto">
      <div className="tech-card border-2 border-tech-black overflow-hidden">
        {/* Scrolling content */}
        <div className="relative overflow-hidden h-14 bg-tech-black">
          <div className="ticker-track h-full flex items-center pl-40">
            {matches
              .concat(matches)
              .concat(matches)
              .map((match, index) => (
                <div
                  key={`${match.id}-${index}`}
                  className="flex-shrink-0 px-6 py-3 border-l border-tech-gold/30 min-w-[320px] text-center whitespace-nowrap"
                >
                  <div className="font-bold text-sm text-tech-white mb-1 tech-heading">
                    {match.homeTeam} <span className="text-tech-red">VS</span> {match.awayTeam}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-xs text-tech-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-tech-gold" />
                      <span className="tech-subheading">{match.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-tech-red" />
                      <span className="tech-subheading">{match.time}</span>
                    </div>
                    <div className="text-tech-gold font-bold tech-subheading">{match.league}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Fixed label */}
        <div className="absolute left-0 top-0 bottom-0 bg-tech-gold text-tech-black font-bold px-4 py-2 text-sm z-10 flex items-center shadow-tech-strong border-r-2 border-tech-black">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image src="/logo.png" alt="Irish Flag" width={24} height={24} className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-tech-red"></div>
            </div>
            <div className="text-center leading-tight">
              <div className="text-xs font-bold tech-heading flex items-center gap-1">
                <Zap className="w-3 h-3" />
                LIVE
              </div>
              <div className="text-xs font-bold tech-subheading">FIXTURES</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 100s linear infinite;
          width: max-content;
        }
        
        @keyframes ticker-scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
