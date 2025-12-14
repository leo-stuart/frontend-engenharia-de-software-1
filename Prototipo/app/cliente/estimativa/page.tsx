"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Clock, MapPin } from "lucide-react"

export default function EstimativaPage() {
  const [cep, setCep] = useState("")
  const [estimate, setEstimate] = useState<{ days: number; date: string } | null>(null)

  const handleCalculate = () => {
    // Simulated calculation
    const days = Math.floor(Math.random() * 5) + 2
    const date = new Date()
    date.setDate(date.getDate() + days)
    setEstimate({
      days,
      date: date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" }),
    })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/cliente/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Estimativa de Entrega</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4">Calcular Prazo</h2>
          <p className="text-sm text-slate-400 mb-6">Informe o CEP de destino para calcular o prazo de entrega</p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="cep" className="text-slate-200">
                CEP de Destino
              </Label>
              <Input
                id="cep"
                placeholder="00000-000"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white mt-2"
                maxLength={9}
              />
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={cep.length < 8}
            >
              Calcular Estimativa
            </Button>
          </div>
        </Card>

        {estimate && (
          <Card className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 border-blue-500/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-blue-500/10">
                <Clock className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Estimativa Calculada</h3>
                <p className="text-sm text-slate-400">Para o CEP: {cep}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 rounded-lg bg-slate-900/50">
                <p className="text-3xl font-bold text-white mb-1">{estimate.days}</p>
                <p className="text-sm text-slate-400">Dias úteis</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-900/50">
                <p className="text-sm font-medium text-white mb-1">{estimate.date}</p>
                <p className="text-xs text-slate-400">Entrega prevista</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/50">
              <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
              <div>
                <p className="text-sm text-white font-medium mb-1">Rota Otimizada</p>
                <p className="text-xs text-slate-400">
                  Calculamos a melhor rota considerando tráfego e condições climáticas
                </p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
