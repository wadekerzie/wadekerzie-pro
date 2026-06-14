import { useState } from 'react'
import LinkCard from './LinkCard'
import PodcastCard from './PodcastCard'
import CalendarModal from './CalendarModal'

const currentlyItems = [
    {
        icon: '🏢',
        label: 'Founder, Kerzie AI Solutions. Building AI-native products.',
    },
    {
        icon: '📍',
        label: 'GotaGuy live in McKinney/Dallas and Aurora/Denver.',
    },
    {
        icon: '🚀',
        label: 'Shipping. Not teaching.',
    },
]

const links = [
    {
        emoji: '🤖',
        title: 'Kerzie AI Solutions',
        description: 'SMS-native home repair, lead response, and mobile apps.',
        href: 'https://kerzie.ai',
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
                <h2 className="text-xs font-semibold text-[#6B9FD4] uppercase tracking-widest mb-3 text-center">
                    Currently
                </h2>
                <div className="bg-[#1E2035] border border-border rounded-2xl p-4 shadow-card space-y-2.5">
                    {currentlyItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                            <span className="text-sm shrink-0 mt-0.5">{item.icon}</span>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-[#AABBCC] leading-relaxed hover:text-accent transition-colors"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <span className="text-xs text-[#AABBCC] leading-relaxed">{item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Link Cards */}
            <nav className="space-y-3 mb-8" aria-label="Main navigation">
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
                    className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-[#1E2035] border border-border hover:border-[#6B9FD4] shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 text-left"
                >
                    <span className="w-10 h-10 flex items-center justify-center text-2xl shrink-0" role="img" aria-hidden="true">
                        📅
                    </span>
                    <div className="flex-grow min-w-0">
                        <h2 className="font-medium text-sm text-white group-hover:text-[#6B9FD4] transition-colors truncate">
                            Let's Connect
                        </h2>
                        <p className="text-xs text-[#AABBCC] truncate">
                            Schedule a call with me.
                        </p>
                    </div>
                    <svg
                        className="w-4 h-4 text-[#6B9FD4] group-hover:translate-x-0.5 transition-all shrink-0"
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
