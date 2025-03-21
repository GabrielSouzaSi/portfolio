import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image
					className="rounded-3xl"
					src="/minha-foto.jpg"
					alt="Foto de perfil"
					fill
				/>
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Gabriel Souza
					</span>
					<span>Desenvolvedor Mobile</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					🧠 Interessado por: Desenvolvimento de software, tecnologias
					e programação. 💼 Experiência em: Desenvolvimento
					Mobile(React Native), Back-End e Front-End. 📚 Atualmente
					estudando: APIs em NodeJS, Java e bancos de dados.
				</p>
			</div>
		</div>
	)
}
