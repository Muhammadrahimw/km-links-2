import {Action, getCompany} from "@/services/link";
import {Button} from "@/utils/button";
import Image from "next/image";

export default async function Home() {
	const received = await getCompany();

	const defaults = {
		logo: "/ogo.png",
		handle: "KengMakon",
		phone: "+998 (98) 300 36 76",
		phoneHref: "tel:+998983003676",
		catalog: "https://km-catalog.netlify.app",
		socials: {
			telegram: "https://t.me/kengmakonuz",
			instagram: "https://www.instagram.com/kengmakon.uzb/",
			facebook: "https://www.facebook.com/profile.php?id=100085820027934",
		},
	} as const;

	const color = "#fff";
	const logo = received.logo || defaults.logo;
	const handle = received.handle || defaults.handle;

	const actions: Action[] =
		received.actions && received.actions.length > 0
			? received.actions
			: [
					{
						id: "call",
						title: "Звонок",
						subtitle: "Позвоните для подробной информации",
						href: defaults.phoneHref,
						icon: (
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z" />
							</svg>
						),
					},
					{
						id: "catalog",
						title: "Каталог",
						subtitle: "Ознакомьтесь с нашим каталогом",
						href: defaults.catalog,
						icon: (
							<svg
								width="19"
								height="19"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M5.5,18 C4.11928813,18 3,19.1192881 3,20.5 C3,21.8807119 4.11928813,23 5.5,23 L22,23 M3,20.5 L3,3.5 C3,2.11928813 4.11928813,1 5.5,1 L21,1 L21,18.0073514 L5.49217286,18.0073514 M20.5,18 C19.1192881,18 18,19.1192881 18,20.5 C18,21.8807119 19.1192881,23 20.5,23 L20.5,23" />
							</svg>
						),
					},
					{
						id: "profile",
						title: "Профиль компании",
						subtitle: "Узнайте больше о деятельности компании",
						href: `https://km-profile-app.netlify.app`,
						icon: (
							<svg
								width="19"
								height="19"
								viewBox="0 0 512 512"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M463.952,90.044H353.617c-19.605-118.99-175.638-118.934-195.236,0H48.048C21.554,90.044,0,111.598,0,138.091v325.04c0,26.493,21.554,48.048,48.048,48.048h415.905c26.494,0,48.048-21.554,48.048-48.048v-325.04C512,111.598,490.446,90.044,463.952,90.044z M196.516,89.049c11.045-67.023,107.925-67.016,118.969-0.001l0.165,0.995H196.352L196.516,89.049z M474.537,463.131c0,5.837-4.748,10.585-10.585,10.585H48.048c-5.837,0-10.585-4.748-10.585-10.585V292.912l162.867,41.589v24.5c0,10.345,8.387,18.732,18.732,18.732h73.875c10.345,0,18.732-8.387,18.732-18.732v-24.5l162.867-41.589V463.131z M237.794,340.27v-52.742h36.412v52.742H237.794z M474.538,254.247l-162.869,41.589v-27.04c0-10.345-8.387-18.732-18.732-18.732h-73.875c-10.345,0-18.732,8.387-18.732,18.732v27.04L37.463,254.247V138.091c0-5.836,4.748-10.583,10.585-10.583c5.626,0,407.533,0,415.905,0c5.837,0,10.585,4.748,10.585,10.585V254.247z" />
							</svg>
						),
					},
			  ];

	const socials =
		received.socials && received.socials.length > 0
			? received.socials
			: [
					{
						id: "telegram",
						title: "Telegram",
						subtitle: "Подпишитесь на наш канал",
						href: defaults.socials.telegram,
					},
					{
						id: "instagram",
						title: "Instagram",
						subtitle: "Следите за новостями",
						href: defaults.socials.instagram,
					},
					{
						id: "facebook",
						title: "Facebook",
						subtitle: "Будьте в курсе новостей",
						href: defaults.socials.facebook,
					},
			  ];
	return (
		<main className="min-h-dvh flex justify-center bg-white">
			<video
				autoPlay
				muted
				loop
				playsInline
				className="fixed top-0 left-0 w-full h-full object-cover">
				<source src="/bg-video-no_audio.mp4" type="video/mp4" />
			</video>
			<div className="fixed top-0 left-0 w-full h-full backdrop-blur-3xl bg-[#ffffff27]"></div>
			<div className="w-full max-w-[36rem] px-4 sm:px-6 md:px-8 py-10 text-xl pt-20 relative z-20 mt-0">
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute top-0 left-0 w-full h-full object-cover">
					<source src="/bg-video-no_audio.mp4" type="video/mp4" />
				</video>
				<div className="flex flex-col items-center gap-3">
					<div
						className="z-10 bg-[#0a3d69be] backdrop-blur-md"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: "50%",
							overflow: "hidden",
							width: "150px",
							height: "150px",
						}}>
						{logo && (
							<Image
								className="z-10"
								width={102}
								height={70}
								src={logo}
								alt={`${received.name ?? handle} logo`}
							/>
						)}
					</div>

					<h1 className="text-xl font-medium text-white z-10">
						{handle.replace(`m`, `m`.toUpperCase())}
					</h1>
				</div>

				<section className="mt-6 space-y-4">
					{actions.map((a: Action) => (
						<Button
							key={a.id}
							href={a.href}
							title={a.title}
							subtitle={a.subtitle}
							icon={a.icon}
							color={color}
						/>
					))}
				</section>

				<div className="my-8 flex items-center" aria-hidden>
					<div className="h-px w-[20em] mx-auto bg-gray-500 z-10" />
				</div>

				<section className="space-y-4">
					{socials.map(
						(s: {
							id: string;
							title: string;
							subtitle?: string;
							href: string;
						}) => (
							<Button
								key={s.id}
								href={s.href}
								title={s.title}
								subtitle={s.subtitle}
								color={color}
							/>
						)
					)}
				</section>

				{received.footer && (
					<footer className="text-center text-xs text-black/50 mt-10">
						{received.footer.text}{" "}
						<a
							className="underline"
							href={received.footer.href}
							target="_blank"
							rel="noopener noreferrer">
							{received.footer.linkText}
						</a>
					</footer>
				)}
			</div>
		</main>
	);
}
