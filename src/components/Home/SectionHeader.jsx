export default function SectionHeader({ title, subtitle, linkText, linkUrl }) {
    return (
        <div className="flex items-end justify-between mb-6 md:mb-8">
            <div>
                {subtitle && (
                    <span className="text_color font-semibold text-sm tracking-uppercase mb-2 block uppercase tracking-wider">
                        {subtitle}
                    </span>
                )}
                <h2 className="mobile_heading lg_heading">
                    {title}
                </h2>
            </div>

            {linkText && linkUrl && (
                <a href={linkUrl} className="hidden md:flex items-center gap-1 text_color font-semibold hover:text-[var(--theme-color)] transition-colors group">
                    {linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6" /></svg>
                </a>
            )}
        </div>
    );
}
