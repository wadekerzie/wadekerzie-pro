import { useState } from 'react'
import { Link } from 'react-router-dom'
import LinkCard from './LinkCard'
import PodcastCard from './PodcastCard'
import CalendarModal from './CalendarModal'

const currentlyItems = [
    {
        icon: '🟣',
        label: 'Installing NVIDIA NemoClaw AI agent platform for construction & logistics',
        link: 'https://kerzie.ai/nemoclaw',
    },
    {
        icon: '🔍',
        label: 'Available for fractional AI leadership and contract engagements',
    },
    {
        icon: '🎓',
        label: 'Delivering AI training workshops for enterprise teams',
    },
]

const links = [
    {
        emoji: '🤖',
        title: 'Kerzie AI Solutions',
        description: 'AI automation platforms and NemoClaw installs.',
        href: 'https://kerzie.ai',
        useKerzieIcon: true,
        liveIndicator: 'NemoClaw Now Live',
    },
    {
        emoji: '🎯',
        title: 'Kerzie Consulting',
        description: 'AI training, workshops, and app development.',
        href: 'https://kerzieconsulting.com',
        useKerzieIcon: true,
    },
    {
        emoji: '⛳',
        title: 'PuttingIsSimple',
        description: 'Online video course — improve your putting, lower your scores.',
        href: 'https://puttingissimple.com',
        useGolfIcon: true,
    },
    {
        emoji: '📧',
        title: 'Newsletter',
        description: 'Weekly insights on AI, operations, and building.',
        href: 'https://wades-newsletter-9cf259.beehiiv.com/',
    },
]

export default function LinkHub() {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    return (
        <>
            {/* Currently Working On */}
            <section className="max-w-md mx-auto mb-8">
                <h2 className="text-xs font-bold text-secondary/60 uppercase tracking-widest mb-3 text-center">
                    Currently
                </h2>
                <div className="bg-white/80 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-card space-y-2.5">
                    {currentlyItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <span className="text-sm shrink-0 mt-0.5">{item.icon}</span>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-secondary leading-relaxed hover:text-accent transition-colors"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-xs text-secondary leading-relaxed">{item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Navigation Cards */}
            <nav className="space-y-3 mb-8" aria-label="Main navigation">
                {/* What I've Built — links to /work */}
                <Link
                    to="/work"
                    className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-accent/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
                >
                    <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                        🛠
                    </span>
                    <div className="flex-grow min-w-0">
                        <h2 className="font-medium text-sm text-primary group-hover:text-accent transition-colors truncate">
                            What I've Built
                        </h2>
                        <p className="text-xs text-secondary truncate">
                            Production systems, AI deployments, and training programs.
                        </p>
                    </div>
                    <svg
                        className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>

                {/* Career — links to /career */}
                <Link
                    to="/career"
                    className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
                >
                    <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                        💼
                    </span>
                    <div className="flex-grow min-w-0">
                        <h2 className="font-medium text-sm text-primary group-hover:text-accent transition-colors truncate">
                            Career History
                        </h2>
                        <p className="text-xs text-secondary truncate">
                            Telecom to AI. Enterprise sales to systems architecture.
                        </p>
                    </div>
                    <svg
                        className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>

                {links.map((link) => (
                    <LinkCard key={link.title} {...link} />
                ))}

                {/* Podcast Card */}
                <div className="py-1">
                    <PodcastCard />
                </div>

                {/* Let's Connect */}
                <button
                    onClick={() => setIsCalendarOpen(true)}
                    className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-left"
                >
                    <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                        📅
                    </span>
                    <div className="flex-grow min-w-0">
                        <h2 className="font-medium text-sm text-primary group-hover:text-accent transition-colors truncate">
                            Let's Connect
                        </h2>
                        <p className="text-xs text-secondary truncate">
                            Schedule a call with me.
                        </p>
                    </div>
                    <svg
                        className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </nav>

            <CalendarModal
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
            />
        </>
    )
}
