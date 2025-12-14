"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Database, Search, Package, AlertTriangle, CheckCircle2 } from "lucide-react"

export default function EstoquePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: 1,
      sku: "NB-DELL-001",
      name: "Notebook Dell Inspiron 15",
      stock: 45,
      minStock: 10,
      maxStock: 100,
      status: "ok",
      lastSync: "Há 2 minutos",
    },
    {
      id: 2,
      sku: "MS-LOG-002",
      name: "Mouse Logitech MX Master",
      stock: 120,
      minStock: 20,
      maxStock: 200,
      status: "ok",
      lastSync: "Há 2 minutos",
    },
    {
      id: 3,
      sku: "KB-MEC-003",
      name: "Teclado Mecânico RGB",
      stock: 5,
      minStock: 15,
      maxStock: 50,
      status: "low",
      lastSync: "Há 2 minutos",
    },
    {
      id: 4,
      sku: "MON-LG-004",
      name: 'Monitor LG 27" 4K',
      stock: 0,
      minStock: 5,
      maxStock: 30,
      status: "out",
      lastSync: "Há 2 minutos",
    },
    {
      id: 5,
      sku: "HD-SSD-005",
      name: "SSD Samsung 1TB",
      stock: 28,
      minStock: 10,
      maxStock: 50,
      status: "ok",
      lastSync: "Há 2 minutos",
    },
    {
      id: 6,
      sku: "RAM-COR-006",
      name: "Memória RAM Corsair 16GB",
      stock: 8,
      minStock: 12,
      maxStock: 40,
      status: "low",
      lastSync: "Há 2 minutos",
    },
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = {
    total: products.length,
    inStock: products.filter((p) => p.status === "ok").length,
    lowStock: products.filter((p) => p.status === "low").length,
    outOfStock: products.filter((p) => p.status === "out").length,
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
            <h1 className="text-lg font-semibold text-white">Visualizar Estoque</h1>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Sincronizado
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Total de Produtos</p>
              <Database className="h-5 w-5 text-cyan-400" />
            </div>
            <p className="text-3xl font-bold text-white">{stats.total}</p>
          </Card>
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Em Estoque</p>
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-green-400">{stats.inStock}</p>
          </Card>
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Estoque Baixo</p>
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
            </div>
            <p className="text-3xl font-bold text-yellow-400">{stats.lowStock}</p>
          </Card>
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Esgotados</p>
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <p className="text-3xl font-bold text-red-400">{stats.outOfStock}</p>
          </Card>
        </div>

        {/* Search */}
        <Card className="bg-slate-900 border-slate-800 p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Buscar por nome ou SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-800 border-slate-700 text-white pl-10"
            />
          </div>
        </Card>

        {/* Products Table */}
        <Card className="bg-slate-900 border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left p-4 text-sm font-medium text-slate-400">SKU</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Produto</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Estoque Atual</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Mín/Máx</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Última Sincronização</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-mono">{product.sku}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center">
                          <Package className="h-5 w-5 text-slate-600" />
                        </div>
                        <span className="text-sm text-white font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-sm font-medium ${
                          product.stock === 0
                            ? "text-red-400"
                            : product.stock < product.minStock
                              ? "text-yellow-400"
                              : "text-green-400"
                        }`}
                      >
                        {product.stock} un.
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400">
                        {product.minStock} / {product.maxStock}
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={
                          product.status === "ok"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : product.status === "low"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {product.status === "ok"
                          ? "Normal"
                          : product.status === "low"
                            ? "Estoque Baixo"
                            : "Esgotado"}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400">{product.lastSync}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Sync Info */}
        <Card className="bg-slate-900 border-slate-800 p-6 mt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-sm font-medium text-white">Sincronização com ERP</p>
                <p className="text-xs text-slate-400">Última sincronização: há 2 minutos</p>
              </div>
            </div>
            <Button className="bg-cyan-600 hover:bg-cyan-700">Forçar Sincronização</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

