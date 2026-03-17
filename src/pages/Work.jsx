import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const projects = [
    {
        title: 'NemoClaw Command Center',
        tag: 'Current',
        tagColor: 'bg-green-100 text-green-800',
        description: 'Installing NVIDIA\'s open-source AI agent platform for construction and logistics companies. 1-week turnkey deployment on client infrastructure.',
        details: [
            'Full platform deployment with security hardening and SSO',
            'AI agents for dispatch, estimating, documentation, and customer service',
            'Post-install training and 30/60/90-day support tier programs',
        ],
        tech: ['NVIDIA NemoClaw', 'OpenClaw', 'On-Premise Infrastructure', 'SSO Integration', 'API Orchestration'],
        link: 'https://kerzie.ai/nemoclaw',
        linkLabel: 'View NemoClaw',
    },
    {
        title: 'Unison',
        tag: 'Live',
        tagColor: 'bg-blue-100 text-blue-800',
        description: 'Unified communications platform with multi-channel AI orchestration. Voice, SMS, email, chat, and social media in a single system.',
        details: [
            'First production client launched January 2025',
            'Real-time voice AI agent handling inbound calls',
            'Multi-channel message routing and response automation',
        ],
        tech: ['GoHighLevel', 'Voice AI', 'SMS/Email Orchestration', 'Zapier', 'API Integration'],
        link: 'https://kerzie.ai',
        linkLabel: 'View Kerzie AI',
    },
    {
        title: 'Ad2Action',
        tag: 'Live',
        tagColor: 'bg-blue-100 text-blue-800',
        description: 'Multi-channel lead qualification system combining outbound SMS campaigns with an inbound voice AI agent for automated lead scoring and routing.',
        details: [
            'Deployed for Kat Fabricators — live in production',
            'Outbound SMS + inbound voice AI agent pipeline',
            'Automated lead scoring, qualification, and CRM routing',
        ],
        tech: ['Voice AI', 'SMS Automation', 'GoHighLevel', 'Lead Scoring', 'CRM Integration'],
    },
    {
        title: 'Zorli',
        tag: 'Shipping',
        tagColor: 'bg-purple-100 text-purple-800',
        description: 'Consumer mobile application for personal information management with AI-powered semantic retrieval. Launching on App Store and Google Play.',
        details: [
            'AWS S3 backend with encryption at rest and in transit',
            'AI-powered semantic search for personal data retrieval',
            'Led architecture and development team coordination',
        ],
        tech: ['React Native', 'AWS S3', 'Encryption', 'Semantic Retrieval', 'App Store / Google Play'],
    },
    {
        title: 'AI Training Programs',
        tag: 'Ongoing',
        tagColor: 'bg-amber-100 text-amber-800',
        description: 'Structured AI training curriculum delivered to enterprise teams. In-person workshops, live sessions, and published online content.',
        details: [
            'Kat Fabricators, Architectural Security Group (30+ attendees), Association of Directory Publishers',
            'Published Notion curriculum and 2-hour YouTube workshop',
            'Multiple delivery formats: conference room, live virtual, self-paced',
        ],
        tech: ['Curriculum Design', 'Workshop Facilitation', 'Notion', 'YouTube', 'Enterprise Training'],
        link: 'https://youtu.be/ZAGF-mwD63E',
        linkLabel: 'Watch Workshop',
    },
    {
        title: 'STQ',
        tag: 'Built',
        tagColor: 'bg-gray-100 text-gray-700',
        description: 'White-label quoting system for service businesses. Automated proposal generation with built-in ROI calculations and client value frameworks.',
        details: [
            'Configurable pricing engine with margin calculations',
            'Client-facing proposal output with ROI projections',
            '$2,500 setup + $1,000/month recurring model',
        ],
        tech: ['GoHighLevel', 'Zapier', 'Proposal Automation', 'White-Label SaaS'],
    },
]

function ProjectCard({ project }) {
    return (
        <div className="bg-white/80 backdrop-blur-sm border border-border rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full shrink-0 ml-3 ${project.tagColor}`}>
                    {project.tag}
                </span>
            </div>

            <p className="text-sm text-secondary leading-relaxed mb-4">
                {project.description}
            </p>

            <ul className="space-y-1.5 mb-4">
                {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-secondary leading-relaxed">
                        <span className="text-accent mt-0.5 shrink-0">&#8211;</span>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-medium text-secondary/80 bg-background px-2 py-0.5 rounded-full border border-border/50">
                        {t}
                    </span>
                ))}
            </div>

            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                >
                    {project.linkLabel || 'View Project'}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            )}
        </div>
    )
}

export default function Work() {
    useEffect(() => {
        const originalTitle = document.title
        document.title = 'Wade Kerzie | What I\'ve Built'
        return () => { document.title = originalTitle }
    }, [])

    return (
        <>
            <header className="text-center mb-8">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </Link>
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-3">
                    What I've Built
                </h1>
                <p className="text-secondary text-sm leading-relaxed max-w-lg mx-auto">
                    Production systems, AI deployments, and training programs. Not concepts or prototypes — shipped products with real users and real revenue.
                </p>
            </header>

            <div className="space-y-4 max-w-xl mx-auto mb-10">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            <div className="text-center mb-8">
                <Link
                    to="/career"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                    View full career history
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </>
    )
}
