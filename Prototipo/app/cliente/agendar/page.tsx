"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react"

export default function AgendarPage() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [address, setAddress] = useState("")
  const [cep, setCep] = useState("")
  const [scheduled, setScheduled] = useState(false)

  const timeSlots = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setScheduled(true)
  }

  if (scheduled) {
    return (
      <div className="min-h-screen bg-slate-950">
        <header className="border-b border-slate-800 bg-slate-900">
          <div className="container mx-auto px-4 py-4 flex items-center gap-4">
            <Link href="/cliente/dashboard">
              <Button variant="ghost" size="icon" className="text-slate-400">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-white">Agendar Entrega</h1>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="bg-gradient-to-r from-green-500/10 to-green-500/5 border-green-500/20 p-8 text-center">
            <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-6">
              <Calendar className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Entrega Agendada!</h2>
            <p className="text-slate-400 mb-6">Sua entrega foi agendada com sucesso</p>
            <div className="bg-slate-900/50 rounded-lg p-6 mb-6 text-left space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-slate-400">Data</p>
                  <p className="text-white font-medium">{selectedDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-slate-400">Horário</p>
                  <p className="text-white font-medium">{selectedTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-400" />
                <div>
                  <p className="text-sm text-slate-400">Endereço</p>
                  <p className="text-white font-medium">{address}</p>
                </div>
              </div>
            </div>
            <Link href="/cliente/dashboard">
              <Button className="w-full bg-green-600 hover:bg-green-700">Voltar ao Dashboard</Button>
            </Link>
          </Card>
        </div>
      </div>
    )
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
          <h1 className="text-lg font-semibold text-white">Agendar Entrega</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <form onSubmit={handleSubmit}>
          <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-6">Informações da Entrega</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="address" className="text-slate-200">
                  Endereço de Entrega *
                </Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Rua, número, complemento"
                  className="bg-slate-800 border-slate-700 text-white mt-2"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cep" className="text-slate-200">
                    CEP *
                  </Label>
                  <Input
                    id="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="00000-000"
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    maxLength={9}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-slate-200">
                    Cidade
                  </Label>
                  <Input
                    id="city"
                    placeholder="São Paulo"
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    disabled
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-6">Selecionar Data e Horário</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="date" className="text-slate-200">
                  Data da Entrega *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="bg-slate-800 border-slate-700 text-white mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="time" className="text-slate-200">
                  Janela de Horário *
                </Label>
                <Select value={selectedTime} onValueChange={setSelectedTime} required>
                  <SelectTrigger className="bg-slate-800 border-slate-700 text-white mt-2">
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot} className="text-white">
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
            <h3 className="font-semibold text-white mb-4">Observações</h3>
            <Input
              placeholder="Instruções especiais para a entrega (opcional)"
              className="bg-slate-800 border-slate-700 text-white"
            />
          </Card>

          <div className="flex gap-4">
            <Link href="/cliente/dashboard" className="flex-1">
              <Button type="button" variant="outline" className="w-full border-slate-700 text-slate-300 bg-transparent">
                Cancelar
              </Button>
            </Link>
            <Button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700"
              disabled={!selectedDate || !selectedTime || !address || !cep}
            >
              Confirmar Agendamento
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

