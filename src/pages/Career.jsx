import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function CompetencyItem({ text }) {
    return (
        <div className="flex items-start gap-2">
            <span className="text-[#0A2540] mt-1 shrink-0 text-xs">&#9679;</span>
            <span className="text-xs sm:text-sm text-gray-700">{text}</span>
        </div>
    )
}

function HighlightItem({ text }) {
    return (
        <div className="flex items-start gap-2">
            <span className="text-[#0A2540] mt-1 shrink-0 text-xs">&#9679;</span>
            <span className="text-xs sm:text-sm text-gray-700">{text}</span>
        </div>
    )
}

function ExperienceEntry({ company, location, title, dates, bullets, last = false }) {
    return (
        <div className={`resume-experience-entry ${last ? '' : 'mb-5'}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#1a2332]">{title}</h3>
                    <p className="text-xs sm:text-[15px] text-gray-700">
                        {company}{' '}
                        <span className="text-gray-400">&mdash; {location}</span>
                    </p>
                </div>
                <span className="text-xs sm:text-sm text-gray-400 italic shrink-0">{dates}</span>
            </div>
            <ul className="mt-2 space-y-1.5">
                {bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-relaxed sm:leading-7">
                        <span className="text-gray-300 mt-1 shrink-0">&#8211;</span>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Career() {
    useEffect(() => {
        const originalTitle = document.title
        document.title = 'Wade Kerzie | Career History'
        return () => { document.title = originalTitle }
    }, [])

    const handleDownloadPDF = () => {
        window.open('/resume.pdf', '_blank')
    }

    return (
        <>
            <header className="text-center mb-6">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors mb-6">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </Link>
            </header>

            <div className="max-w-[800px] mx-auto bg-white/90 backdrop-blur-sm rounded-2xl border border-border shadow-card overflow-hidden mb-10">
                {/* Header Bar */}
                <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <div className="min-w-0">
                        <h1 className="text-lg font-bold text-[#1a2332] truncate">
                            Wade Kerzie
                        </h1>
                        <p className="text-xs text-gray-500 truncate">
                            McKinney, TX &middot; wade@kerzie.ai &middot; 214-668-7986 &middot; pro.wadekerzie.com
                        </p>
                    </div>
                    <button
                        onClick={handleDownloadPDF}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0A2540] text-white text-xs font-medium rounded-lg hover:bg-[#0d3050] transition-colors shrink-0"
                    >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download PDF
                    </button>
                </div>

                {/* Content */}
                <div className="px-6 py-6 sm:px-8">
                    {/* Title */}
                    <div className="text-center mb-6">
                        <h1 className="text-2xl sm:text-4xl font-bold text-[#1a2332] tracking-tight">
                            WADE KERZIE
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
                            McKinney, TX &nbsp;|&nbsp; wade@kerzie.ai &nbsp;|&nbsp; 214-668-7986 &nbsp;|&nbsp; pro.wadekerzie.com
                        </p>
                        <span className="inline-block mt-2 px-3 py-1 bg-[#0A2540]/5 text-[#0A2540] text-xs font-medium rounded-full border border-[#0A2540]/10">
                            Applied AI Competency Index&trade;: 98/100 (Verified Architect)
                        </span>
                    </div>

                    <hr className="border-gray-200 mb-6" />

                    {/* Summary */}
                    <section className="mb-6">
                        <h2 className="resume-section-header text-xs sm:text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-3">
                            AI Systems &amp; Revenue Operations Leader
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed sm:leading-7">
                            Founder and operator with 30+ years in enterprise and SMB sales leadership and applied AI systems development. Generated $380M+ in career revenue, including nine $12M+ strategic deals. Known for building scalable revenue engines, deploying production AI workflows, and translating emerging technology into repeatable business outcomes.
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed sm:leading-7 mt-2">
                            Currently installing NVIDIA&rsquo;s NemoClaw AI agent platform for mid-market construction and logistics companies. Available for fractional AI leadership, contract engagements, and advisory roles.
                        </p>
                    </section>

                    <hr className="border-gray-200 mb-6" />

                    {/* Core Competencies */}
                    <section className="mb-6">
                        <h2 className="resume-section-header text-xs sm:text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-3">
                            Core Competencies
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                            <CompetencyItem text="Applied AI System Design & Deployment" />
                            <CompetencyItem text="GTM Strategy & Sales Enablement" />
                            <CompetencyItem text="Revenue Operations & Forecasting" />
                            <CompetencyItem text="Enterprise & Public-Sector Sales" />
                            <CompetencyItem text="Voice, CRM & Workflow Orchestration" />
                            <CompetencyItem text="NVIDIA NemoClaw / AI Agent Infrastructure" />
                            <CompetencyItem text="Multi-Stakeholder Negotiation" />
                            <CompetencyItem text="Team Leadership & Training" />
                        </div>
                    </section>

                    <hr className="border-gray-200 mb-6" />

                    {/* Career Highlights */}
                    <section className="mb-6">
                        <h2 className="resume-section-header text-xs sm:text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-3">
                            Career Highlights
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                            <HighlightItem text="$380M+ lifetime sales revenue" />
                            <HighlightItem text="8x Honors Club | 5x President's Club" />
                            <HighlightItem text="9 enterprise deals exceeding $12M" />
                            <HighlightItem text="AI-driven sales systems & training" />
                            <HighlightItem text="Led teams of 10-12 to sustained quota" />
                            <HighlightItem text="Led POCs with Apple and LinkedIn" />
                        </div>
                    </section>

                    <hr className="border-gray-200 mb-6" />

                    {/* Professional Experience */}
                    <section className="mb-6">
                        <h2 className="resume-section-header text-xs sm:text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-4">
                            Professional Experience
                        </h2>

                        <ExperienceEntry
                            company="Kerzie Consulting / Kerzie AI Solutions"
                            location="McKinney, TX"
                            title="Founder & VP, Sales and Operations"
                            dates="2023-Present"
                            bullets={[
                                'Design and deploy AI-powered revenue and communication systems for mid-market and SMB companies',
                                'Installing NVIDIA NemoClaw AI agent platform for construction and logistics operations ($22,500 turnkey, 1-week deployment)',
                                'Lead development and production deployment of proprietary platforms: Unison (unified communications), STQ (white-label quoting), Zorli (consumer mobile app)',
                                'First Unison production client launched January 2025 with multi-channel AI orchestration (voice, SMS, email, chat, social media)',
                                'Deliver executive and frontline AI training programs for enterprise teams (Kat Fabricators, Architectural Security Group, Association of Directory Publishers)',
                                'Zapier Silver Solution Partner with focus on automation and workflow optimization',
                            ]}
                        />

                        <ExperienceEntry
                            company="EXFO"
                            location="Richardson, TX"
                            title="Director, Fiber Monitoring Business Development"
                            dates="2022-2023"
                            bullets={[
                                'Led enterprise POCs with Apple and LinkedIn for next-generation monitoring and analytics platforms',
                                'Positioned fiber monitoring solutions for hyperscale infrastructure deployments',
                            ]}
                        />

                        <ExperienceEntry
                            company="Calix"
                            location="San Jose, CA"
                            title="Area Vice President"
                            dates="2019-2022"
                            bullets={[
                                'Led $60M quota sales organization across broadband service provider vertical',
                                'Directed cloud platform GTM strategy for AXOS and Revenue EDGE platforms',
                                'Managed team of 10+ account executives across Central US territory',
                            ]}
                        />

                        <ExperienceEntry
                            company="Ribbon Communications (Sonus)"
                            location="Westford, MA"
                            title="Senior Sales Director"
                            dates="2007-2019"
                            bullets={[
                                'Generated $146M+ in strategic account revenue over 12-year tenure',
                                'Closed 8 deals exceeding $12M with major carriers and enterprises',
                                '10 consecutive years exceeding quota (2009-2018)',
                                'Led complex multi-stakeholder negotiations with C-suite and procurement teams',
                            ]}
                        />

                        <ExperienceEntry
                            company="MicroTRAKgps"
                            location="Dallas, TX"
                            title="Director, Sales & Business Development"
                            dates="2005-2007"
                            bullets={[
                                'Launched GPS fleet tracking platform targeting transportation and logistics verticals',
                                'Built channel partner network and direct sales motion',
                            ]}
                        />

                        <ExperienceEntry
                            company="DGI Technologies"
                            location="Various Locations"
                            title="Account Manager / North America Sales Manager"
                            dates="1996-2005"
                            bullets={[
                                'Grew revenue from $4M to $29M over 9-year period',
                                '1998 Salesperson of the Year',
                                'Managed national accounts and built enterprise sales pipeline',
                            ]}
                            last
                        />
                    </section>

                    <hr className="border-gray-200 mb-6" />

                    {/* Technical Proficiencies */}
                    <section className="mb-6">
                        <h2 className="resume-section-header text-xs sm:text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-3">
                            Technical Proficiencies
                        </h2>
                        <div className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed sm:leading-7">
                            <p>
                                <span className="font-semibold text-[#1a2332]">AI &amp; Automation:</span>{' '}
                                NVIDIA NemoClaw, GoHighLevel, Zapier, Make, GPT-4, Claude, Anthropic API, AI agent orchestration
                            </p>
                            <p>
                                <span className="font-semibold text-[#1a2332]">Development:</span>{' '}
                                Git/GitHub, Vercel, Vite, React, API integrations, mobile app deployment
                            </p>
                            <p>
                                <span className="font-semibold text-[#1a2332]">Platforms:</span>{' '}
                                Salesforce, HubSpot, voice/SMS orchestration, workflow automation, AWS
                            </p>
                        </div>
                    </section>

                    <hr className="border-gray-200 mb-6" />

                    {/* Education */}
                    <section className="mb-2">
                        <h2 className="resume-section-header text-xs sm:text-sm font-bold text-[#1a2332] uppercase tracking-widest mb-3">
                            Education &amp; Certifications
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed sm:leading-7">
                            <span className="font-semibold text-[#1a2332]">University of Akron</span>{' '}
                            &mdash; BS, Business Finance | Division I Scholarship Athlete (Golf)
                        </p>
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed sm:leading-7 mt-2">
                            <span className="font-semibold text-[#1a2332]">Sales &amp; Negotiation Training:</span>{' '}
                            MEDDPICC, Miller Heiman, SPIN Selling, Karrass Negotiation, Solution Selling, Predictive Index
                        </p>
                    </section>
                </div>
            </div>

            <div className="text-center mb-8">
                <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                    See what I've built
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </>
    )
}
