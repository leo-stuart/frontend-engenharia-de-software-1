"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Truck, AlertTriangle, Wrench, Star, MapPin } from "lucide-react"

export default function GerenteDashboard() {
  const vehicles = [
    { id: "VH-001", driver: "João Silva", status: "active", location: "SP-RJ KM 180", speed: 85, fuel: 75 },
    { id: "VH-002", driver: "Pedro Costa", status: "active", location: "MG-SP KM 45", speed: 92, fuel: 45 },
    { id: "VH-003", driver: "Carlos Souza", status: "stopped", location: "Posto Graal", speed: 0, fuel: 90 },
    { id: "VH-004", driver: "Ana Lima", status: "active", location: "RJ-ES KM 120", speed: 88, fuel: 30 },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-purple-400" />
            <span className="font-semibold text-white">Portal do Gerente</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Ricardo Oliveira</span>
            <Link href="/gerente/login">
              <Button variant="ghost" size="sm" className="text-slate-400">
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Frota Ativa</p>
              <Truck className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white">24</p>
            <p className="text-xs text-slate-500 mt-1">de 32 veículos</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Entregas Hoje</p>
              <BarChart3 className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-white">156</p>
            <p className="text-xs text-green-400 mt-1">↑ 12% vs ontem</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Manutenções</p>
              <Wrench className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-white">3</p>
            <p className="text-xs text-slate-500 mt-1">Agendadas</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Avaliação Média</p>
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-white">4.8</p>
            <p className="text-xs text-slate-500 mt-1">Motoristas</p>
          </Card>
        </div>

        {/* Map View */}
        <Card className="bg-slate-900 border-slate-800 mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Monitoramento em Tempo Real</h2>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">● Ao Vivo</Badge>
            </div>

            <div className="relative h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden">
              {/* Simulated map with vehicle markers */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #1e293b 0px, #1e293b 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #1e293b 0px, #1e293b 1px, transparent 1px, transparent 20px)",
                  }}
                />
              </div>

              {/* Vehicle markers */}
              <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
                <div className="relative">
                  <Truck className="h-6 w-6 text-green-500" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="mt-1 bg-black/70 px-2 py-1 rounded text-xs text-white">VH-001</div>
              </div>

              <div className="absolute top-1/2 left-1/2 flex flex-col items-center">
                <div className="relative">
                  <Truck className="h-6 w-6 text-green-500" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="mt-1 bg-black/70 px-2 py-1 rounded text-xs text-white">VH-002</div>
              </div>

              <div className="absolute top-2/3 left-2/3 flex flex-col items-center">
                <MapPin className="h-6 w-6 text-yellow-500" />
                <div className="mt-1 bg-black/70 px-2 py-1 rounded text-xs text-white">VH-003 (Parado)</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Vehicles List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Frota em Operação</h3>
            <div className="space-y-3">
              {vehicles.map((vehicle) => (
                <Card key={vehicle.id} className="bg-slate-900 border-slate-800 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-white">{vehicle.id}</p>
                      <p className="text-sm text-slate-400">{vehicle.driver}</p>
                    </div>
                    <Badge
                      className={
                        vehicle.status === "active"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      }
                    >
                      {vehicle.status === "active" ? "Ativo" : "Parado"}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-slate-500">Localização</p>
                      <p className="text-slate-300 font-medium">{vehicle.location}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Velocidade</p>
                      <p className="text-slate-300 font-medium">{vehicle.speed} km/h</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Combustível</p>
                      <p className={`font-medium ${vehicle.fuel < 40 ? "text-red-400" : "text-slate-300"}`}>
                        {vehicle.fuel}%
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Alertas e Notificações</h3>
            <div className="space-y-3">
              <Card className="bg-red-500/10 border-red-500/20 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-red-400">Combustível Baixo</p>
                    <p className="text-sm text-red-300/80 mt-1">VH-004 - Ana Lima (30% restante)</p>
                    <p className="text-xs text-red-400/60 mt-1">Há 15 minutos</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-yellow-500/10 border-yellow-500/20 p-4">
                <div className="flex items-start gap-3">
                  <Wrench className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-yellow-400">Manutenção Preventiva</p>
                    <p className="text-sm text-yellow-300/80 mt-1">VH-007 atingiu 90% da quilometragem</p>
                    <p className="text-xs text-yellow-400/60 mt-1">Há 1 hora</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-blue-500/10 border-blue-500/20 p-4">
                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-blue-400">Nova Avaliação</p>
                    <p className="text-sm text-blue-300/80 mt-1">João Silva recebeu 5 estrelas</p>
                    <p className="text-xs text-blue-400/60 mt-1">Há 2 horas</p>
                  </div>
                </div>
              </Card>
            </div>

            <Link href="/gerente/relatorios">
              <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">Ver Relatórios Completos</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
