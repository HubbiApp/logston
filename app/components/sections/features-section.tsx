"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PaintBucket, Users2, FileSpreadsheet, PackageSearch, PackagePlus, BarChart3, Code2, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    name: 'White Label Total',
    description: 'Personalização com marca, cores e URL própria',
    icon: PaintBucket,
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    name: 'Multiusuário e Permissões',
    description: 'Controle de acesso por perfil (remetente, operador, gestor)',
    icon: Users2,
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  },
  {
    name: 'Integração com NF-e',
    description: 'Envio e leitura de notas fiscais eletrônicas',
    icon: FileSpreadsheet,
    color: 'bg-gradient-to-br from-amber-500 to-orange-600',
  },
  {
    name: 'Gestão de Estoque',
    description: 'Entrada, saída, lote, validade, saldo',
    icon: PackageSearch,
    color: 'bg-gradient-to-br from-emerald-500 to-green-600',
  },
  {
    name: 'Ordem de Separação',
    description: 'Criação e acompanhamento de picking e packing',
    icon: PackagePlus,
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
  },
  {
    name: 'Relatórios e Dashboard',
    description: 'Visão de estoque, movimentações e desempenho',
    icon: BarChart3,
    color: 'bg-gradient-to-br from-sky-500 to-blue-600',
  },
  {
    name: 'API Integrável',
    description: 'Conecte-se com ERPs, marketplaces e apps externos',
    icon: Code2,
    color: 'bg-gradient-to-br from-violet-500 to-purple-600',
  },
  {
    name: 'Arquitetura Modular',
    description: 'Ative apenas os módulos que sua operação precisa',
    icon: Layers,
    color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <div className="py-16 sm:py-24 lg:py-32" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Recursos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Principais Recursos
          </p>
          <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
            A plataforma Logston oferece um conjunto completo de funcionalidades para 
            revolucionar sua operação logística.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="mx-auto mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className={cn(
                  "absolute -inset-px rounded-lg border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.blue.50)),var(--quick-links-hover-bg,theme(colors.blue.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.blue.500))_border-box] group-hover:opacity-100 transition duration-300",
                  "dark:group-hover:[--quick-links-hover-bg:theme(colors.slate.800)]"
                )} />
                <div className="relative overflow-hidden rounded-lg p-6">
                  <div className={cn(
                    "absolute top-0 right-0 translate-y-[-30%] translate-x-[30%] w-[150px] h-[150px] rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition duration-500",
                    feature.color
                  )} />
                  
                  <div className="relative">
                    <div className={cn(
                      "inline-flex rounded-lg p-3 mb-6",
                      feature.color
                    )}>
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-foreground group-hover:text-blue-500 transition-colors">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}