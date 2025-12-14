"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Upload } from "lucide-react"

export default function NovoProdutoPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/vendedor/dashboard")
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/vendedor/dashboard">
            <Button variant="ghost" size="icon" className="text-slate-400">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold text-white">Novo Produto</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <form onSubmit={handleSubmit}>
          <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-6">Informações do Produto</h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-slate-200">
                    Nome do Produto *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sku" className="text-slate-200">
                    SKU *
                  </Label>
                  <Input
                    id="sku"
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-slate-200">
                  Descrição
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white mt-2 min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="price" className="text-slate-200">
                    Preço (R$) *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="stock" className="text-slate-200">
                    Estoque *
                  </Label>
                  <Input
                    id="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category" className="text-slate-200">
                    Categoria
                  </Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white mt-2"
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">Imagens do Produto</h2>
            <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-slate-600 mx-auto mb-3" />
              <p className="text-sm text-slate-400 mb-2">Arraste imagens ou clique para fazer upload</p>
              <p className="text-xs text-slate-500">PNG, JPG até 5MB</p>
            </div>
          </Card>

          <div className="flex gap-4">
            <Link href="/vendedor/dashboard" className="flex-1">
              <Button type="button" variant="outline" className="w-full border-slate-700 text-slate-300 bg-transparent">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
              Publicar Produto
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
