"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Camera, CheckCircle2, Ligature as Signature } from "lucide-react"
import Link from "next/link"

export default function EntregaPage() {
  const router = useRouter()
  const [photoTaken, setPhotoTaken] = useState(false)
  const [signatureCollected, setSignatureCollected] = useState(false)

  const handleConfirm = () => {
    if (photoTaken && signatureCollected) {
      router.push("/motorista/comprovante")
    }
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/motorista/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Registrar Entrega</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Order Info */}
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <h3 className="font-semibold text-white mb-4">Informações do Pedido</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Pedido:</span>
              <span className="text-white font-medium">#78945</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Cliente:</span>
              <span className="text-white">Maria Santos</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Endereço:</span>
              <span className="text-white">Rua das Flores, 123</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">CEP:</span>
              <span className="text-white">22050-030</span>
            </div>
          </div>
        </Card>

        {/* Photo Evidence */}
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <h3 className="font-semibold text-white mb-4">Evidência Fotográfica</h3>
          <div className="space-y-4">
            {!photoTaken ? (
              <Button onClick={() => setPhotoTaken(true)} className="w-full bg-blue-600 hover:bg-blue-700">
                <Camera className="h-5 w-5 mr-2" />
                Capturar Foto da Carga
              </Button>
            ) : (
              <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/50">
                <div className="aspect-video bg-slate-700 rounded flex items-center justify-center mb-2">
                  <Camera className="h-12 w-12 text-slate-500" />
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-sm">Foto capturada com sucesso</span>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Digital Signature */}
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <h3 className="font-semibold text-white mb-4">Assinatura Digital</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="receiverName" className="text-slate-200">
                Nome do Recebedor
              </Label>
              <Input
                id="receiverName"
                placeholder="Nome completo"
                className="bg-slate-800 border-slate-700 text-white mt-2"
              />
            </div>

            {!signatureCollected ? (
              <div>
                <Label className="text-slate-200 mb-2 block">Assinatura</Label>
                <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 bg-slate-800/50 flex flex-col items-center justify-center min-h-[150px]">
                  <Signature className="h-12 w-12 text-slate-600 mb-2" />
                  <p className="text-sm text-slate-500 text-center">Toque para coletar assinatura</p>
                </div>
                <Button
                  onClick={() => setSignatureCollected(true)}
                  variant="outline"
                  className="w-full mt-2 border-slate-700"
                >
                  Coletar Assinatura
                </Button>
              </div>
            ) : (
              <div className="border border-slate-700 rounded-lg p-4 bg-slate-800/50">
                <div className="h-[100px] bg-slate-700 rounded flex items-center justify-center mb-2">
                  <Signature className="h-8 w-8 text-slate-500" />
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-sm">Assinatura coletada</span>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Location Info */}
        <Card className="bg-slate-900 border-slate-800 p-4 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-400">Localização GPS:</span>
            <span className="text-white font-mono">-22.9068, -43.1729</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-slate-400">Data/Hora:</span>
            <span className="text-white">{new Date().toLocaleString("pt-BR")}</span>
          </div>
        </Card>

        <Button
          onClick={handleConfirm}
          disabled={!photoTaken || !signatureCollected}
          className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
        >
          Confirmar Entrega
        </Button>
      </div>
    </div>
  )
}
