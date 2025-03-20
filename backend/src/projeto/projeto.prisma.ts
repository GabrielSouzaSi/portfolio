import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"
import { Projeto } from "@core"

@Injectable()
export class ProjetoPrisma {
	constructor(private readonly prisma: PrismaProvider) {}

	async obterProjetos(): Promise<Projeto[]> {
		return this.prisma.projetos.findMany() as any
	}

	async obterPorId(id: number): Promise<Projeto | null> {
		return this.prisma.projetos.findUnique({
			where: {
				id,
			},
			include: {
				tecnologia: true,
			},
		}) as any
	}
}
