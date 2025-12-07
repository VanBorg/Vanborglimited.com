import { memo } from 'react';
import { CheckCircle, TrendingUp } from './icons';
import type { FormData } from '../../types/roiCalculator';
import { serviceConfigs } from '../../config/services';

interface ServiceSelectionProps {
  formData: FormData;
  setFormData: (updater: (prev: FormData) => FormData) => void;
  onNext: () => void;
  onBack: () => void;
}

const ServiceSelection = memo(function ServiceSelection({ formData, setFormData, onNext, onBack }: ServiceSelectionProps) {
  const handleServiceToggle = (serviceKey: keyof FormData['services']) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceKey]: !prev.services[serviceKey]
      }
    }));
  };

  const hasSelectedServices = Object.values(formData.services).some(value => value === true);

  // Map calculator keys to service configs
  const servicesToShow = serviceConfigs.map(service => ({
    key: service.calculatorKey as keyof FormData['services'],
    name: service.title,
    setup: `£${service.setupCost.toLocaleString()}`,
    monthly: service.monthlyCost > 0 ? `£${service.monthlyCost.toLocaleString()}/mo` : 'Performance fee',
    time: service.timeline,
    service
  }));

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-8 shadow-lg border border-gray-200/50">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 text-center">What Would Help Your Business The Most?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        {/* Individual Services */}
        {servicesToShow.map(service => (
          <div 
            key={service.key}
            onClick={() => handleServiceToggle(service.key)}
            className={`p-3 rounded-xl border cursor-pointer transition-all h-full ${
              formData.services[service.key] 
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 border-sky-400 text-white shadow-lg' 
                : 'bg-gray-50 border-gray-200 hover:border-sky-300'
            }`}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-start justify-between mb-2 gap-3">
                <div>
                  <h3 className={`font-bold text-base md:text-lg ${formData.services[service.key] ? 'text-white' : 'text-gray-900'}`}>{service.name}</h3>
                  <p className={`text-xs md:text-sm ${formData.services[service.key] ? 'text-cyan-50' : 'text-gray-600'}`}>Results in ~{service.time}</p>
                </div>
                {formData.services[service.key] && (
                  <CheckCircle className="text-white flex-shrink-0" size={16} />
                )}
              </div>
              <div className="flex gap-4 text-xs md:text-sm mt-auto">
                <span className={formData.services[service.key] ? 'text-white' : 'text-sky-600'}>{service.setup}</span>
                <span className={formData.services[service.key] ? 'text-white' : 'text-sky-600'}>{service.monthly}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-4">
        <button 
          onClick={onBack}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-5 rounded-xl text-sm md:text-base transition-all"
        >
          Back
        </button>
        <button 
          onClick={onNext}
          disabled={!hasSelectedServices}
          className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 px-5 rounded-xl text-sm md:text-base flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          Show Me the Numbers <TrendingUp size={20} />
        </button>
      </div>
    </div>
  );
});

export default ServiceSelection;
