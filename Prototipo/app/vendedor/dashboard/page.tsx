"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Search, Plus, Edit, Trash2, Package } from "lucide-react"

export default function VendedorDashboard() {
  const products = [
    { id: 1, name: "Notebook Dell Inspiron 15", sku: "NB-DELL-001", price: "R$ 3.499,00", stock: 45, status: "ativo" },
    { id: 2, name: "Mouse Logitech MX Master", sku: "MS-LOG-002", price: "R$ 449,00", stock: 120, status: "ativo" },
    { id: 3, name: "Teclado Mecânico RGB", sku: "KB-MEC-003", price: "R$ 599,00", stock: 5, status: "baixo" },
    { id: 4, name: 'Monitor LG 27" 4K', sku: "MON-LG-004", price: "R$ 1.899,00", stock: 0, status: "esgotado" },
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-green-400" />
            <span className="font-semibold text-white">Portal do Vendedor</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Tech Store</span>
            <Link href="/vendedor/login">
              <Button variant="ghost" size="sm" className="text-slate-400">
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900 border-slate-800 p-6">
            <p className="text-sm text-slate-400 mb-1">Total de Produtos</p>
            <p className="text-3xl font-bold text-white">127</p>
          </Card>
          <Card className="bg-slate-900 border-slate-800 p-6">
            <p className="text-sm text-slate-400 mb-1">Em Estoque</p>
            <p className="text-3xl font-bold text-green-400">98</p>
          </Card>
          <Card className="bg-slate-900 border-slate-800 p-6">
            <p className="text-sm text-slate-400 mb-1">Estoque Baixo</p>
            <p className="text-3xl font-bold text-yellow-400">12</p>
          </Card>
          <Card className="bg-slate-900 border-slate-800 p-6">
            <p className="text-sm text-slate-400 mb-1">Esgotados</p>
            <p className="text-3xl font-bold text-red-400">17</p>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input placeholder="Buscar produtos..." className="bg-slate-900 border-slate-800 text-white pl-10" />
          </div>
          <Link href="/vendedor/produtos/novo">
            <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Novo Produto
            </Button>
          </Link>
        </div>

        {/* Products Table */}
        <Card className="bg-slate-900 border-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Produto</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">SKU</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Preço</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Estoque</th>
                  <th className="text-left p-4 text-sm font-medium text-slate-400">Status</th>
                  <th className="text-right p-4 text-sm font-medium text-slate-400">Ações</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center">
                          <Package className="h-5 w-5 text-slate-600" />
                        </div>
                        <span className="text-sm text-white font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-slate-400 font-mono">{product.sku}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm text-white font-medium">{product.price}</span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-sm font-medium ${
                          product.stock === 0
                            ? "text-red-400"
                            : product.stock < 10
                              ? "text-yellow-400"
                              : "text-green-400"
                        }`}
                      >
                        {product.stock} un.
                      </span>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={
                          product.status === "ativo"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : product.status === "baixo"
                              ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-red-500/20 text-red-400 border-red-500/30"
                        }
                      >
                        {product.status === "ativo" ? "Ativo" : product.status === "baixo" ? "Baixo" : "Esgotado"}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-white">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-red-400">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
