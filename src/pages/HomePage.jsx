import { Link } from "react-router-dom";
import {
  UsersIcon,
  PlusIcon,
  SignalIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { Card } from "../components/ui";

const features = [
  {
    icon: UsersIcon,
    title: "Pessoas",
    description: "Visualize e gerencie cadastros",
    link: "/pessoas",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: PlusIcon,
    title: "Adicionar",
    description: "Cadastre com validação",
    link: "/pessoas/novo",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: SignalIcon,
    title: "Status API",
    description: "Monitore conectividade",
    link: "/health",
    color: "text-red-600 dark:text-red-400",
  },
];

const benefits = [
  {
    title: "Desacoplado",
    desc: "Frontend e backend independentes",
  },
  { title: "Multi-plataforma", desc: "Web, mobile e desktop" },
  { title: "Escalável", desc: "Escale cada camada separadamente" },
  { title: "Flexível", desc: "Diferentes tecnologias por camada" },
  { title: "Testável", desc: "Testes isolados por camada" },
  { title: "Seguro", desc: "Padrões HTTP e boas práticas" },
];

const HomePage = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <div className="text-center py-8 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        CRUD de Pessoas React
      </h1>
    </div>

    {/* Features */}
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Funcionalidades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <Card key={i} className="h-full">
            <div className={`mb-4 ${f.color}`}>
              <f.icon className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {f.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow mb-6">
              {f.description}
            </p>
            <Link to={f.link} className="btn-secondary text-sm mt-auto">
              Acessar <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Card>
        ))}
      </div>
    </div>

    {/* Benefits */}
    <div className="py-8 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <Card>
          <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-6">Vantagens REST</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div>
                  <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {b.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default HomePage;
