"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  ClipboardList, 
  SendToBack, 
  PackageCheck, 
  PackageOpen, 
  BarChart4 
} from "lucide-react"

const steps = [
  {
    id: 1,
    name: 'Cadastro do Armazém e Empresa',
    description: 'Configure seu armazém ou registre sua empresa na plataforma com personalização da marca.',
    icon: ClipboardList,
    color: 'bg-blue-600',
  },
  {
    id: 2,
    name: 'Envio de Estoque com NF-e',
    description: 'Empresas remetentes enviam produtos com nota fiscal anexada diretamente pelo sistema.',
    icon: SendToBack,
    color: 'bg-cyan-600',
  },
  {
    id: 3,
    name: 'Armazenamento e Gestão de Lotes',
    description: 'Armazéns recebem, catalogam e posicionam os produtos seguindo as melhores práticas.',
    icon: PackageCheck,
    color: 'bg-indigo-600',
  },
  {
    id: 4,
    name: 'Solicitação de Separação e Envio',
    description: 'Empresas solicitam a separação de produtos específicos para envio aos clientes finais.',
    icon: PackageOpen,
    color: 'bg-purple-600',
  },
  {
    id: 5,
    name: 'Rastreamento e Relatórios em Tempo Real',
    description: 'Acompanhe todo o processo logístico com relatórios detalhados e atualizações em tempo real.',
    icon: BarChart4,
    color: 'bg-rose-600',
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <div className="py-16 sm:py-24 lg:py-32" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Processo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como Funciona?
          </p>
          <p className="mt-6 text-base sm:text-lg leading-8 text-muted-foreground">
            Gerencie estoques e envios com simplicidade através de um fluxo de trabalho otimizado e intuitivo.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="mx-auto mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center p-4"
              >
                <div 
                  className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full ${step.color} text-white`}
                >
                  <step.icon className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-semibold text-foreground ring-2 ring-inset ring-gray-200">
                    {step.id}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-[3.5rem] left-1/2 hidden h-0.5 w-full -translate-x-1/2 bg-gray-300 lg:block" />
                )}
                <h3 className="mt-6 text-base font-semibold leading-7 text-foreground">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}