"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Warehouse, ShoppingBag, Boxes, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const personas = [
  {
    title: 'Armazéns logísticos',
    description: 'Que desejam oferecer um sistema digital com sua marca para seus clientes',
    icon: Warehouse,
    color: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Marketplaces ou plataformas B2B',
    description: 'Com múltiplos fornecedores que precisam de uma solução de fulfillment integrada',
    icon: ShoppingBag,
    color: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'Empresas de e-commerce',
    description: 'Que precisam descentralizar estoques em parceiros logísticos estratégicos',
    icon: Boxes,
    color: 'bg-amber-100 text-amber-700',
  },
  {
    title: 'Startups de logística',
    description: 'Buscando acelerar operações com uma plataforma white-label completa',
    icon: Rocket,
    color: 'bg-emerald-100 text-emerald-700',
  },
]

export default function ForWhoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  return (
    <div className="py-24 sm:py-32" id="for-who">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Públicos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Para Quem é a Logston?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Nossa plataforma foi desenvolvida para atender necessidades específicas de diferentes 
            perfis de negócios que operam na cadeia logística.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
            {personas.map((persona, index) => (
              <motion.div 
                key={persona.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start"
              >
                <div className={cn(
                  "rounded-2xl p-6 ring-1 ring-inset ring-gray-200 h-full w-full",
                  "hover:ring-blue-500 hover:ring-2 transition-all duration-300"
                )}>
                  <dt>
                    <div className={cn(
                      "rounded-lg p-2 w-12 h-12 flex items-center justify-center mb-6",
                      persona.color
                    )}>
                      <persona.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold leading-7 text-foreground">
                      {persona.title}
                    </h3>
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    {persona.description}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}