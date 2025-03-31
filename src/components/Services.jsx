import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
import { Clock, Database, BarChart2, Zap, Users, Shield, TrendingUp, DollarSign } from 'lucide-react';
import "../assets/styles/services.css";

// Datos mejorados para los gráficos
const efficiencyData = [
  { name: 'Ene', value: 32, baseline: 32 },
  { name: 'Feb', value: 38, baseline: 33 },
  { name: 'Mar', value: 45, baseline: 34 },
  { name: 'Abr', value: 58, baseline: 35 },
  { name: 'May', value: 67, baseline: 36 },
  { name: 'Jun', value: 78, baseline: 37 },
  { name: 'Jul', value: 89, baseline: 38 },
];

const roiData = [
  { name: '1 mes', value: 15 },
  { name: '3 meses', value: 45 },
  { name: '6 meses', value: 95 },
  { name: '12 meses', value: 210 },
  { name: '18 meses', value: 320 },
];

// Componente de tarjeta mejorado
const ServiceCard = ({ title, description, icon, metrics, color, hoverColor }) => (
  <motion.article
    className="relative bg-white borderRadius p-6 shadow-md border hover:border-gray-200 transition-all"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    aria-labelledby={`service-${title}`}
    role="article"
  >
    <div className="flex items-start mb-4">
      <div className={`p-3 rounded-lg ${color} text-white mr-4 shadow-md`}>
        {icon}
      </div>
      <div>
        <h3 id={`service-${title}`} className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
    {metrics && (
      <div className="mt-5 pt-5 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-xs font-medium text-gray-500">{metric.label}</span>
              <div className="flex items-baseline">
                <span className={`text-xl font-bold ${metric.color || "text-gray-800"}`}>{metric.value}</span>
                {metric.change && (
                  <span className={`ml-1 text-xs ${metric.change.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                )}
              </div>
              {metric.subtext && <span className="text-xs text-gray-400 mt-0.5">{metric.subtext}</span>}
            </div>
          ))}
        </div>
      </div>
    )}
  </motion.article>
);

// Componente de testimonio
const Testimonial = ({ quote, author, company, image }) => (
  <motion.div
    className="bg-white p-5 borderRadius shadow-md border border-gray-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 borderRadius bg-gray-200 overflow-hidden mr-3">
        {image ? (
          <img src={image || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white font-bold">
            {author.charAt(0)}
          </div>
        )}
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{author}</h4>
        <p className="text-xs text-gray-500">{company}</p>
      </div>
    </div>
    <p className="text-gray-600 text-sm italic">"{quote}"</p>
  </motion.div>
);

// Componente principal mejorado
export default function Services() {
  return (
    <section 
      className="w-full py-16" 
      id="services"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <motion.span 
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 borderRadius text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            SOLUCIONES EMPRESARIALES
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Sistemas hechos a medida para vos
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Centralizá cada actividad de tu negocio en un solo lugar y optimizá tus procesos con soluciones 
            personalizadas que se adaptan perfectamente a tus necesidades específicas.
          </motion.p>
        </div>

        {/* Gráfico principal mejorado */}
        <motion.div
          className="bg-white borderRadius shadow-md p-8 mb-10 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="font-bold text-xl text-gray-800">Incremento de productividad</h3>
              <p className="text-gray-500 text-sm mt-1">Comparativa de empresas con y sin sistemas personalizados</p>
            </div>
            <div className="mt-3 md:mt-0 flex items-center">
              <div className="bg-green-100 text-green-800 text-xs px-3 py-1.5 borderRadius flex items-center mr-3">
                <span className="w-2 h-2 bg-green-500 borderRadius mr-1.5"></span>
                <span>Con sistema personalizado</span>
              </div>
              <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 borderRadius flex items-center">
                <span className="w-2 h-2 bg-gray-400 borderRadius mr-1.5"></span>
                <span>Sin sistema</span>
              </div>
            </div>
          </div>
          
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={efficiencyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9ca3af" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9ca3af" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="#f5f5f5" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                formatter={(value) => [`${value}%`, 'Productividad']}
                labelFormatter={(label) => `Mes: ${label}`}
              />
              <Area 
                type="monotone" 
                dataKey="baseline" 
                stroke="#9ca3af" 
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorBaseline)" 
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-green-600">+134%</h4>
              <p className="text-sm text-gray-600">Incremento promedio de productividad</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-blue-600">-68%</h4>
              <p className="text-sm text-gray-600">Reducción de errores operativos</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-purple-600">320%</h4>
              <p className="text-sm text-gray-600">ROI promedio en 18 meses</p>
            </div>
          </div>
        </motion.div>

        {/* Tarjetas de beneficios mejoradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ServiceCard
            title="Centralización de datos"
            description="Unifica toda la información crítica de tu empresa en un solo sistema integrado, eliminando silos de información y duplicidades."
            icon={<Database size={24} />}
            color="bg-blue-500"
            metrics={[
              { 
                label: "Reducción de errores", 
                value: "87%", 
                color: "text-blue-600",
                change: "-87% vs. sistemas separados",
                subtext: "Basado en 50+ implementaciones"
              },
              { 
                label: "Acceso a información", 
                value: "5.2x", 
                color: "text-blue-600",
                change: "+520% más rápido",
                subtext: "Tiempo promedio de búsqueda"
              },
              { 
                label: "Ahorro de tiempo", 
                value: "12h/sem", 
                color: "text-blue-600",
                subtext: "Por empleado administrativo"
              },
              { 
                label: "Integridad de datos", 
                value: "99.8%", 
                color: "text-blue-600",
                change: "+42% vs. sistemas genéricos",
                subtext: "Precisión en registros críticos"
              }
            ]}
          />
          
          <ServiceCard
            title="Automatización de procesos"
            description="Elimina tareas repetitivas y reduce el tiempo dedicado a operaciones manuales con flujos de trabajo inteligentes."
            icon={<Zap size={24} />}
            color="bg-amber-500"
            metrics={[
              { 
                label: "Tareas automatizadas", 
                value: "65%", 
                color: "text-amber-600",
                subtext: "De procesos administrativos"
              },
              { 
                label: "Reducción de costos", 
                value: "42%", 
                color: "text-amber-600",
                change: "-$15,800/mes promedio",
                subtext: "En operaciones manuales"
              },
              { 
                label: "Tiempo liberado", 
                value: "18h/sem", 
                color: "text-amber-600",
                subtext: "Por departamento"
              },
              { 
                label: "ROI promedio", 
                value: "320%", 
                color: "text-amber-600",
                change: "+320% en 18 meses",
                subtext: "Retorno sobre inversión"
              }
            ]}
          />
          
          <ServiceCard
            title="Métricas en tiempo real"
            description="Dashboards personalizados con visualización instantánea de los KPIs que realmente importan para tu negocio."
            icon={<BarChart2 size={24} />}
            color="bg-purple-500"
            metrics={[
              { 
                label: "Decisiones basadas en datos", 
                value: "+75%", 
                color: "text-purple-600",
                subtext: "Incremento en decisiones informadas"
              },
              { 
                label: "Tiempo de reacción", 
                value: "-68%", 
                color: "text-purple-600",
                change: "De 3.2 días a 1 día",
                subtext: "Ante cambios en el mercado"
              },
              { 
                label: "Precisión de pronósticos", 
                value: "92%", 
                color: "text-purple-600",
                change: "+27% vs. métodos tradicionales",
                subtext: "En proyecciones financieras"
              },
              { 
                label: "Incremento en ventas", 
                value: "+23%", 
                color: "text-purple-600",
                subtext: "Promedio tras implementación"
              }
            ]}
          />
          
          <ServiceCard
            title="Optimización de tiempos"
            description="Reduce los tiempos de espera y mejora la experiencia de tus clientes y empleados con procesos optimizados."
            icon={<Clock size={24} />}
            color="bg-rose-500"
            metrics={[
              { 
                label: "Tiempo de respuesta", 
                value: "-72%", 
                color: "text-rose-600",
                change: "De 48h a 13.4h promedio",
                subtext: "En resolución de solicitudes"
              },
              { 
                label: "Satisfacción del cliente", 
                value: "+48%", 
                color: "text-rose-600",
                subtext: "Medido en NPS"
              },
              { 
                label: "Retención de clientes", 
                value: "+35%", 
                color: "text-rose-600",
                change: "Incremento anual",
                subtext: "Tras implementación"
              },
              { 
                label: "Eficiencia operativa", 
                value: "+61%", 
                color: "text-rose-600",
                subtext: "En procesos críticos"
              }
            ]}
          />
        </div>

        {/* Sección de ROI */}
        <motion.div
          className="bg-white borderRadius shadow-md p-8 mb-10 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="font-bold text-xl text-gray-800">Retorno de inversión proyectado</h3>
              <p className="text-gray-500 text-sm mt-1">Basado en datos reales de clientes</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={roiData} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
                  <CartesianGrid vertical={false} stroke="#f5f5f5" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                    formatter={(value) => [`${value}%`, 'ROI']}
                    labelFormatter={(label) => `Período: ${label}`}
                  />
                  <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">¿Por qué nuestros sistemas generan tanto valor?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 borderRadius mr-3 mt-1">
                    <TrendingUp size={16} className="text-green-600" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Adaptación perfecta:</span> Diseñados específicamente para tus procesos, eliminando funcionalidades innecesarias y potenciando las críticas.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 borderRadius mr-3 mt-1">
                    <Users size={16} className="text-blue-600" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Adopción superior:</span> Interfaces intuitivas diseñadas para tus usuarios específicos, reduciendo la curva de aprendizaje.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-1 borderRadius mr-3 mt-1">
                    <Shield size={16} className="text-amber-600" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Seguridad reforzada:</span> Protocolos de seguridad adaptados a tus necesidades específicas y cumplimiento normativo.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-rose-100 p-1 borderRadius mr-3 mt-1">
                    <DollarSign size={16} className="text-rose-600" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Escalabilidad rentable:</span> Crecimiento modular que te permite invertir solo en lo que necesitas, cuando lo necesitas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA mejorado */}
        <motion.div
          className="text-center bg-gradient-to-r from-red-50 to-purple-50 p-10 borderRadius border border-gray-100 shadow-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-3">¿Listo para transformar tu negocio?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Descubrí cómo un sistema hecho a medida puede optimizar tus procesos, reducir costos y aumentar tus ganancias.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              className="underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Conocer más
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}