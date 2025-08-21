import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Scale, Shield, Users, FileText } from "lucide-react"

export default function LegalConsultationLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">LegalConsulta</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
              Cómo Funciona
            </a>
            <a href="#preguntas" className="text-muted-foreground hover:text-foreground transition-colors">
              Preguntas
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
          </nav>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/consultation">Consultar Ahora</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-accent text-accent-foreground w-fit">Respuesta en 48 hs hábiles</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Consulta Legal Online por solo <span className="text-primary">1 Jus</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Soy abogada y creo en el derecho como herramienta para resolver conflictos con claridad y rapidez. Obtén
                un primer análisis profesional de tu caso legal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="/consultation">
                    <FileText className="mr-2 h-5 w-5" />
                    Hacer Consulta
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#servicios">Ver Áreas de Práctica</a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Respuesta garantizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">100% confidencial</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/specter_desk.png"
                alt="Abogada profesional en su oficina"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Áreas de Práctica Legal</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especializada en las áreas legales más demandadas con años de experiencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-card-foreground">Derecho Laboral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-card-foreground/80">
                  Despidos, indemnizaciones, acoso laboral y conflictos con empleadores
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-card-foreground">ART y Seguros</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-card-foreground/80">
                  Accidentes de trabajo, enfermedades profesionales y reclamos de seguros
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-card-foreground">Multas y Reclamos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-card-foreground/80">
                  Multas administrativas, reclamos ante organismos públicos
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Scale className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-card-foreground">Civil y Comercial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-card-foreground/80">
                  Contratos, daños y perjuicios, cobro de deudas y disputas comerciales
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Cómo Funciona</h2>
            <p className="text-xl text-muted-foreground">
              Proceso simple y transparente para obtener asesoría legal profesional
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Envía tu Consulta</h3>
              <p className="text-muted-foreground">
                Describe tu situación legal de forma detallada. Incluye todos los datos relevantes para un mejor
                análisis.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Paga 1 Jus</h3>
              <p className="text-muted-foreground">
                Realiza el pago seguro de 1 Jus por tu consulta legal. Precio fijo y transparente.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Recibe Respuesta</h3>
              <p className="text-muted-foreground">
                En máximo 48 horas hábiles recibirás un análisis profesional de tu caso con recomendaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/50 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">LegalConsulta</span>
              </div>
              <p className="text-muted-foreground">
                Asesoría legal profesional online. Resolvemos tus dudas legales con claridad y rapidez.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Áreas de Práctica</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Derecho Laboral</li>
                <li>ART y Seguros</li>
                <li>Multas Administrativas</li>
                <li>Civil y Comercial</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 consultas@legalconsulta.com</p>
                <p>⏰ Respuesta en 48 hs hábiles</p>
                <p>💰 Consulta: 1 Jus</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 LegalConsulta. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
