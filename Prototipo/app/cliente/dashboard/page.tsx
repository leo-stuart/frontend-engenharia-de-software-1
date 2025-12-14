"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Package, Search, MapPin, Clock, Calendar } from "lucide-react"

export default function ClienteDashboard() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-blue-400" />
            <span className="font-semibold text-white">Portal do Cliente</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Maria Santos</span>
            <Link href="/cliente/login">
              <Button variant="ghost" size="sm" className="text-slate-400">
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <Card className="bg-slate-900 border-slate-800 p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Rastrear Pedido</h2>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Digite o número do pedido..."
                className="bg-slate-800 border-slate-700 text-white pl-10"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Rastrear</Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link href="/cliente/estimativa">
            <Card className="p-6 bg-slate-900 border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-blue-500/10">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Estimativa de Entrega</h3>
                  <p className="text-sm text-slate-400">Calcular prazo</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/cliente/agendar">
            <Card className="p-6 bg-slate-900 border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-green-500/10">
                  <Calendar className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Agendar Entrega</h3>
                  <p className="text-sm text-slate-400">Escolher horário</p>
                </div>
              </div>
            </Card>
          </Link>

          <Card className="p-6 bg-slate-900 border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-500/10">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Meus Endereços</h3>
                <p className="text-sm text-slate-400">Gerenciar locais</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Active Orders */}
        <h3 className="text-lg font-semibold text-white mb-4">Pedidos Ativos</h3>
        <div className="space-y-4">
          <Card className="bg-slate-900 border-slate-800">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-white mb-1">Pedido #78945</h4>
                  <p className="text-sm text-slate-400">Notebook Dell Inspiron 15</p>
                </div>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Em Trânsito</Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Saiu para entrega</p>
                    <p className="text-xs text-slate-500">Hoje, 11:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">Previsão de entrega</p>
                    <p className="text-xs text-slate-500">Hoje, 15:30</p>
                  </div>
                </div>
              </div>

              <Link href="/cliente/rastrear/78945">
                <Button variant="outline" className="w-full mt-4 border-slate-700 text-slate-300 bg-transparent">
                  Ver Detalhes
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-white mb-1">Pedido #78920</h4>
                  <p className="text-sm text-slate-400">Mouse Logitech MX Master</p>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Processando</Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Pedido confirmado</p>
                    <p className="text-xs text-slate-500">Ontem, 16:45</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">Previsão de envio</p>
                    <p className="text-xs text-slate-500">Amanhã</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4 border-slate-700 text-slate-300 bg-transparent">
                Ver Detalhes
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
