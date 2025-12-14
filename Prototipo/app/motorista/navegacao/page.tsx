"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, AlertTriangle, Coffee, MapPin } from "lucide-react"
import Link from "next/link"

export default function NavegacaoPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/motorista/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Navegação</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Mapa Simulado */}
        <Card className="bg-slate-900 border-slate-800 mb-6 overflow-hidden">
          <div className="relative h-[400px] bg-gradient-to-br from-slate-800 to-slate-900">
            {/* Simulated map background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-orange-500" />
              <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-blue-500" />
              <div className="absolute top-3/4 left-3/4 w-2 h-2 rounded-full bg-green-500" />
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <path
                  d="M 50 100 Q 150 50, 250 100 T 350 200"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>

            {/* Current location marker */}
            <div className="absolute top-1/3 left-1/3 flex flex-col items-center">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500 opacity-30 animate-ping" />
              </div>
              <span className="text-xs text-white mt-1 bg-black/50 px-2 py-1 rounded">Você está aqui</span>
            </div>

            {/* Destination marker */}
            <div className="absolute top-2/3 right-1/4">
              <MapPin className="h-6 w-6 text-orange-500" />
            </div>

            {/* Map controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-2">
              <Button size="icon" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <span className="text-white">+</span>
              </Button>
              <Button size="icon" className="bg-white/10 backdrop-blur-sm hover:bg-white/20">
                <span className="text-white">-</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Route Info */}
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white">Rota Otimizada</h3>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Tráfego Normal</Badge>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-white">347 km</p>
              <p className="text-xs text-slate-400">Distância</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">4h 30min</p>
              <p className="text-xs text-slate-400">Tempo</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">R$ 89</p>
              <p className="text-xs text-slate-400">Pedágios</p>
            </div>
          </div>
        </Card>

        {/* Alerts */}
        <Card className="bg-red-500/10 border-red-500/20 p-4 mb-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-400 mb-1">Zona de Risco Detectada</h4>
              <p className="text-sm text-red-300/80">Área de alto risco a 15 km. Rota alternativa sugerida.</p>
              <Button
                size="sm"
                variant="outline"
                className="mt-2 border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
              >
                Ver Desvio
              </Button>
            </div>
          </div>
        </Card>

        {/* Rest Suggestions */}
        <Card className="bg-slate-900 border-slate-800 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Coffee className="h-5 w-5 text-yellow-500" />
            <h3 className="font-semibold text-white">Pontos de Descanso</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
              <div>
                <p className="font-medium text-white">Posto Graal - KM 180</p>
                <p className="text-sm text-slate-400">45 min de distância</p>
              </div>
              <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
                ⭐ 4.5
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50">
              <div>
                <p className="font-medium text-white">Área de Descanso - KM 220</p>
                <p className="text-sm text-slate-400">1h 10min de distância</p>
              </div>
              <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
                ⭐ 4.8
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
