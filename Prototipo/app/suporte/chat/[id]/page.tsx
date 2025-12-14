"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send, Truck, MapPin, Clock, MessageSquare, User } from "lucide-react"

interface PageProps {
  params: {
    id: string
  }
}

export default function ChatPage({ params }: PageProps) {
  const ticketId = params.id
  const [message, setMessage] = useState("")

  const messages = [
    {
      id: 1,
      sender: "driver",
      name: "João Silva",
      text: "Olá, estou tendo problemas com a navegação GPS. O aplicativo não está mostrando a rota correta.",
      time: "14:25",
    },
    {
      id: 2,
      sender: "support",
      name: "Fernanda Silva",
      text: "Olá João! Vou te ajudar com isso. Pode me informar qual é o endereço de destino que você está tentando acessar?",
      time: "14:26",
    },
    {
      id: 3,
      sender: "driver",
      name: "João Silva",
      text: "O destino é Rua das Flores, 123, no Rio de Janeiro. O GPS está mostrando uma rota muito longa.",
      time: "14:28",
    },
    {
      id: 4,
      sender: "support",
      name: "Fernanda Silva",
      text: "Entendi. Vou verificar a rota otimizada para você. Enquanto isso, tente atualizar o aplicativo fechando e abrindo novamente.",
      time: "14:30",
    },
  ]

  const driverInfo = {
    name: "João Silva",
    vehicle: "VH-001",
    location: "SP-RJ KM 180",
    status: "Em viagem",
    issue: "Problema com navegação GPS",
    priority: "high",
  }

  const quickResponses = [
    "Vou verificar isso para você.",
    "Pode me dar mais detalhes?",
    "Vou encaminhar para a equipe técnica.",
    "Tente reiniciar o aplicativo.",
  ]

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, this would send the message
      setMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/suporte/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-yellow-400" />
            <h1 className="text-lg font-semibold text-white">Atendimento #{ticketId}</h1>
          </div>
          <Badge
            className={
              driverInfo.priority === "high"
                ? "bg-red-500/20 text-red-400 border-red-500/30"
                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
            }
          >
            {driverInfo.priority === "high" ? "Alta Prioridade" : "Média Prioridade"}
          </Badge>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "support" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-4 ${
                    msg.sender === "support"
                      ? "bg-cyan-600 text-white"
                      : "bg-slate-800 text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold">{msg.name}</span>
                    <span className="text-xs opacity-70">{msg.time}</span>
                  </div>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Responses */}
          <div className="border-t border-slate-800 p-4">
            <div className="flex flex-wrap gap-2 mb-4">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outline"
                  onClick={() => setMessage(response)}
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent text-xs"
                >
                  {response}
                </Button>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={handleSend} className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="bg-slate-800 border-slate-700 text-white flex-1"
              />
              <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Driver Info Sidebar */}
        <div className="w-80 border-l border-slate-800 bg-slate-900 p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold text-white mb-6">Informações do Motorista</h3>

          <Card className="bg-slate-800 border-slate-700 p-4 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                <User className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{driverInfo.name}</p>
                <p className="text-xs text-slate-400">Motorista</p>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-400 mb-1">Veículo</p>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-slate-400" />
                <p className="text-white font-medium">{driverInfo.vehicle}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Localização Atual</p>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <p className="text-white font-medium">{driverInfo.location}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Status</p>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                {driverInfo.status}
              </Badge>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Problema Reportado</p>
              <p className="text-white">{driverInfo.issue}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <Button
              variant="outline"
              className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent"
            >
              Resolver Chamado
            </Button>
            <Button
              variant="outline"
              className="w-full mt-2 border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              Transferir para Técnico
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

