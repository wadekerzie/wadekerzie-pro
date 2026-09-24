import { useState, useEffect } from 'react'

const scoringPillars = [
    {
        name: 'Systems Built',
        weight: 30,
        score: 29,
        maxScore: 30,
        details: [
            { label: 'Production systems', value: 'GotaGuy (SMS-native home repair marketplace, live in McKinney TX and Aurora CO), The Back Cover (AI-search readiness with a daily production refresh of a dealer\'s 300-plus-vehicle inventory feed), Unison (omnichannel lead response), TrueSeat (AI interview to candidate dossier)' },
            { label: 'Architecture', value: 'LLM orchestration, voice (STT/TTS) and SMS pipelines, Stripe checkout and contractor dispatch, Supabase and Postgres, Railway and Vercel, Meta Marketing API' },
            { label: 'Operating system', value: 'Wade OS, an AI operating system of scheduled agents, shipping gates and receipts that carries the technical execution across every product' },
            { label: 'Complexity demonstrated', value: 'Multi-channel orchestration, live payments, AI-search verification against the model providers\' own crawlers, hosted candidate dossiers with provenance tiers' },
        ],
    },
    {
        name: 'Production Deployments',
        weight: 25,
        score: 25,
        maxScore: 25,
        details: [
            { label: 'Live client systems', value: 'The Back Cover for Shortline GMC (signed August 2026, daily refresh since August 31); Voice AI for Kat Fabricators (manufacturing) and Aim High Electrical (field services)' },
            { label: 'Consumer and marketplace', value: 'GotaGuy live in two markets with live Stripe checkout and homeowner SMS; TrueSeat live at trueseat.io' },
            { label: 'Verification discipline', value: 'The Shortline deployment is verified every morning and logged publicly at kerzie.ai/shortline-log' },
        ],
    },
    {
        name: 'Revenue Impact',
        weight: 20,
        score: 20,
        maxScore: 20,
        details: [
            { label: 'Career revenue', value: '$420M+ in enterprise sales leadership; nine deals over $12M' },
            { label: 'Kerzie revenue model', value: 'Productized offers: The Back Cover (setup plus a monthly Watch), AI Fast-Track Session, Implementation sprint; a referral-partner and seller motion for The Back Cover' },
            { label: 'Published method', value: 'The Kerzie Effect (kerzie.ai/kerzie-effect)' },
        ],
    },
    {
        name: 'Training & Education',
        weight: 15,
        score: 15,
        maxScore: 15,
        details: [
            { label: 'Verified deployment', value: 'Applied AI systems deployed in production across multiple verticals.' },
            { label: 'Published', value: "Nation's Restaurant News, August 2026; LawFuel, September 2026; Small Business Currents, September 2026; essays The Kerzie Effect, The Consequence Clock and The Blast Door at kerzie.ai" },
            { label: 'On camera', value: 'AI in the Wild, the show on the Kerzie AI YouTube channel; 56-episode podcast archive' },
        ],
    },
    {
        name: 'Toolchain Mastery',
        weight: 10,
        score: 9,
        maxScore: 10,
        details: [
            { label: 'Cloud and infrastructure', value: 'Supabase, Postgres, Railway, Vercel, AWS S3' },
            { label: 'Development', value: 'Claude Code, Git/GitHub, Vite/React, Next.js, mobile app deployment (App Store/Google Play)' },
            { label: 'AI and automation', value: 'Claude API and Agent SDK, n8n, LangFlow, GoHighLevel, Zapier (Silver Partner), Make, HeyGen' },
            { label: 'Platforms', value: 'Stripe, SMS orchestration, Meta Marketing API, Salesforce, HubSpot' },
            { label: 'Security', value: 'Encryption standards, secure data handling, authentication/authorization' },
        ],
    },
]

const totalScore = scoringPillars.reduce((sum, p) => sum + p.score, 0)
const maxTotalScore = scoringPillars.reduce((sum, p) => sum + p.maxScore, 0)

export default function CompetencyBadge() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsModalOpen(false)
        }
        if (isModalOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isModalOpen])

    return (
        <>
            {/* Badge */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-4 py-2 bg-[#1E2035] text-white rounded-full border border-[#6B9FD4] shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer group"
                aria-label="View Applied AI Competency Index details"
            >
                <div className="flex items-center gap-2">
                    <span className="text-sm text-[#AABBCC]">Applied AI Competency Index™</span>
                    <span className="text-lg font-bold text-white">{totalScore}/{maxTotalScore}</span>
                </div>
                <span className="text-xs text-[#AABBCC]">(Verified Architect)</span>
                <svg
                    className="w-4 h-4 text-secondary group-hover:text-accent transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="aaci-modal-title"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                        {/* Header */}
                        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
                            <div>
                                <h2 id="aaci-modal-title" className="text-xl font-bold text-primary">
                                    Applied AI Competency Index™
                                </h2>
                                <p className="text-sm text-secondary">
                                    Score: <span className="font-semibold text-primary">{totalScore}/{maxTotalScore}</span> (Verified Architect)
                                </p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 text-secondary hover:text-primary hover:bg-background rounded-lg transition-colors"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto max-h-[calc(90vh-140px)] px-6 py-4">
                            {/* Description */}
                            <p className="text-secondary text-sm mb-6 leading-relaxed">
                                The AACI measures verified implementation capability across five weighted pillars. This is not a self-assessment. It is based on documented systems, deployments, and revenue impact.
                            </p>

                            {/* Scoring Breakdown */}
                            <div className="space-y-6">
                                {scoringPillars.map((pillar) => (
                                    <div key={pillar.name} className="border border-border rounded-xl p-4">
                                        {/* Pillar Header */}
                                        <div className="flex items-center justify-between mb-3">
                                            <div>
                                                <h3 className="font-semibold text-primary">{pillar.name}</h3>
                                                <span className="text-xs text-secondary">({pillar.weight}% weight)</span>
                                            </div>
                                            <span className="text-lg font-bold text-accent">
                                                {pillar.score}/{pillar.maxScore}
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full h-2 bg-background rounded-full mb-4 overflow-hidden">
                                            <div
                                                className="h-full bg-accent rounded-full transition-all duration-500"
                                                style={{ width: `${(pillar.score / pillar.maxScore) * 100}%` }}
                                            />
                                        </div>

                                        {/* Details */}
                                        <ul className="space-y-2">
                                            {pillar.details.map((detail, idx) => (
                                                <li key={idx} className="text-sm">
                                                    <span className="font-medium text-primary">{detail.label}:</span>{' '}
                                                    <span className="text-secondary">{detail.value}</span>
                                                    {detail.links && (
                                                        <span className="ml-1">
                                                            ({detail.links.map((link, linkIdx) => (
                                                                <span key={linkIdx}>
                                                                    <a
                                                                        href={link.url}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-accent hover:underline"
                                                                    >
                                                                        {link.text}
                                                                    </a>
                                                                    {linkIdx < detail.links.length - 1 && ', '}
                                                                </span>
                                                            ))})
                                                        </span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4">
                            <p className="text-xs text-secondary text-center">
                                This scoring methodology is transparent and auditable. The 2-point gap (to 100) is reserved for published research, major conference speaking, platforms serving 1,000+ customers, or recognized industry thought leadership.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
