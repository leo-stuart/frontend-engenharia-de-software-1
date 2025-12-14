import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Download, Share2 } from "lucide-react"

export default function ComprovantePage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-slate-900 border-slate-800 p-8 text-center">
        <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-6">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Entrega Confirmada!</h1>
        <p className="text-slate-400 mb-6">Comprovante digital gerado com sucesso</p>

        <div className="bg-slate-800/50 rounded-lg p-4 mb-6 text-left space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Pedido:</span>
            <span className="text-white font-medium">#78945</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Hash SHA-256:</span>
            <span className="text-white font-mono text-xs">a3f5...b8c2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Data/Hora:</span>
            <span className="text-white">{new Date().toLocaleString("pt-BR")}</span>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <Button variant="outline" className="flex-1 border-slate-700 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Baixar PDF
          </Button>
          <Button variant="outline" className="flex-1 border-slate-700 bg-transparent">
            <Share2 className="h-4 w-4 mr-2" />
            Compartilhar
          </Button>
        </div>

        <Link href="/motorista/dashboard">
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Voltar ao Dashboard</Button>
        </Link>
      </Card>
    </div>
  )
}
