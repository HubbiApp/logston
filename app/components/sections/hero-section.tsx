"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ContactForm from "../contact-form"

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <div className="relative isolate overflow-hidden pt-14">
      <div 
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" 
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#3b82f6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-x-10 lg:items-center">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-shrink-0 lg:pt-8">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                  Novo
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground">
                  <span>Agora com suporte a NF-e</span>
                </span>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Logston: O Futuro do Fulfillment em White Label
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transforme sua operação logística com uma plataforma white label completa para gestão de armazéns e envio de remessas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-x-6">
              <Button 
                variant="accent" 
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={() => setContactFormOpen(true)}
              >
                Solicite uma Demonstração
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2 w-full sm:w-auto"
                onClick={() => setVideoModalOpen(true)}
              >
                <Play className="h-4 w-4" />
                Veja Como Funciona
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg"
                  alt="Modern warehouse interior with automated systems"
                  className="w-full max-w-[48rem] rounded-md shadow-2xl ring-1 ring-gray-900/10 object-cover aspect-[16/9]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setVideoModalOpen(false)}>
          <div className="relative bg-background rounded-lg w-full max-w-4xl mx-4" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white bg-black/20 rounded-full p-2 hover:bg-black/40 transition-colors"
              onClick={() => setVideoModalOpen(false)}
            >
              <span className="sr-only">Fechar</span>
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video">
              <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                <p>Vídeo demonstrativo do Logston</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </div>
  )
}