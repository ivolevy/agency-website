import '../assets/styles/services.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Mes 1', value: 30 },
  { name: 'Mes 2', value: 50 },
  { name: 'Mes 3', value: 40 },
  { name: 'Mes 4', value: 60 },
];

const ServiceCard = ({ title, description, image }) => (
  <div className="bg-white borderRadius p-6 flex flex-col items-center text-center">
    <img src={image} alt={title} className="w-16 h-16 mb-4" />
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
  </div>
);

export default function Services() {
  return (
    <div className="p-8 rounded-lg" id="services">
      <div className="bg-white p-6 borderRadius shadow-md">
        <h2 className="text-xl font-bold">Kit Digital</h2>
        <p className="text-gray-500 text-sm">Impulsa tu negocio con soluciones digitales avanzadas.</p>
        <LineChart width={500} height={200} data={data} className="mt-4">
          <Line type="monotone" dataKey="value" stroke="#007bff" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <ServiceCard
          title="Branding"
          description="Dale identidad a tu negocio con una imagen única."
          image="/branding-icon.png"
        />
        <ServiceCard
          title="Meta Ads"
          description="Atrae clientes con campañas publicitarias efectivas."
          image="/meta-ads-icon.png"
        />
        <ServiceCard
          title="Sitios Custom"
          description="Crea una web a medida para destacar en el mercado."
          image="/custom-sites-icon.png"
        />
      </div>
    </div>
  );
}
