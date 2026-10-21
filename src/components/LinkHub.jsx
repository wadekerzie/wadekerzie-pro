import { useState } from 'react'
import LinkCard from './LinkCard'
import PodcastCard from './PodcastCard'
import ProductCard from './ProductCard'
import CalendarModal from './CalendarModal'

const currentlyItems = [
    {
        icon: '🏢',
        label: 'Founder, Kerzie AI Solutions. Four AI products in production.',
    },
    {
        icon: '📰',
        label: "Published in Nation's Restaurant News, August 2026.",
        link: 'https://www.nrn.com/expert-opinions/why-restaurants-don-t-need-an-11-000-consultant-to-fix-prime-cost-anymore',
    },
    {
        icon: '📰',
        label: 'Published in LawFuel, September 2026.',
        link: 'https://www.lawfuel.com/the-traffic-meter-cant-see-the-clients-ai-never-sends-you/',
    },
    {
        icon: '📰',
        label: 'Published in Small Business Currents, September 2026.',
        link: 'https://smallbusinesscurrents.com/2026/09/22/build-on-what-wont-change/',
    },
    {
        icon: '📰',
        label: 'Published in Plumbing & Mechanical, September 2026.',
        link: 'https://www.pmmag.com/articles/107780-how-contractors-can-use-ai-to-avoid-a-9-500-consulting-bill',
    },
    {
        icon: '📰',
        label: 'Published in Supply House Times, September 2026.',
        link: 'https://www.supplyht.com/articles/107487-how-ai-can-help-trade-contractors-replace-a-9-500-consulting-playbook',
    },
    {
        icon: '🎙️',
        label: 'Guest on The Dealer Playbook podcast, October 2026.',
        link: 'https://thedealerplaybook.com/episodes/why-ai-is-skipping-your-dealership-website-wade-kerzie',
    },
    {
        icon: '🚀',
        label: 'Shipping real solutions.',
    },
]

// Essays (Wade 10/21): every kerzie.ai essay, newest first, each with Read / Listen / Watch.
// Keep this current: a new essay, byline or aired podcast lands here in the same motion it ships.
const essayItems = [
    { title: 'The Shrapnel', date: 'October 9, 2026', slug: 'shrapnel' },
    { title: 'The Blast Radius', date: 'October 1, 2026', slug: 'blast-radius' },
    { title: 'The Blast Door', date: 'July 31, 2026', slug: 'blast-door' },
    { title: 'The Consequence Clock', date: 'July 30, 2026', slug: 'consequence-clock' },
    { title: 'The Kerzie Effect', date: 'July 24, 2026', slug: 'kerzie-effect' },
]

const productItems = [
    {
        title: 'GotaGuy',
        description: 'Home repair by text. Live in McKinney, TX and Aurora, CO.',
        href: 'https://gotaguy.chat',
    },
    {
        title: 'The Back Cover',
        description: 'AI-search readiness for local businesses. Live for a GMC dealer, refreshed daily.',
        href: 'https://kerzie.ai/back-cover',
    },
    {
        title: 'Unison',
        description: 'Omnichannel lead response for small businesses.',
        href: 'https://kerzie.ai/ventures/unison',
    },
    {
        title: 'TrueSeat',
        description: 'AI interview to candidate dossier, hosted at a URL.',
        href: 'https://trueseat.io',
    },
]

const links = [
    {
        emoji: '🤖',
        title: 'Kerzie AI Solutions',
        description: 'Four AI products in production: GotaGuy, The Back Cover, Unison, TrueSeat.',
        href: 'https://kerzie.ai',
        useKerzieIcon: true,
    },
    {
        emoji: '📧',
        title: 'Newsletter',
        description: 'Weekly on AI, operations, and building. Tuesdays, on Substack.',
        href: 'https://news.kerzie.ai/',
    },
    {
        emoji: '⛳',
        title: 'PuttingIsSimple',
        description: 'Online video course: improve your putting, lower your scores.',
        href: 'https://puttingissimple.com',
        useGolfIcon: true,
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
                                    className="text-xs text-[#AABBCC] leading-relaxed underline decoration-accent/40 underline-offset-2 hover:text-accent transition-colors"
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

            {/* What I've Built */}
            <section className="max-w-md mx-auto mb-8">
                <h2 className="text-xs font-semibold text-[#6B9FD4] uppercase tracking-widest mb-3 text-center">
                    What I've Built
                </h2>
                <div className="space-y-3">
                    {productItems.map((product) => (
                        <ProductCard key={product.title} {...product} />
                    ))}
                </div>
            </section>

            {/* Link Cards */}
            <nav className="space-y-3 mb-8" aria-label="Main navigation">
                <LinkCard key={links[0].title} {...links[0]} />

                {/* Podcast Card */}
                <div className="py-1">
                    <PodcastCard />
                </div>

                {/* Bylines live as links in the Currently box (Wade 9/24: the cards were redundant). */}

                {/* Essays (Wade 10/21): each essay with Read / Listen / Watch */}
                <section className="max-w-md mx-auto" aria-label="Essays">
                    <div className="bg-[#1E2035] border border-border rounded-2xl p-4 shadow-card">
                        <div className="flex items-center gap-2.5 mb-3">
                            <span className="text-xl" role="img" aria-hidden="true">✍️</span>
                            <a href="https://kerzie.ai/essays" target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-white hover:text-[#6B9FD4] transition-colors">
                                Essays
                            </a>
                            <span className="text-xs text-[#AABBCC]">Read, listen or watch</span>
                        </div>
                        <ul className="space-y-2.5">
                            {essayItems.map((e) => (
                                <li key={e.slug} className="flex items-baseline justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="text-xs text-white leading-snug">{e.title}</p>
                                        <p className="text-[11px] text-[#8899AA]">{e.date}</p>
                                    </div>
                                    <div className="flex gap-2.5 shrink-0 text-xs">
                                        <a href={`https://kerzie.ai/${e.slug}`} target="_blank" rel="noopener noreferrer" className="text-[#AABBCC] underline decoration-accent/40 underline-offset-2 hover:text-accent transition-colors">Read</a>
                                        <a href={`https://kerzie.ai/${e.slug}#listen`} target="_blank" rel="noopener noreferrer" className="text-[#AABBCC] underline decoration-accent/40 underline-offset-2 hover:text-accent transition-colors">Listen</a>
                                        <a href={`https://kerzie.ai/${e.slug}#watch`} target="_blank" rel="noopener noreferrer" className="text-[#AABBCC] underline decoration-accent/40 underline-offset-2 hover:text-accent transition-colors">Watch</a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {links.slice(1).map((link) => (
                    <LinkCard key={link.title} {...link} />
                ))}

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
