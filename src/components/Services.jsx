import { motion } from "framer-motion";
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, Tooltip } from 'recharts';
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
const ServiceCard = ({ title, description, icon, metrics, color }) => (
  <motion.article
    className="relative bg-white borderRadius p-6 shadow-lg hover:shadow-xl transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.5,
      ease: "easeOut"
    }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ 
      scale: 1.01,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    }}
    aria-labelledby={`service-${title}`}
    role="article"
  >
    <div className="flex items-start mb-3">
      <motion.div 
        className={`p-3 rounded-lg ${color} text-white mr-4`}
        whileHover={{ 
          scale: 1.05,
          transition: {
            duration: 0.15,
            ease: "easeOut"
          }
        }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 id={`service-${title}`} className="font-semibold text-xl text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    {metrics && (
      <div className="mt-3 pt-3 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="flex flex-col"
            >
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
            className="inline-block px-3 py-1 bg-pink-50 text-pink-400 rounded-lg text-xs font-medium mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            SOLUCIONES DIGITALES 100% PERSONALIZADAS
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <u>Centraliza</u> tu negocio con sistemas de gestión personalizados
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Optimiza y automatiza tus procesos clave con soluciones digitales integrales que mejoran la productividad y reducen costos.
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
              <div className="bg-green-100 text-green-800 text-xs px-3 py-1.5 rounded-lg flex items-center mr-3">
                <span className="w-2 h-2 bg-green-500 rounded-lg mr-1.5"></span>
                <span>Con sistema personalizado</span>
              </div>
              <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-lg mr-1.5"></span>
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
            icon={<Database className="w-6 h-6" />}
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
            title="Automatización inteligente"
            description="Reducimos costos operativos al evitar el uso de herramientas dispersas, optimizando tareas repetitivas con soluciones personalizadas."
            icon={<Zap className="w-6 h-6" />}
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
            description="Dashboards personalizables con KPIs clave visibles en tiempo real, mejorando la precisión en proyecciones financieras y planificación."
            icon={<BarChart2 className="w-6 h-6" />}
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
            description="Reduce tiempos de respuesta y mejora la experiencia del cliente, aumentando la retención y satisfacción."
            icon={<Clock className="w-6 h-6" />}
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
          className="bg-white borderRadius p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start mb-6">
            <div className="p-3 rounded-lg bg-blue-500 text-white mr-4">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-xl text-gray-800 mb-2">¿Por qué elegir una aplicación web?</h4>
              <p className="text-gray-600">Descubre las ventajas de nuestras soluciones web sobre las aplicaciones de escritorio tradicionales.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                <TrendingUp size={20} />
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">Más económico</h5>
                <p className="text-gray-600 text-sm">Sin instalación ni configuración en cada dispositivo. Reduce costos de implementación y mantenimiento.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                <Users size={20} />
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">Acceso universal</h5>
                <p className="text-gray-600 text-sm">Disponible desde cualquier dispositivo con internet: PC, notebook, tablet o celular.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                <Shield size={20} />
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">Mantenimiento sencillo</h5>
                <p className="text-gray-600 text-sm">Actualizaciones centralizadas y remotas. Sin necesidad de configurar cada dispositivo.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                <DollarSign size={20} />
              </div>
              <div>
                <h5 className="font-medium text-gray-800 mb-1">Escalabilidad flexible</h5>
                <p className="text-gray-600 text-sm">Adapta el sistema a tus necesidades cambiantes sin reinstalaciones ni licencias adicionales.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA mejorado
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
        */}
      </div>
    </section>
  );
}