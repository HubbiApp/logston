import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <Image
              src="/PHOTO-2025-05-30-10-08-57 2.jpg"
              alt="Logston"
              width={160}
              height={45}
              className="h-11 w-auto"
            />
          </div>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-start mb-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Fale Conosco
            </Link>
          </nav>
          <p className="text-center md:text-left text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Logston. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}