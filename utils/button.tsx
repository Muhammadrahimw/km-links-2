import Link from "next/link";

export function Button({
	href,
	title,
	subtitle,
	icon,
	color,
}: {
	href: string;
	title: string;
	subtitle?: string;
	icon?: React.ReactNode;
	color: string;
}) {
	return (
		<Link
			href={href}
			target={href.startsWith("http") ? "_blank" : undefined}
			rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
			className="group relative block w-full rounded-xl px-5 py-4 text-white bg-[#19183b]/95 backdrop-blur-md overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(25,24,59,0.6)] hover:bg-[#252454] focus:outline-none focus:ring-2 focus:ring-[#f0f5f8]/30 focus:ring-offset-2 focus:ring-offset-transparent">
			{/* Gradient border effect */}
			<div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#333132]/20 via-[#f0f5f8]/10 to-[#333132]/20" />
			</div>

			{/* Shine effect */}
			<div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-[#f0f5f8]/15 to-transparent" />

			{/* Content */}
			<div className="relative flex flex-col items-center text-center">
				<div
					className="flex items-center gap-2 font-normal tracking-wide transition-transform duration-300 group-hover:scale-105"
					style={{color}}>
					<span className="transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
						{icon}
					</span>
					{title}
				</div>
				{subtitle && (
					<div
						className="text-sm font-light opacity-80 mt-1 tracking-wide transition-opacity duration-300 group-hover:opacity-100"
						style={{color}}>
						{subtitle}
					</div>
				)}
			</div>
		</Link>
	);
}
