"use client"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "../contact-form"

export default function CTASection() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  return (
    <div className="bg-blue-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Pronto para revolucionar
            <br />
            sua operação logística?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100"
          >
            Inicie agora mesmo e descubra como a Logston pode transformar a gestão 
            dos seus processos logísticos.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-center"
          >
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 group"
              onClick={() => setContactFormOpen(true)}
            >
              Solicite uma Demonstração
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
      <ContactForm isOpen={contactFormOpen} onClose={() => setContactFormOpen(false)} />
    </div>
  )
}