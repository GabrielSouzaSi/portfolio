"use server"
import Mensagem from "@/model/Mensagem"

export default async function conversar(
	chatId: string,
	mensagem: Mensagem
): Promise<string | null> {
	const webhookUrl = "http://localhost:5678/webhook/assistente-pessoal"
	if (!webhookUrl) return null

	const resposta = await fetch(webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatId,
			message: mensagem.texto,
		}),
	})

	const msg = await resposta.json()
	return msg.resposta
}
