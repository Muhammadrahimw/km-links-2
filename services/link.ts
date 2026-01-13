export type Action = {
	id: string;
	title: string;
	subtitle?: string;
	href: string;
	icon?: React.ReactNode;
};

interface CompanyProfile {
	handle: string;
	name?: string;
	primaryColor?: string;
	background?: string;
	logo?: string;
	about?: string;
	actions?: Action[];
	socials?: {id: string; title: string; subtitle?: string; href: string}[];
	footer?: {text: string; linkText: string; href: string};
}

export async function getCompany(): Promise<Partial<CompanyProfile>> {
	return {};
}
