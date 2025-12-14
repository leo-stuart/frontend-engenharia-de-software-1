"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, FileText, Download, BarChart3, Truck, TrendingUp, Users } from "lucide-react"

export default function GerenteRelatoriosPage() {
  const [reportType, setReportType] = useState("")
  const [period, setPeriod] = useState("month")
  const [format, setFormat] = useState("pdf")

  const reportTypes = [
    {
      id: "fleet",
      name: "Performance da Frota",
      description: "Análise de veículos e utilização",
      icon: Truck,
      color: "blue",
    },
    {
      id: "deliveries",
      name: "Estatísticas de Entregas",
      description: "Métricas de entregas realizadas",
      icon: BarChart3,
      color: "green",
    },
    {
      id: "drivers",
      name: "Performance de Motoristas",
      description: "Avaliações e desempenho individual",
      icon: Users,
      color: "purple",
    },
    {
      id: "maintenance",
      name: "Manutenções e Custos",
      description: "Histórico de manutenções e gastos",
      icon: TrendingUp,
      color: "yellow",
    },
  ]

  const recentReports = [
    {
      id: 1,
      name: "Performance da Frota - Janeiro 2025",
      type: "fleet",
      date: "15/01/2025",
      format: "PDF",
    },
    {
      id: 2,
      name: "Estatísticas de Entregas - Dezembro 2024",
      type: "deliveries",
      date: "02/01/2025",
      format: "Excel",
    },
    {
      id: 3,
      name: "Performance de Motoristas - Dezembro 2024",
      type: "drivers",
      date: "28/12/2024",
      format: "PDF",
    },
  ]

  const handleGenerate = () => {
    // Simulate report generation
    alert(`Relatório "${reportTypes.find((r) => r.id === reportType)?.name}" gerado com sucesso!`)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/gerente/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Relatórios Completos</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Generator */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
              <h2 className="text-lg font-semibold text-white mb-6">Gerar Novo Relatório</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="reportType" className="text-slate-200">
                    Tipo de Relatório *
                  </Label>
                  <Select value={reportType} onValueChange={setReportType} required>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white mt-2">
                      <SelectValue placeholder="Selecione o tipo de relatório" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id} className="text-white">
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="period" className="text-slate-200">
                    Período *
                  </Label>
                  <Select value={period} onValueChange={setPeriod} required>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week" className="text-white">Última Semana</SelectItem>
                      <SelectItem value="month" className="text-white">Último Mês</SelectItem>
                      <SelectItem value="quarter" className="text-white">Último Trimestre</SelectItem>
                      <SelectItem value="year" className="text-white">Último Ano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="format" className="text-slate-200">
                    Formato de Exportação *
                  </Label>
                  <Select value={format} onValueChange={setFormat} required>
                    <SelectTrigger className="bg-slate-800 border-slate-700 text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf" className="text-white">PDF</SelectItem>
                      <SelectItem value="excel" className="text-white">Excel (XLSX)</SelectItem>
                      <SelectItem value="csv" className="text-white">CSV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleGenerate}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={!reportType}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Gerar Relatório
                </Button>
              </div>
            </Card>

            {/* Recent Reports */}
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Relatórios Recentes</h3>
              <div className="space-y-3">
                {recentReports.map((report) => {
                  const reportTypeData = reportTypes.find((r) => r.id === report.type)
                  const Icon = reportTypeData?.icon || FileText
                  return (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-sm font-medium text-white">{report.name}</p>
                          <p className="text-xs text-slate-400">Gerado em {report.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-slate-700 text-slate-400">
                          {report.format}
                        </Badge>
                        <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>
          </div>

          {/* Report Types */}
          <div>
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Tipos de Relatório</h3>
              <div className="space-y-3">
                {reportTypes.map((type) => {
                  const Icon = type.icon
                  const getColorClasses = (color: string) => {
                    switch (color) {
                      case "blue":
                        return { bg: "bg-blue-500/10", text: "text-blue-400" }
                      case "green":
                        return { bg: "bg-green-500/10", text: "text-green-400" }
                      case "purple":
                        return { bg: "bg-purple-500/10", text: "text-purple-400" }
                      case "yellow":
                        return { bg: "bg-yellow-500/10", text: "text-yellow-400" }
                      default:
                        return { bg: "bg-slate-500/10", text: "text-slate-400" }
                    }
                  }
                  const colors = getColorClasses(type.color)
                  return (
                    <div
                      key={type.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        reportType === type.id
                          ? "bg-purple-500/10 border-purple-500/30"
                          : "bg-slate-800/50 border-slate-700 hover:bg-slate-800"
                      }`}
                      onClick={() => setReportType(type.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded ${colors.bg}`}>
                          <Icon className={`h-5 w-5 ${colors.text}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1">{type.name}</h4>
                          <p className="text-xs text-slate-400">{type.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-slate-900 border-slate-800 p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Estatísticas Rápidas</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Relatórios Gerados (Mês)</p>
                  <p className="text-2xl font-bold text-white">18</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Downloads (Mês)</p>
                  <p className="text-2xl font-bold text-purple-400">94</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Última Geração</p>
                  <p className="text-sm text-white">Hoje, 10:15</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

