"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, MapPin, Clock, CheckCircle2, Truck } from "lucide-react"

interface PageProps {
  params: {
    id: string
  }
}

export default function RastrearPage({ params }: PageProps) {
  const orderId = params.id

  const trackingEvents = [
    {
      id: 1,
      status: "Entregue",
      description: "Pedido entregue com sucesso",
      time: "Hoje, 15:30",
      completed: true,
    },
    {
      id: 2,
      status: "Saiu para entrega",
      description: "Motorista saiu para entrega",
      time: "Hoje, 11:30",
      completed: true,
    },
    {
      id: 3,
      status: "Em trânsito",
      description: "Pedido a caminho do centro de distribuição",
      time: "Ontem, 14:20",
      completed: true,
    },
    {
      id: 4,
      status: "Processando",
      description: "Pedido confirmado e sendo preparado",
      time: "Ontem, 10:15",
      completed: true,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/cliente/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Rastrear Pedido #{orderId}</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Order Status Card */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-blue-500/20 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-blue-500/10">
                <Package className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Pedido #{orderId}</h2>
                <p className="text-sm text-slate-400">Notebook Dell Inspiron 15</p>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Entregue</Badge>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tracking Timeline */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-6">Histórico de Rastreamento</h3>
              <div className="space-y-4">
                {trackingEvents.map((event, index) => (
                  <div key={event.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          event.completed ? "bg-green-500" : "bg-slate-600"
                        }`}
                      />
                      {index < trackingEvents.length - 1 && (
                        <div className={`w-0.5 h-12 ${event.completed ? "bg-green-500" : "bg-slate-600"}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">{event.status}</h4>
                        <span className="text-xs text-slate-500">{event.time}</span>
                      </div>
                      <p className="text-sm text-slate-400">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map View */}
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Localização</h3>
              <div className="relative h-[300px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, #1e293b 0px, #1e293b 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #1e293b 0px, #1e293b 1px, transparent 1px, transparent 20px)",
                    }}
                  />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <MapPin className="h-8 w-8 text-green-500" />
                  <div className="mt-2 bg-black/70 px-3 py-1 rounded text-xs text-white">Local de Entrega</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Order Details Sidebar */}
          <div className="space-y-6">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Detalhes do Pedido</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Número do Pedido</p>
                  <p className="text-white font-medium">#{orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Data do Pedido</p>
                  <p className="text-white font-medium">15/01/2025</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Valor Total</p>
                  <p className="text-white font-medium">R$ 3.499,00</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Forma de Pagamento</p>
                  <p className="text-white font-medium">Cartão de Crédito</p>
                </div>
              </div>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Endereço de Entrega</h3>
              <div className="space-y-2">
                <p className="text-white">Maria Santos</p>
                <p className="text-sm text-slate-400">Rua das Flores, 123</p>
                <p className="text-sm text-slate-400">Copacabana</p>
                <p className="text-sm text-slate-400">Rio de Janeiro - RJ</p>
                <p className="text-sm text-slate-400">22050-030</p>
              </div>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Informações de Entrega</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-slate-400">Motorista</p>
                    <p className="text-white font-medium">João Silva</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-400" />
                  <div>
                    <p className="text-sm text-slate-400">Data/Hora da Entrega</p>
                    <p className="text-white font-medium">Hoje, 15:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <div>
                    <p className="text-sm text-slate-400">Status</p>
                    <p className="text-white font-medium">Entregue</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

