export default function ProductCard({ title, description, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 w-full max-w-md mx-auto p-3 rounded-2xl bg-[#1E2035] border border-border hover:border-[#6B9FD4] shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
        >
            {/* Content */}
            <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm text-white group-hover:text-[#6B9FD4] transition-colors truncate">
                        {title}
                    </h3>
                    <span className="shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#2D3154] text-[#AABBCC]">
                        Live
                    </span>
                </div>
                <p className="text-xs text-[#AABBCC] truncate">
                    {description}
                </p>
            </div>

            {/* Arrow */}
            <svg
                className="w-4 h-4 text-[#6B9FD4] group-hover:translate-x-0.5 transition-all shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </a>
    )
}
