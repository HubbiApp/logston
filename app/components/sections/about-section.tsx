import { Package2, Building2, Truck, Package, FileText, Users, Lock } from "lucide-react"

const features = [
  {
    name: 'Área de gestão para armazéns',
    description: 'Interface completa para operadores logísticos gerenciarem múltiplos clientes',
    icon: Building2,
  },
  {
    name: 'Área de gestão para empresas remetentes',
    description: 'Painel de controle dedicado para empresas monitorarem e gerenciarem seus estoques',
    icon: Truck,
  },
  {
    name: 'Gestão de estoque por lote',
    description: 'Controle detalhado de entrada, saída e posicionamento de cada lote no armazém',
    icon: Package,
  },
  {
    name: 'Emissão e leitura de NF-e',
    description: 'Integração completa com notas fiscais eletrônicas para envio e recebimento',
    icon: FileText,
  },
  {
    name: 'Acesso multiusuário com permissões',
    description: 'Defina exatamente o que cada perfil de usuário pode ver e fazer no sistema',
    icon: Users,
  },
  {
    name: 'Plataforma segura e escalável',
    description: 'Infraestrutura robusta que cresce com seu negócio e protege seus dados',
    icon: Lock,
  },
]

export default function AboutSection() {
  return (
    <div className="py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Conheça</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            O Que é a Logston?
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A Logston é um software white label de gestão logística que conecta empresas e armazéns. 
            Empresas remetentes podem enviar seus estoques para parceiros logísticos, acompanhar o inventário em tempo real, 
            emitir notas fiscais e solicitar a separação e o envio dos pedidos — tudo em uma plataforma unificada com identidade visual personalizada.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}