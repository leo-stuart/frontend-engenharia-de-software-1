"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Camera, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function ChecklistPage() {
  const router = useRouter()
  const [items, setItems] = useState({
    pneus: false,
    freios: false,
    oleo: false,
    luzes: false,
    documentos: false,
    extintores: false,
    carga: false,
  })
  const [issue, setIssue] = useState("")
  const [hasIssue, setHasIssue] = useState(false)

  const checklistItems = [
    { id: "pneus", label: "Pneus em bom estado" },
    { id: "freios", label: "Freios funcionando" },
    { id: "oleo", label: "Nível de óleo adequado" },
    { id: "luzes", label: "Luzes e sinalização" },
    { id: "documentos", label: "Documentação do veículo" },
    { id: "extintores", label: "Extintores de incêndio" },
    { id: "carga", label: "Carga segura e lacrada" },
  ]

  const handleSubmit = () => {
    const allChecked = Object.values(items).every((v) => v)
    if (allChecked && !hasIssue) {
      router.push("/motorista/dashboard")
    }
  }

  const allChecked = Object.values(items).every((v) => v)

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/motorista/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Checklist Pré-Viagem</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle className="h-5 w-5 text-yellow-500 mt-1" />
            <div>
              <h3 className="font-semibold text-white mb-1">Checklist Obrigatório</h3>
              <p className="text-sm text-slate-400">
                Verifique todos os itens antes de iniciar a viagem. A segurança é nossa prioridade.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {checklistItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors"
              >
                <Checkbox
                  id={item.id}
                  checked={items[item.id as keyof typeof items]}
                  onCheckedChange={(checked) => setItems((prev) => ({ ...prev, [item.id]: checked as boolean }))}
                  className="border-slate-600"
                />
                <Label htmlFor={item.id} className="text-slate-200 cursor-pointer flex-1">
                  {item.label}
                </Label>
              </div>
            ))}
          </div>
        </Card>

        {/* Reportar Problema */}
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <h3 className="font-semibold text-white mb-4">Encontrou algum problema?</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasIssue"
                checked={hasIssue}
                onCheckedChange={(checked) => setHasIssue(checked as boolean)}
                className="border-slate-600"
              />
              <Label htmlFor="hasIssue" className="text-slate-200">
                Sim, há um problema
              </Label>
            </div>

            {hasIssue && (
              <div className="space-y-3">
                <Textarea
                  placeholder="Descreva o problema encontrado..."
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white min-h-[100px]"
                />
                <Button variant="outline" className="w-full border-slate-700 text-slate-300 bg-transparent">
                  <Camera className="h-4 w-4 mr-2" />
                  Adicionar Foto
                </Button>
              </div>
            )}
          </div>
        </Card>

        <div className="flex gap-4">
          <Button
            onClick={handleSubmit}
            disabled={!allChecked || hasIssue}
            className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50"
          >
            Aprovar Checklist e Iniciar Viagem
          </Button>
        </div>

        {hasIssue && (
          <p className="text-sm text-yellow-500 text-center mt-4">
            ⚠️ A viagem será bloqueada até que o problema seja resolvido
          </p>
        )}
      </div>
    </div>
  )
}
