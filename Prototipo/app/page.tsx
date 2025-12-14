import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Truck, Package, Users, BarChart3, MessageSquare, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628]">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-white">LogiFlow</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#recursos" className="hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#solucoes" className="hover:text-white transition-colors">
              Soluções
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            Plataforma Logística
            <span className="block text-orange-500">Unificada</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Desbloqueie o desempenho empresarial com insights em tempo real, automação e um marketplace em expansão.
            Junte-se à revolução logística.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8" asChild>
              <Link href="#recursos">Começar Agora</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
              Ver Demo
            </Button>
          </div>
        </div>

        {/* Decorative illustration */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-orange-500/20 blur-3xl" />
          <div className="relative border border-white/10 rounded-lg p-8 bg-black/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-8 text-white/40">
              <MapPin className="h-12 w-12" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              <Truck className="h-16 w-16 text-orange-500" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <Package className="h-12 w-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Access Portals */}
      <section id="recursos" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-white text-center mb-12">Acesso aos Portais</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/motorista/login">
            <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-orange-500/10 group-hover:bg-orange-500/20 transition-colors">
                  <Truck className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Portal do Motorista</h4>
                  <p className="text-sm text-gray-400">Gerencie viagens, entregas e checklist</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/cliente/login">
            <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <Package className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Portal do Cliente</h4>
                  <p className="text-sm text-gray-400">Rastreie pedidos e gerencie entregas</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/vendedor/login">
            <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Portal do Vendedor</h4>
                  <p className="text-sm text-gray-400">Gerencie produtos e estoque</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/gerente/login">
            <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Portal do Gerente</h4>
                  <p className="text-sm text-gray-400">Monitore frota e operações</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/suporte/login">
            <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                  <MessageSquare className="h-8 w-8 text-yellow-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Portal de Suporte</h4>
                  <p className="text-sm text-gray-400">Atenda motoristas em tempo real</p>
                </div>
              </div>
            </Card>
          </Link>

          <Link href="/empresarial/login">
            <Card className="p-6 bg-black/40 border-white/10 backdrop-blur-sm hover:bg-black/60 transition-all cursor-pointer group">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <BarChart3 className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Portal Empresarial</h4>
                  <p className="text-sm text-gray-400">Integração ERP e relatórios</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-24 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2025 LogiFlow. Sistema de Logística Unificada.</p>
        </div>
      </footer>
    </div>
  )
}
