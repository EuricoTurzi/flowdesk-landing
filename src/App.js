import React, { useState } from 'react';
import { Calendar, Users, MessageCircle, Camera, BarChart3, Sparkles, Clock, DollarSign, CheckCircle, Star, Menu, X, Zap, Shield, Smartphone } from 'lucide-react';

const FlowDeskLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState('tattoo');

  const scenarios = {
    tattoo: {
      title: "Estúdio de Tatuagem",
      professional: "Galvão, tatuador há 4 anos",
      before: [
        "Recebe 15+ mensagens no WhatsApp durante sessões",
        "Cliente chega no dia errado após viajar 50km",
        "Dedica 3h toda sexta organizando próxima semana"
      ],
      after: [
        "Clientes agendam automaticamente via link personalizado",
        "Sistema envia confirmações e lembretes automáticos",
        "Agenda auto-organizada, sem trabalho administrativo"
      ],
      results: "15h/semana recuperadas + R$ 2.400/mês adicional"
    },
    makeup: {
      title: "Maquiadora", 
      professional: "Bariangela, especialista em maquiagens",
      before: [
        "Noivas em pânico sobre horários na véspera",
        "Confusões de horário causam atrasos críticos",
        "Esquece de enviar fotos, prejudica indicações"
      ],
      after: [
        "Confirmações automáticas tranquilizam clientes",
        "Lembretes eliminam confusões de horário",
        "Follow-up automático mantém relacionamento"
      ],
      results: "90% menos cancelamentos + 300% mais indicações"
    },
    nails: {
      title: "Nail Designer",
      professional: "Helo, 80-120 clientes/mês",
      before: [
        "50+ mensagens diárias para organizar agenda",
        "Perde histórico de cores e preferências",
        "1h/dia procurando fotos de trabalhos anteriores"
      ],
      after: [
        "Link nos stories para agendamento automático",
        "Histórico completo acessível instantaneamente",
        "Galeria organizada automaticamente por cliente"
      ],
      results: "+40% clientes atendidos, 75% menos tempo organizando"
    }
  };

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Agendamento Online",
      description: "Clientes agendam 24/7 através de link personalizado. Sua agenda sempre organizada."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Histórico de Clientes",
      description: "Preferências, fotos e histórico completo. Atendimento personalizado que fideliza."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Lembretes Automáticos",
      description: "Confirmações e lembretes enviados automaticamente via WhatsApp."
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Galeria Organizada",
      description: "Organize seus trabalhos por cliente e data. Portfolio sempre atualizado."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Relatórios Simples",
      description: "Acompanhe sua receita, clientes atendidos e crescimento mensal."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Sua Marca",
      description: "Sistema com seu logo, cores e nome. Impressione seus clientes."
    }
  ];

  const testimonials = [
    {
      name: "Galvão",
      role: "Tatuador",
      location: "São Paulo",
      text: "Cara, isso ia resolver minha vida! Vivo no WhatsApp organizando horário. Se tivesse um negócio desse, ia sobrar muito mais tempo pra tatuar.",
      rating: 5,
      metric: "Conceito"
    },
    {
      name: "Bariangela", 
      role: "Maquiadora",
      location: "Paraná",
      text: "Nossa, preciso disso urgente! Sempre rola confusão de horário com as noivas. Um sistema assim ia dar muito mais credibilidade pro meu trabalho.",
      rating: 5,
      metric: "Validação"
    },
    {
      name: "Helo",
      role: "Nail Designer",
      location: "São Paulo", 
      text: "Achei a ideia incrível! Meus clientes sempre perguntam que cor usaram da última vez. Ter isso organizado seria perfeito.",
      rating: 5,
      metric: "Aprovado"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">FlowDesk</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Funcionalidades</a>
            <a href="#scenarios" className="text-gray-600 hover:text-gray-900 transition-colors">Casos de Uso</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Depoimentos</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 py-2">Funcionalidades</a>
              <a href="#scenarios" className="block text-gray-600 py-2">Casos de Uso</a>
              <a href="#testimonials" className="block text-gray-600 py-2">Depoimentos</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Profissionalize seu<br />
              <span className="text-gray-600">negócio de beleza</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Sistema completo de gestão para nail designers, lash designers, cabeleireiros, 
              barbeiros e profissionais autônomos de beleza.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Organização total</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Menos desencontros</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Smartphone className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-600">Mais profissional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm">Conceito testado com profissionais de beleza</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <span className="text-lg font-medium text-gray-400">Nail Designers</span>
            <span className="text-lg font-medium text-gray-400">Lash Artists</span>
            <span className="text-lg font-medium text-gray-400">Cabeleireiros</span>
            <span className="text-lg font-medium text-gray-400">Barbeiros</span>
            <span className="text-lg font-medium text-gray-400">Esteticistas</span>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transforme caos em organização
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Pare de perder tempo e dinheiro com processos desorganizados
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Problems */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Situação atual</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <Clock className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Tempo perdido</h4>
                      <p className="text-gray-600">2-3 horas diárias organizando agenda via WhatsApp e papel</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <DollarSign className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Clientes perdidos</h4>
                      <p className="text-gray-600">Desencontros e esquecimentos causam cancelamentos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <Users className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Atendimento genérico</h4>
                      <p className="text-gray-600">Sem histórico estruturado, dificulta personalização</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Solution */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Com FlowDesk</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Organização automática</h4>
                      <p className="text-gray-600">Clientes agendam sozinhos, confirmações automáticas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <BarChart3 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Menos no-shows</h4>
                      <p className="text-gray-600">Lembretes automáticos garantem presença dos clientes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <Sparkles className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Atendimento VIP</h4>
                      <p className="text-gray-600">Histórico detalhado permite personalização total</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como funcionaria
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Funcionalidades pensadas para profissionais de beleza
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-700">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exemplos práticos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Como seria o antes e depois em diferentes áreas
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex bg-white rounded-xl p-1 border border-gray-200">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => setSelectedScenario(key)}
                  className={`px-6 py-3 rounded-lg transition-all font-medium ${
                    selectedScenario === key 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
          </div>

          {/* Scenario Content */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{scenarios[selectedScenario].title}</h3>
              <p className="text-gray-600">{scenarios[selectedScenario].professional}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Before */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Antes</h4>
                <div className="space-y-4">
                  {scenarios[selectedScenario].before.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-red-300">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Depois</h4>
                <div className="space-y-4">
                  {scenarios[selectedScenario].after.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-green-300">
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-12 bg-blue-50 p-6 rounded-xl text-center border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Resultado esperado</h4>
              <p className="text-gray-700 text-lg">{scenarios[selectedScenario].results}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Feedback de profissionais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Opiniões de quem testou o conceito
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold text-gray-700">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role} • {testimonial.location}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                      {testimonial.metric}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas sobre o conceito</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dúvidas frequentes sobre como funcionaria
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Como meus clientes fariam agendamentos?",
                answer: "Através de um link personalizado (ex: ana.flowdesk.com) que você compartilharia nas redes sociais. Interface simples onde escolhem data, hora e serviço."
              },
              {
                question: "Os lembretes seriam realmente automáticos?",
                answer: "Sim, integrado com WhatsApp Business. O sistema enviaria confirmações na hora do agendamento e lembretes 24h e 2h antes do horário."
              },
              {
                question: "Funcionaria para meu tipo de trabalho?",
                answer: "O conceito serve para qualquer profissional de beleza: nail, lash, cabelo, barba, estética. Sistema se adaptaria ao seu tipo de serviço."
              },
              {
                question: "Como ficaria o histórico de clientes?",
                answer: "Cada cliente teria um perfil com fotos dos trabalhos, preferências anotadas, histórico de visitas e observações importantes."
              },
              {
                question: "Seria difícil de usar?",
                answer: "A ideia é ser mais simples que gerenciar WhatsApp. Interface pensada para ser intuitiva, sem complicações técnicas."
              },
              {
                question: "Precisa de internet o tempo todo?",
                answer: "Sim, seria um sistema online. Mas funcionaria em qualquer dispositivo: celular, tablet ou computador."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              O que você acha deste conceito?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Sua opinião é fundamental para saber se vale a pena desenvolver esta solução
            </p>
            
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Gostaria do seu feedback:</h3>
              <div className="space-y-4 text-left text-gray-200">
                <p>• Isso resolveria seus problemas do dia a dia?</p>
                <p>• Usaria um sistema assim no seu negócio?</p>
                <p>• Que funcionalidades são mais importantes?</p>
                <p>• O que mudaria ou adicionaria?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">FlowDesk</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
              Conceito de sistema de gestão para profissionais em ascenção. 
              Ainda em fase de validação com o mercado.
            </p>
            <div className="text-center text-gray-500 text-sm">
              <p>&copy; 2025 FlowDesk - Conceito em desenvolvimento</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlowDeskLanding;