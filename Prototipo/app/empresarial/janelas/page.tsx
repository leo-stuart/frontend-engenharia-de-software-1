"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Plus, Trash2, Edit, Clock } from "lucide-react"

export default function JanelasPage() {
  const [showForm, setShowForm] = useState(false)
  const [selectedDay, setSelectedDay] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [capacity, setCapacity] = useState("")

  const deliveryWindows = [
    {
      id: 1,
      day: "Segunda-feira",
      timeSlot: "08:00 - 12:00",
      capacity: 50,
      booked: 32,
      status: "active",
    },
    {
      id: 2,
      day: "Segunda-feira",
      timeSlot: "14:00 - 18:00",
      capacity: 50,
      booked: 18,
      status: "active",
    },
    {
      id: 3,
      day: "Terça-feira",
      timeSlot: "08:00 - 12:00",
      capacity: 50,
      booked: 45,
      status: "active",
    },
    {
      id: 4,
      day: "Quarta-feira",
      timeSlot: "10:00 - 14:00",
      capacity: 30,
      booked: 30,
      status: "full",
    },
    {
      id: 5,
      day: "Sexta-feira",
      timeSlot: "08:00 - 12:00",
      capacity: 50,
      booked: 12,
      status: "active",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowForm(false)
    // Reset form
    setSelectedDay("")
    setStartTime("")
    setEndTime("")
    setCapacity("")
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/empresarial/dashboard">
              <Button variant="ghost" size="icon" className="text-slate-400">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-white">Janelas de Entrega</h1>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Janela
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Create Form */}
        {showForm && (
          <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-6">Criar Nova Janela de Entrega</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="day" className="text-slate-200">
                    Dia da Semana *
                  </Label>
                  <Select value={selectedDay} onValueChange={setSelectedDay} required>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white mt-2">
                      <SelectValue placeholder="Selecione o dia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monday" className="text-white">Segunda-feira</SelectItem>
                      <SelectItem value="tuesday" className="text-white">Terça-feira</SelectItem>
                      <SelectItem value="wednesday" className="text-white">Quarta-feira</SelectItem>
                      <SelectItem value="thursday" className="text-white">Quinta-feira</SelectItem>
                      <SelectItem value="friday" className="text-white">Sexta-feira</SelectItem>
                      <SelectItem value="saturday" className="text-white">Sábado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="capacity" className="text-slate-200">
                    Capacidade (entregas) *
                  </Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    placeholder="50"
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="startTime" className="text-slate-200">
                    Horário Início *
                  </Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="endTime" className="text-slate-200">
                    Horário Fim *
                  </Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  className="border-slate-700 text-slate-300 bg-transparent"
                >
                  Cancelar
                </Button>
                <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
                  Criar Janela
                </Button>
              </div>
            </form>
          </Card>
        )}

        {/* Delivery Windows List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliveryWindows.map((window) => (
            <Card key={window.id} className="bg-slate-900 border-slate-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-semibold text-white">{window.day}</h3>
                </div>
                <Badge
                  className={
                    window.status === "active"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-red-500/20 text-red-400 border-red-500/30"
                  }
                >
                  {window.status === "active" ? "Ativa" : "Lotada"}
                </Badge>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span className="text-sm text-white">{window.timeSlot}</span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-slate-400">Capacidade</span>
                    <span className="text-sm text-white font-medium">
                      {window.booked}/{window.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        window.booked / window.capacity > 0.8
                          ? "bg-red-500"
                          : window.booked / window.capacity > 0.5
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                      style={{ width: `${(window.booked / window.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                >
                  <Edit className="h-3 w-3 mr-1" />
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-700 text-red-400 hover:bg-red-500/10 bg-transparent"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <Card className="bg-slate-900 border-slate-800 p-6 mt-6">
          <h3 className="text-lg font-semibold text-white mb-4">Resumo</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-slate-400 mb-1">Total de Janelas</p>
              <p className="text-2xl font-bold text-white">{deliveryWindows.length}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Janelas Ativas</p>
              <p className="text-2xl font-bold text-green-400">
                {deliveryWindows.filter((w) => w.status === "active").length}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Total de Vagas</p>
              <p className="text-2xl font-bold text-white">
                {deliveryWindows.reduce((sum, w) => sum + w.capacity, 0)}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-1">Vagas Ocupadas</p>
              <p className="text-2xl font-bold text-cyan-400">
                {deliveryWindows.reduce((sum, w) => sum + w.booked, 0)}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

