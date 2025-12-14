"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Package, CheckCircle2, Clock, MessageSquare, Navigation } from "lucide-react"

export default function MotoristaDashboard() {
  const [activeTrip, setActiveTrip] = useState(true)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-orange-500" />
            <span className="font-semibold text-white">Portal do Motorista</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">João Silva</span>
            <Link href="/motorista/login">
              <Button variant="ghost" size="sm" className="text-slate-400">
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Status da Viagem */}
        <Card className="mb-6 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border-orange-500/20">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white mb-1">Viagem Ativa</h2>
                <p className="text-sm text-slate-400">Rota: São Paulo → Rio de Janeiro</p>
              </div>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Em Andamento</Badge>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">347 km</p>
                <p className="text-xs text-slate-400">Restantes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4h 30min</p>
                <p className="text-xs text-slate-400">Tempo Estimado</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">15:30</p>
                <p className="text-xs text-slate-400">Chegada Prevista</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Menu Rápido */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link href="/motorista/checklist">
            <Card className="p-6 bg-slate-900 border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer">
              <div className="flex flex-col items-center text-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-blue-400" />
                <span className="text-sm font-medium text-white">Checklist</span>
              </div>
            </Card>
          </Link>

          <Link href="/motorista/navegacao">
            <Card className="p-6 bg-slate-900 border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer">
              <div className="flex flex-col items-center text-center gap-3">
                <Navigation className="h-8 w-8 text-green-400" />
                <span className="text-sm font-medium text-white">Navegação</span>
              </div>
            </Card>
          </Link>

          <Link href="/motorista/entrega">
            <Card className="p-6 bg-slate-900 border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer">
              <div className="flex flex-col items-center text-center gap-3">
                <Package className="h-8 w-8 text-orange-400" />
                <span className="text-sm font-medium text-white">Registrar Entrega</span>
              </div>
            </Card>
          </Link>

          <Link href="/motorista/suporte">
            <Card className="p-6 bg-slate-900 border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer">
              <div className="flex flex-col items-center text-center gap-3">
                <MessageSquare className="h-8 w-8 text-yellow-400" />
                <span className="text-sm font-medium text-white">Suporte</span>
              </div>
            </Card>
          </Link>
        </div>

        {/* Entregas Pendentes */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Entregas Pendentes</h3>

          <Card className="bg-slate-900 border-slate-800">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded bg-orange-500/10">
                  <Package className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium text-white">Pedido #78945</p>
                  <p className="text-sm text-slate-400">Rua das Flores, 123 - Rio de Janeiro</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-3 w-3 text-slate-500" />
                    <span className="text-xs text-slate-500">Previsão: 15:30</span>
                  </div>
                </div>
              </div>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Ver Detalhes
              </Button>
            </div>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded bg-orange-500/10">
                  <Package className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="font-medium text-white">Pedido #78946</p>
                  <p className="text-sm text-slate-400">Av. Atlântica, 456 - Rio de Janeiro</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-3 w-3 text-slate-500" />
                    <span className="text-xs text-slate-500">Previsão: 16:45</span>
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" className="border-slate-700 text-slate-300 bg-transparent">
                Ver Detalhes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
