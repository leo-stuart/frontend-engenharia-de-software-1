"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Clock, CheckCircle2, AlertCircle } from "lucide-react"

export default function SuporteDashboard() {
  const tickets = [
    {
      id: 1,
      driver: "João Silva",
      vehicle: "VH-001",
      issue: "Problema com navegação GPS",
      status: "open",
      priority: "high",
      time: "5 min",
    },
    {
      id: 2,
      driver: "Pedro Costa",
      vehicle: "VH-002",
      issue: "Dúvida sobre rota alternativa",
      status: "open",
      priority: "medium",
      time: "12 min",
    },
    {
      id: 3,
      driver: "Ana Lima",
      vehicle: "VH-004",
      issue: "Ajuda com comprovante de entrega",
      status: "responding",
      priority: "high",
      time: "18 min",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-yellow-400" />
            <span className="font-semibold text-white">Portal de Suporte</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">● Disponível</Badge>
            <span className="text-sm text-slate-400">Fernanda Silva</span>
            <Link href="/suporte/login">
              <Button variant="ghost" size="sm" className="text-slate-400">
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Chamados Abertos</p>
              <AlertCircle className="h-5 w-5 text-red-400" />
            </div>
            <p className="text-3xl font-bold text-white">8</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Em Atendimento</p>
              <Clock className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-white">3</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Resolvidos Hoje</p>
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white">24</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Tempo Médio</p>
              <Clock className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-white">8min</p>
          </Card>
        </div>

        {/* Tickets Queue */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Fila de Atendimento</h3>
          <div className="space-y-3">
            {tickets.map((ticket) => (
              <Card
                key={ticket.id}
                className="bg-slate-900 border-slate-800 p-4 hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 rounded-full bg-yellow-500/10">
                      <MessageSquare className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-white">{ticket.driver}</p>
                        <span className="text-sm text-slate-500">•</span>
                        <span className="text-sm text-slate-400">{ticket.vehicle}</span>
                        <Badge
                          variant="outline"
                          className={
                            ticket.priority === "high"
                              ? "border-red-500/30 text-red-400"
                              : "border-yellow-500/30 text-yellow-400"
                          }
                        >
                          {ticket.priority === "high" ? "Alta" : "Média"}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-300 mb-2">{ticket.issue}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="h-3 w-3" />
                        <span>Aguardando há {ticket.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {ticket.status === "responding" ? (
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Em Atendimento</Badge>
                    ) : (
                      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Aguardando</Badge>
                    )}
                    <Link href={`/suporte/chat/${ticket.id}`}>
                      <Button className="bg-yellow-600 hover:bg-yellow-700">
                        {ticket.status === "responding" ? "Continuar" : "Atender"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
