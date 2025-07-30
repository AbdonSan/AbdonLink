"use client"

import { useState, useMemo } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Briefcase,
  Code,
  Award,
  Clock,
  BookOpen,
  Search,
  Trophy,
  Target,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CurriculumPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isDarkMode, setIsDarkMode] = useState(false)

  const personalInfo = {
    name: "ABDÓN SANDOVAL PEÑA",
    email: "abdon.sandoval@gmail.com",
    phone: "+56 9 5154 7734",
    address: "Valenzuela Llanos 9165, Lo Espejo",
    birthDate: "26 abril 1987",
    rut: "16.712.750-9",
  }

  const microsoftStats = {
    modulesCompleted: 258,
    activeCertifications: 1,
    examsPassed: 2,
    historicalCertifications: 1,
    learningHours: "193h 33min",
  }

  const certifications = [
    {
      title: "MTA: Software Development Fundamentals",
      number: "C578E1-C27X5013",
      date: "13 nov 2015",
      status: "Activa",
      type: "active",
    },
    {
      title: "Microsoft Certified: Power Platform App Maker Associate",
      number: "0S2C9C-2B45F8",
      date: "26 dic 2022",
      status: "Expirada (26 dic 2023)",
      type: "expired",
    },
    {
      title: "Diplomado en Ciencia de Datos",
      institution: "Instituto Profesional DuocUC",
      number: "Registro N° 29154",
      date: "23 oct 2024",
      grade: "6.2",
      hours: "150 horas cronológicas",
      status: "Completado",
      type: "academic",
    },
  ]

  const examsPassed = [
    {
      title: "Microsoft Power Platform App Maker",
      code: "PL-100",
      date: "26 dic 2022",
    },
    {
      title: "Software Development Fundamentals",
      code: "98-361",
      date: "13 nov 2015",
    },
  ]

  // Categorización de módulos por área de conocimiento
  const moduleCategories = {
    "Azure Machine Learning": ["Azure Machine Learning", "Machine Learning", "MLflow", "AutoML"],
    "Azure Data & Analytics": ["Azure Synapse", "Azure Databricks", "Power BI", "Data Factory", "Stream Analytics"],
    "Microsoft Fabric": ["Microsoft Fabric", "Delta Lake", "Spark"],
    "Power Platform": ["Power Apps", "Power Automate", "Power BI", "Dataverse", "Power Virtual Agents"],
    "Azure Fundamentals": ["Azure", "Cloud", "Security", "Governance"],
    DevOps: ["DevOps", "GitHub", "Azure Pipelines", "CI/CD"],
    "AI & Cognitive Services": ["AI", "Computer Vision", "Text Analytics", "Bot Service"],
    "Data Fundamentals": ["SQL", "T-SQL", "Database", "Data"],
  }

  const recentModules = [
    {
      title: "Implementación de un modelo en un punto de conexión por lotes",
      description: "SDK de Python de Azure Machine Learning v2.",
      date: "24 ene 2024",
      duration: "44 min",
      category: "Azure Machine Learning",
    },
    {
      title: "Implementación de un modelo en un punto de conexión en línea administrado",
      description:
        "Aprenda a implementar modelos en un punto de conexión en línea administrado para la inferencia en tiempo real.",
      date: "24 ene 2024",
      duration: "45 min",
      category: "Azure Machine Learning",
    },
    {
      title: "Crear y explorar el panel de inteligencia artificial responsable",
      description:
        "Cree y explore el panel de inteligencia artificial responsable de un modelo en Azure Machine Learning mediante el SDK de Python v2.",
      date: "24 ene 2024",
      duration: "42 min",
      category: "Azure Machine Learning",
    },
    {
      title: "Diplomado en Ciencia de Datos",
      description: "Programa completo de 150 horas en ciencia de datos, análisis y machine learning.",
      date: "23 oct 2024",
      duration: "150 horas",
      category: "Data Science",
    },
  ]

  const workExperience = [
    {
      period: "Noviembre 2019 - Actualidad",
      company: "Kibernum IT Academy - Kibernum SA",
      position: "Consultor TI – Relator",
      activities: [
        "Administrador de plataforma Azure para Cursos",
        "Implementador y administrador de Infraestructura VMware construcción ambientes virtualizados para Cursos",
        "Consultoría con clientes Banca y Retail, levantamientos de proyectos de capacitación y mallas académicas",
        "Diseño de App Corporativas con PowerPlatform",
        "Diseño de ChatBot con Power Virtual Agents",
        "Administrador de Servidores Senior",
      ],
    },
    {
      period: "Junio 2017 - Octubre 2019",
      company: "Rscomputacion SPA",
      position: "Team Leader and Developer",
      activities: [
        "Desarrollo de Software de Gestión Interno Aspx C#",
        "Desarrollo de Software de Ticket de Soporte MVC .net C#",
        "Utilización de Face Api de Azure para Control de Acceso",
        "Control de Versiones de Proyectos en la Plataforma de Azure DevOps Server",
        "Administración de Plataforma Azure para Construcción de Base de Datos SQL y Recursos de App Services",
        "Desarrollo de Aplicaciones para Plataforma Power Apps de Office 365",
        "Desarrollo de Informes con Power BI de Office 365 y Azure SQL",
        "Administración de Plataforma VMWare para aprovisionar máquinas virtuales",
      ],
    },
    {
      period: "Julio 2015 - Mayo 2017",
      company: "Deutschepharma S.A.",
      position: "Ingeniero TI",
      activities: [
        "Manejo de SQL server 2012 DDL y DML",
        "Visual Studio C# - Desarrollo Sistema Gestión Visitas Médicas",
        "Sistema de Control de Beneficios Producto Interno",
        "Administrador de las 4 Plataforma WP de la Empresa",
        "Configuración de Infraestructura de la Oficina Red y Voz",
        "Encargado de Adquisición de Hardware",
        "Implementación de Manuales y Procedimientos",
        "Manejo de Servidores Linux",
        "Administrador de Plataforma Office 365",
      ],
    },
    {
      period: "Junio 2011 - Mayo 2015",
      company: "Empresas DMG S.A.",
      position: "Jefe Departamento TI",
      activities: [
        "Instalación y Manejo de SQL server 2005 DDL y DML",
        "Programación C# 2013 de Sistemas Internos RRHH",
        "Instalación y Configuración de Servidor Active Directory, DHCP, DNS, IIS, EXCHANGE",
        "Instalación, Configuración de Plataforma Signature xDoc Manager",
        "Modificación de Archivos RPT de Crystal Report",
        "Trabajos de Procesos y Capacitación en los Programas de uso interno",
        "Coordinación de procesos y trabajos en Sucursales",
      ],
    },
  ]

  const skills = [
    { name: "Azure Architect Administrator", level: 95, category: "Cloud" },
    { name: "SQL Server", level: 90, category: "Database" },
    { name: "Programación .Net C#", level: 88, category: "Development" },
    { name: "Power Platform", level: 92, category: "Low-Code" },
    { name: "Power BI", level: 90, category: "Analytics" },
    { name: "Python", level: 85, category: "Development" },
    { name: "Machine Learning", level: 80, category: "AI/ML" },
    { name: "Azure Machine Learning", level: 85, category: "AI/ML" },
    { name: "DevOps", level: 82, category: "Operations" },
    { name: "Data Science", level: 83, category: "Analytics" },
  ]

  const filteredModules = useMemo(() => {
    return recentModules.filter((module) => {
      const matchesSearch =
        module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || module.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const skillCategories = [...new Set(skills.map((skill) => skill.category))]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark bg-slate-900" : "bg-gradient-to-br from-slate-50 to-slate-100"}`}
    >
      {/* Header/Hero Section */}
      <div
        className={`${isDarkMode ? "bg-gradient-to-r from-slate-800 to-slate-600" : "bg-gradient-to-r from-slate-900 to-slate-700"} text-white relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-40 h-40 bg-slate-600/50 rounded-full flex items-center justify-center backdrop-blur-sm border-4 border-white/20">
                  <User size={80} className="text-slate-200" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h1>
                <p className="text-xl lg:text-2xl text-slate-200 mb-6">
                  Consultor TI | Especialista en Azure | Relator | Data Scientist
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-200">
                  <div className="flex items-center gap-2">
                    <Mail size={18} />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={18} />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>{personalInfo.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{personalInfo.birthDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  {isDarkMode ? "☀️" : "🌙"} {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Estadísticas de Microsoft Learn */}
          <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
            <CardHeader>
              <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                <Trophy className="text-blue-600" />
                Estadísticas de Aprendizaje Microsoft Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>
                    {microsoftStats.modulesCompleted}
                  </div>
                  <div className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Módulos Completados
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${isDarkMode ? "text-green-400" : "text-green-600"}`}>
                    {microsoftStats.activeCertifications}
                  </div>
                  <div className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Certificaciones Activas
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${isDarkMode ? "text-purple-400" : "text-purple-600"}`}>
                    {microsoftStats.examsPassed}
                  </div>
                  <div className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Exámenes Aprobados
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>
                    {microsoftStats.historicalCertifications}
                  </div>
                  <div className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>Cert. Históricas</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${isDarkMode ? "text-red-400" : "text-red-600"}`}>
                    {microsoftStats.learningHours}
                  </div>
                  <div className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    Horas de Aprendizaje
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabs principales */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className={`grid w-full grid-cols-5 ${isDarkMode ? "bg-slate-800" : ""}`}>
              <TabsTrigger value="overview">Resumen</TabsTrigger>
              <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="learning">Aprendizaje</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Presentación */}
              <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                    <User className="text-slate-600" />
                    Presentación Profesional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`${isDarkMode ? "text-slate-300" : "text-slate-700"} leading-relaxed`}>
                    Actualmente me desempeño como Consultor TI, participando en distintos proyectos de implementación de
                    soluciones Azure, en modelos SaaS, PaaS, principalmente como administrador e implementador.
                  </p>
                  <p className={`${isDarkMode ? "text-slate-300" : "text-slate-700"} leading-relaxed mt-4`}>
                    He realizado distintas capacitaciones como relator de Kibernum IT Academy, dictando Workshop de
                    Azure, Cursos de SQL Server y Power BI, Programas de Arquitectura Cloud, Ayudante de Programas
                    DevOps y Ciencias de Datos, SharePoint y Power Platform, entre otros.
                  </p>
                  <p className={`${isDarkMode ? "text-slate-300" : "text-slate-700"} leading-relaxed mt-4`}>
                    Recientemente completé un Diplomado en Ciencia de Datos en DuocUC, complementando mi experiencia
                    técnica con conocimientos avanzados en análisis de datos y machine learning.
                  </p>
                </CardContent>
              </Card>

              {/* Módulos Recientes */}
              <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                    <BookOpen className="text-slate-600" />
                    Aprendizaje Reciente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recentModules.slice(0, 4).map((module, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}
                      >
                        <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-800"} mb-2`}>
                          {module.title}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"} mb-2`}>
                          {module.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <Badge variant="secondary">{module.category}</Badge>
                          <span className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6">
              <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                    <Award className="text-slate-600" />
                    Certificaciones y Títulos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className={`p-6 rounded-lg border ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                              {cert.title}
                            </h3>
                            {cert.institution && (
                              <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                                {cert.institution}
                              </p>
                            )}
                          </div>
                          <Badge
                            variant={
                              cert.type === "active" ? "default" : cert.type === "expired" ? "destructive" : "secondary"
                            }
                          >
                            {cert.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className={`font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                              Número:
                            </span>
                            <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>{cert.number}</span>
                          </div>
                          <div>
                            <span className={`font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                              Fecha:
                            </span>
                            <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>{cert.date}</span>
                          </div>
                          {cert.grade && (
                            <div>
                              <span className={`font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                                Nota:
                              </span>
                              <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>{cert.grade}</span>
                            </div>
                          )}
                          {cert.hours && (
                            <div className="md:col-span-3">
                              <span className={`font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                                Duración:
                              </span>
                              <span className={isDarkMode ? "text-slate-400" : "text-slate-500"}>{cert.hours}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Exámenes Aprobados */}
              <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                    <Target className="text-slate-600" />
                    Exámenes Aprobados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {examsPassed.map((exam, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}
                      >
                        <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-800"} mb-2`}>
                          {exam.title}
                        </h4>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline">{exam.code}</Badge>
                          <span className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                            {exam.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                    <Briefcase className="text-slate-600" />
                    Experiencia Laboral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {workExperience.map((job, index) => (
                      <AccordionItem key={index} value={`job-${index}`}>
                        <AccordionTrigger className={isDarkMode ? "text-white hover:text-slate-300" : ""}>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold">{job.position}</h3>
                            <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                              {job.company} • {job.period}
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-4">
                            {job.activities.map((activity, actIndex) => (
                              <li
                                key={actIndex}
                                className={`${isDarkMode ? "text-slate-300" : "text-slate-700"} flex items-start gap-2`}
                              >
                                <span className={`${isDarkMode ? "text-slate-500" : "text-slate-400"} mt-1`}>•</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="space-y-6">
              <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                    <Code className="text-slate-600" />
                    Habilidades Técnicas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all-skills" className="w-full">
                    <TabsList className={`grid w-full grid-cols-4 ${isDarkMode ? "bg-slate-700" : ""}`}>
                      <TabsTrigger value="all-skills">Todas</TabsTrigger>
                      <TabsTrigger value="cloud">Cloud</TabsTrigger>
                      <TabsTrigger value="development">Desarrollo</TabsTrigger>
                      <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all-skills" className="space-y-4 mt-6">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className={`font-medium ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                              {skill.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {skill.category}
                              </Badge>
                              <span className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </TabsContent>

                    {skillCategories.map((category) => (
                      <TabsContent key={category} value={category.toLowerCase()} className="space-y-4 mt-6">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className={`font-medium ${isDarkMode ? "text-white" : "text-slate-800"}`}>
                                  {skill.name}
                                </span>
                                <span className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                                  {skill.level}%
                                </span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </div>
                          ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="learning" className="space-y-6">
              {/* Filtros de búsqueda */}
              <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 ${isDarkMode ? "text-white" : ""}`}>
                    <Search className="text-slate-600" />
                    Explorar Módulos de Aprendizaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                      <Input
                        placeholder="Buscar módulos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={isDarkMode ? "bg-slate-700 border-slate-600 text-white" : ""}
                      />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger
                        className={`w-full md:w-[200px] ${isDarkMode ? "bg-slate-700 border-slate-600 text-white" : ""}`}
                      >
                        <SelectValue placeholder="Categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas las categorías</SelectItem>
                        {Object.keys(moduleCategories).map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredModules.map((module, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${isDarkMode ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"}`}
                      >
                        <h4 className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-800"} mb-2`}>
                          {module.title}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"} mb-3`}>
                          {module.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <Badge variant="secondary">{module.category}</Badge>
                          <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Clock size={12} />
                            <span>{module.duration}</span>
                          </div>
                        </div>
                        <div className={`text-xs ${isDarkMode ? "text-slate-400" : "text-slate-500"} mt-2`}>
                          Completado: {module.date}
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredModules.length === 0 && (
                    <div className={`text-center py-8 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                      No se encontraron módulos que coincidan con los criterios de búsqueda.
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Referencias */}
          <Card className={isDarkMode ? "bg-slate-800 border-slate-700" : ""}>
            <CardHeader>
              <CardTitle className={`${isDarkMode ? "text-white" : ""}`}>Referencias Laborales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`p-4 rounded-lg ${isDarkMode ? "bg-slate-700" : "bg-slate-50"}`}>
                <h3 className={`font-semibold ${isDarkMode ? "text-white" : "text-slate-800"}`}>MARIO MORENO</h3>
                <p className={`${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                  Gerente Informática, Holding DIMERC
                </p>
                <div className="mt-2 space-y-1">
                  <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    <span className="font-medium">Teléfono:</span> +56 9 9320 9526
                  </p>
                  <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                    <span className="font-medium">Email:</span> mmoreno@dimerc.cl
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center py-8">
            <Separator className="mb-6" />
            <p className={`${isDarkMode ? "text-slate-400" : "text-slate-500"} text-sm`}>
              RUT: {personalInfo.rut} | Currículum actualizado 2025 |
              <span className="ml-2">
                {microsoftStats.modulesCompleted} módulos completados • {microsoftStats.learningHours} de aprendizaje
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
