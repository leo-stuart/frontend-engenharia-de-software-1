import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Package, TrendingUp, Database, Calendar, FileText } from "lucide-react"

export default function EmpresarialDashboard() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-cyan-400" />
            <span className="font-semibold text-white">Portal Empresarial</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Tech Solutions LTDA</span>
            <Link href="/empresarial/login">
              <Button variant="ghost" size="sm" className="text-slate-400">
                Sair
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Pedidos/Mês</p>
              <Package className="h-5 w-5 text-cyan-400" />
            </div>
            <p className="text-3xl font-bold text-white">1,247</p>
            <p className="text-xs text-green-400 mt-1">↑ 18% vs mês anterior</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Taxa de Entrega</p>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </div>
            <p className="text-3xl font-bold text-white">98.5%</p>
            <p className="text-xs text-green-400 mt-1">No prazo</p>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Estoque Sincronizado</p>
              <Database className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-3xl font-bold text-white">100%</p>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mt-1">● Conectado</Badge>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-slate-400">Tempo Médio</p>
              <TrendingUp className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-3xl font-bold text-white">3.2d</p>
            <p className="text-xs text-slate-500 mt-1">Entrega média</p>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Integration Status */}
          <Card className="bg-slate-900 border-slate-800 p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Integração ERP</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-500/10">
                    <Database className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">SAP Business One</p>
                    <p className="text-sm text-slate-400">Sincronização automática ativa</p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Conectado</Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-slate-800/50">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Última Sincronização</p>
                  <p className="text-white font-medium">Há 2 minutos</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Registros Sincronizados</p>
                  <p className="text-white font-medium">45.892</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Produtos Ativos</p>
                  <p className="text-white font-medium">3.456</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Taxa de Sucesso</p>
                  <p className="text-green-400 font-medium">99.8%</p>
                </div>
              </div>

              <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Forçar Sincronização Manual</Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Link href="/empresarial/janelas">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Agendar Janelas de Entrega
                  </Button>
                </Link>
                <Link href="/empresarial/relatorios">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Relatórios Personalizados
                  </Button>
                </Link>
                <Link href="/empresarial/estoque">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent"
                  >
                    <Database className="h-4 w-4 mr-2" />
                    Visualizar Estoque
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 p-6">
              <h4 className="font-semibold text-white mb-2">API de Integração</h4>
              <p className="text-sm text-slate-400 mb-4">
                Acesse nossa documentação completa para integrar seu sistema
              </p>
              <Button
                variant="outline"
                className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
              >
                Ver Documentação
              </Button>
            </Card>
          </div>
        </div>

        {/* Reports Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4">Relatórios Disponíveis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-slate-900 border-slate-800 p-6 hover:bg-slate-800/50 transition-colors cursor-pointer">
              <FileText className="h-8 w-8 text-blue-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Entregas por Região</h4>
              <p className="text-sm text-slate-400">Análise geográfica de entregas realizadas</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6 hover:bg-slate-800/50 transition-colors cursor-pointer">
              <FileText className="h-8 w-8 text-green-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">Performance de Produtos</h4>
              <p className="text-sm text-slate-400">Produtos mais vendidos e movimentação</p>
            </Card>

            <Card className="bg-slate-900 border-slate-800 p-6 hover:bg-slate-800/50 transition-colors cursor-pointer">
              <FileText className="h-8 w-8 text-purple-400 mb-3" />
              <h4 className="font-semibold text-white mb-2">SLA e Prazos</h4>
              <p className="text-sm text-slate-400">Cumprimento de prazos e acordos de nível de serviço</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
