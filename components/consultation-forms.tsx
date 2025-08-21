"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Users, Shield, FileText, Scale } from "lucide-react"

type FormType = "labor" | "art" | "administrative" | "civil" | null

export default function ConsultationForms() {
  const [selectedForm, setSelectedForm] = useState<FormType>(null)

  const renderFormSelector = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Selecciona tu Área de Consulta</h2>
        <p className="text-muted-foreground">Elige el área legal que mejor describe tu situación</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
          onClick={() => setSelectedForm("labor")}
        >
          <CardHeader>
            <Users className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Derecho Laboral</CardTitle>
            <CardDescription>Despidos, indemnizaciones, acoso laboral, conflictos con empleadores</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
          onClick={() => setSelectedForm("art")}
        >
          <CardHeader>
            <Shield className="h-10 w-10 text-primary mb-2" />
            <CardTitle>ART y Seguros</CardTitle>
            <CardDescription>Accidentes de trabajo, enfermedades profesionales, reclamos de seguros</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
          onClick={() => setSelectedForm("administrative")}
        >
          <CardHeader>
            <FileText className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Multas y Reclamos</CardTitle>
            <CardDescription>Multas administrativas, reclamos ante organismos públicos</CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary"
          onClick={() => setSelectedForm("civil")}
        >
          <CardHeader>
            <Scale className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Civil y Comercial</CardTitle>
            <CardDescription>Contratos, daños y perjuicios, cobro de deudas, disputas comerciales</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )

  const renderLaborForm = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="sm" onClick={() => setSelectedForm(null)} className="p-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Users className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Consulta de Derecho Laboral</CardTitle>
        <CardDescription>
          Completa los datos sobre tu situación laboral para recibir asesoría especializada
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input id="name" placeholder="Tu nombre completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Empresa/Empleador</Label>
          <Input id="company" placeholder="Nombre de la empresa" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="position">Puesto de trabajo</Label>
            <Input id="position" placeholder="Tu cargo o posición" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="employment-type">Tipo de contrato</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="indefinido">Contrato indefinido</SelectItem>
                <SelectItem value="temporal">Contrato temporal</SelectItem>
                <SelectItem value="freelance">Freelance/Autónomo</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="issue-type">Tipo de problema laboral *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el problema" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="despido">Despido improcedente</SelectItem>
              <SelectItem value="indemnizacion">Cálculo de indemnización</SelectItem>
              <SelectItem value="acoso">Acoso laboral</SelectItem>
              <SelectItem value="salarios">Impago de salarios</SelectItem>
              <SelectItem value="horas">Horas extras no pagadas</SelectItem>
              <SelectItem value="discriminacion">Discriminación</SelectItem>
              <SelectItem value="otro">Otro problema laboral</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="work-duration">Tiempo trabajado en la empresa</Label>
          <Input id="work-duration" placeholder="Ej: 2 años y 3 meses" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descripción detallada del problema *</Label>
          <Textarea
            id="description"
            placeholder="Describe tu situación con el mayor detalle posible. Incluye fechas, nombres, documentos que tengas, etc."
            className="min-h-32"
          />
        </div>

        <div className="space-y-4">
          <Label>Documentos disponibles (marca los que tienes)</Label>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Contrato de trabajo",
              "Nóminas/recibos de sueldo",
              "Carta de despido",
              "Comunicaciones por email",
              "Testigos del incidente",
              "Certificado médico",
            ].map((doc) => (
              <div key={doc} className="flex items-center space-x-2">
                <Checkbox id={doc} />
                <Label htmlFor={doc} className="text-sm">
                  {doc}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales
          </Label>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">Enviar Consulta - 1 Jus</Button>
      </CardContent>
    </Card>
  )

  const renderARTForm = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="sm" onClick={() => setSelectedForm(null)} className="p-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Shield className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Consulta ART y Seguros</CardTitle>
        <CardDescription>Completa los datos sobre tu accidente laboral o reclamo de seguro</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input id="name" placeholder="Tu nombre completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Empresa donde trabajas/trabajabas</Label>
          <Input id="company" placeholder="Nombre de la empresa" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="art-company">Compañía ART</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona la ART" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="galeno">Galeno ART</SelectItem>
              <SelectItem value="provincia">Provincia ART</SelectItem>
              <SelectItem value="sancor">Sancor Seguros</SelectItem>
              <SelectItem value="liberty">Liberty ART</SelectItem>
              <SelectItem value="mapfre">MAPFRE Argentina ART</SelectItem>
              <SelectItem value="otra">Otra ART</SelectItem>
              <SelectItem value="no-se">No sé cuál es</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="incident-type">Tipo de incidente *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="accidente-trabajo">Accidente de trabajo</SelectItem>
              <SelectItem value="accidente-itinere">Accidente in itinere (ida/vuelta trabajo)</SelectItem>
              <SelectItem value="enfermedad-profesional">Enfermedad profesional</SelectItem>
              <SelectItem value="rechazo-denuncia">Rechazo de denuncia</SelectItem>
              <SelectItem value="prestaciones-medicas">Problemas con prestaciones médicas</SelectItem>
              <SelectItem value="indemnizacion">Reclamo de indemnización</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="incident-date">Fecha del incidente</Label>
            <Input id="incident-date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="report-date">Fecha de denuncia a ART</Label>
            <Input id="report-date" type="date" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="body-part">Parte del cuerpo afectada</Label>
          <Input id="body-part" placeholder="Ej: Espalda, mano derecha, rodilla izquierda" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="current-status">Estado actual del caso</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tratamiento">En tratamiento médico</SelectItem>
              <SelectItem value="alta-medica">Recibí alta médica</SelectItem>
              <SelectItem value="rechazado">Caso rechazado por ART</SelectItem>
              <SelectItem value="incapacidad">Declararon incapacidad</SelectItem>
              <SelectItem value="sin-respuesta">ART no responde</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descripción detallada del incidente *</Label>
          <Textarea
            id="description"
            placeholder="Describe cómo ocurrió el accidente o cómo se desarrolló la enfermedad. Incluye lugar, hora, testigos, primeros auxilios recibidos, etc."
            className="min-h-32"
          />
        </div>

        <div className="space-y-4">
          <Label>Documentos disponibles (marca los que tienes)</Label>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Denuncia de accidente",
              "Certificados médicos",
              "Estudios médicos (rayos X, resonancias)",
              "Dictamen de incapacidad",
              "Comunicaciones con ART",
              "Testigos del accidente",
            ].map((doc) => (
              <div key={doc} className="flex items-center space-x-2">
                <Checkbox id={doc} />
                <Label htmlFor={doc} className="text-sm">
                  {doc}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales
          </Label>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">Enviar Consulta - 1 Jus</Button>
      </CardContent>
    </Card>
  )

  const renderAdministrativeForm = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="sm" onClick={() => setSelectedForm(null)} className="p-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Consulta Multas y Reclamos Administrativos</CardTitle>
        <CardDescription>Completa los datos sobre tu multa o reclamo ante organismos públicos</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input id="name" placeholder="Tu nombre completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dni">DNI/CUIT</Label>
            <Input id="dni" placeholder="Número de documento" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" placeholder="Tu número de teléfono" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="case-type">Tipo de caso *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="multa-transito">Multa de tránsito</SelectItem>
              <SelectItem value="multa-municipal">Multa municipal</SelectItem>
              <SelectItem value="afip">Reclamo AFIP</SelectItem>
              <SelectItem value="anses">Reclamo ANSES</SelectItem>
              <SelectItem value="defensa-consumidor">Defensa del Consumidor</SelectItem>
              <SelectItem value="registro-civil">Registro Civil</SelectItem>
              <SelectItem value="migraciones">Migraciones</SelectItem>
              <SelectItem value="otro-organismo">Otro organismo público</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="organism">Organismo que emitió la multa/reclamo</Label>
          <Input id="organism" placeholder="Ej: Municipalidad de Buenos Aires, AFIP, etc." />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fine-number">Número de multa/expediente</Label>
            <Input id="fine-number" placeholder="Número de identificación" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fine-date">Fecha de la multa/notificación</Label>
            <Input id="fine-date" type="date" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fine-amount">Monto de la multa (si aplica)</Label>
          <Input id="fine-amount" placeholder="Ej: $50,000" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="current-status">Estado actual del caso</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recien-recibida">Recién recibí la multa</SelectItem>
              <SelectItem value="vencimiento-proximo">Vencimiento próximo</SelectItem>
              <SelectItem value="ya-vencida">Ya está vencida</SelectItem>
              <SelectItem value="descargo-presentado">Presenté descargo</SelectItem>
              <SelectItem value="rechazado">Descargo rechazado</SelectItem>
              <SelectItem value="plan-pago">En plan de pago</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descripción detallada del caso *</Label>
          <Textarea
            id="description"
            placeholder="Describe la situación: qué pasó, cuándo, dónde, por qué consideras que la multa es incorrecta, qué gestiones hiciste, etc."
            className="min-h-32"
          />
        </div>

        <div className="space-y-4">
          <Label>Documentos disponibles (marca los que tienes)</Label>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Cédula de notificación",
              "Acta de infracción",
              "Fotos del lugar/situación",
              "Testigos",
              "Comprobantes de pago",
              "Descargo presentado",
              "Comunicaciones con el organismo",
              "Documentación del vehículo",
            ].map((doc) => (
              <div key={doc} className="flex items-center space-x-2">
                <Checkbox id={doc} />
                <Label htmlFor={doc} className="text-sm">
                  {doc}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales
          </Label>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">Enviar Consulta - 1 Jus</Button>
      </CardContent>
    </Card>
  )

  const renderCivilForm = () => (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Button variant="ghost" size="sm" onClick={() => setSelectedForm(null)} className="p-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Scale className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Consulta Civil y Comercial</CardTitle>
        <CardDescription>
          Completa los datos sobre tu caso civil o comercial para recibir asesoría especializada
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input id="name" placeholder="Tu nombre completo" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dni">DNI/CUIT</Label>
            <Input id="dni" placeholder="Número de documento" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" placeholder="Tu número de teléfono" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="case-type">Tipo de caso *</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="contratos">Problemas con contratos</SelectItem>
              <SelectItem value="cobro-deudas">Cobro de deudas</SelectItem>
              <SelectItem value="danos-perjuicios">Daños y perjuicios</SelectItem>
              <SelectItem value="alquileres">Problemas de alquileres</SelectItem>
              <SelectItem value="sociedades">Conflictos societarios</SelectItem>
              <SelectItem value="consumidor">Defensa del consumidor</SelectItem>
              <SelectItem value="responsabilidad-civil">Responsabilidad civil</SelectItem>
              <SelectItem value="otro">Otro caso civil/comercial</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="other-party">Otra parte involucrada</Label>
          <Input id="other-party" placeholder="Nombre de la persona/empresa con la que tienes el conflicto" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Monto involucrado (si aplica)</Label>
            <Input id="amount" placeholder="Ej: $500,000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="incident-date">Fecha del problema/incumplimiento</Label>
            <Input id="incident-date" type="date" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contract-type">Tipo de contrato/acuerdo (si aplica)</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compraventa">Compraventa</SelectItem>
              <SelectItem value="locacion">Locación/Alquiler</SelectItem>
              <SelectItem value="prestacion-servicios">Prestación de servicios</SelectItem>
              <SelectItem value="obra">Contrato de obra</SelectItem>
              <SelectItem value="sociedad">Contrato de sociedad</SelectItem>
              <SelectItem value="mandato">Mandato/Representación</SelectItem>
              <SelectItem value="verbal">Acuerdo verbal</SelectItem>
              <SelectItem value="otro">Otro tipo</SelectItem>
              <SelectItem value="no-aplica">No aplica</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="current-status">Estado actual del caso</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona el estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recien-sucedio">Recién sucedió</SelectItem>
              <SelectItem value="negociando">Intentando negociar</SelectItem>
              <SelectItem value="sin-respuesta">La otra parte no responde</SelectItem>
              <SelectItem value="mediacion">En mediación</SelectItem>
              <SelectItem value="carta-documento">Envié carta documento</SelectItem>
              <SelectItem value="demanda-iniciada">Ya inicié demanda</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descripción detallada del caso *</Label>
          <Textarea
            id="description"
            placeholder="Describe la situación: qué se acordó, qué se incumplió, cuándo, cómo, qué gestiones realizaste, etc. Incluye todos los detalles relevantes."
            className="min-h-32"
          />
        </div>

        <div className="space-y-4">
          <Label>Documentos disponibles (marca los que tienes)</Label>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              "Contrato firmado",
              "Emails/WhatsApp",
              "Comprobantes de pago",
              "Facturas/Recibos",
              "Carta documento",
              "Testigos",
              "Fotos/Videos",
              "Peritajes/Presupuestos",
            ].map((doc) => (
              <div key={doc} className="flex items-center space-x-2">
                <Checkbox id={doc} />
                <Label htmlFor={doc} className="text-sm">
                  {doc}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm">
            Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales
          </Label>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90">Enviar Consulta - 1 Jus</Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {selectedForm === null && renderFormSelector()}
        {selectedForm === "labor" && renderLaborForm()}
        {selectedForm === "art" && renderARTForm()}
        {selectedForm === "administrative" && renderAdministrativeForm()}
        {selectedForm === "civil" && renderCivilForm()}
      </div>
    </div>
  )
}
