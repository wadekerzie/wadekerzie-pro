import CompetencyBadge from './CompetencyBadge'

export default function ProfileHeader({ bio, showBadge = true, name, image }) {
    return (
        <header className="text-center mb-10">
            {/* Profile Headshot */}
            <img
                src={image || "/headshot.jpg"}
                alt="Wade Kerzie"
                className="w-28 h-28 mx-auto mb-6 rounded-full object-cover ring-4 ring-[#2D3154] shadow-lg"
            />

            {/* Name */}
            <h1 className="font-sans text-4xl md:text-5xl font-semibold text-white mb-3">
                {name || 'Wade Kerzie'}
            </h1>

            {/* Bio */}
            <p className="text-[#6B9FD4] text-lg leading-relaxed mb-2 max-w-md mx-auto">
                {bio || <>Founder. Operator. Builder.</>}
            </p>
            {!bio && (
                <p className="text-[#AABBCC] text-sm leading-relaxed mb-6 max-w-md mx-auto">
                    Production AI deployments. $380M+ career revenue.<br />30 years building and closing.
                </p>
            )}
            {bio && <div className="mb-6" />}

            {/* Competency Badge */}
            {showBadge && (
                <div className="flex justify-center">
                    <CompetencyBadge />
                </div>
            )}
        </header>
    )
}
