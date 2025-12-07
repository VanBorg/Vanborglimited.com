import { memo } from 'react';
import { ChevronRight } from './icons';
import type { FormData } from '../../types/roiCalculator';

interface BusinessInfoProps {
  formData: FormData;
  setFormData: (updater: (prev: FormData) => FormData) => void;
  industryPresets: Record<string, { avgValue: number; searchVolume: number }>;
  onNext: () => void;
}

const BusinessInfo = memo(function BusinessInfo({
  formData,
  setFormData,
  industryPresets,
  onNext,
}: BusinessInfoProps) {
  const isFormValid =
    formData.avgClientValue >= 1000 &&
    formData.currentClients > 0 &&
    formData.currentLeads > 0;

  const closingRate =
    formData.currentLeads > 0 && formData.currentClients > 0
      ? Math.round((formData.currentClients / formData.currentLeads) * 100)
      : 0;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-8 shadow-lg border border-gray-200/50">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 text-center">
        Let's See What's Possible
      </h2>

      <div className="space-y-5">
        {/* 4 main inputs in a 2x2 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <div>
            <label className="block text-base md:text-lg font-medium mb-2 text-gray-900">
              Type of Business?
            </label>
            <select
              value={formData.industry}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  industry: e.target.value,
                }))
              }
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:border-sky-500 focus:outline-none text-gray-900"
            >
              {Object.keys(industryPresets).map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-base md:text-lg font-medium mb-2 text-gray-900">
              Average value of each client?
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-lg text-gray-400">£</span>
              <input
                type="number"
                value={formData.avgClientValue || ''}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    avgClientValue:
                      e.target.value === '' ? 0 : parseInt(e.target.value) || 0,
                  }))
                }
                placeholder="1,000"
                min={1000}
                className="w-full p-3 pl-9 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:border-sky-500 focus:outline-none text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-base md:text-lg font-medium mb-2 text-gray-900">
              Amount of paying clients each month?
            </label>
            <input
              type="number"
              value={formData.currentClients || ''}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  currentClients:
                    e.target.value === '' ? 0 : parseInt(e.target.value) || 0,
                }))
              }
              min={0}
              placeholder="5"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:border-sky-500 focus:outline-none text-gray-900"
            />
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Actual customers who paid you, not just inquiries
            </p>
          </div>

          <div>
            <label className="block text-base md:text-lg font-medium mb-2 text-gray-900">
              Number of leads (inquiries) each month?
            </label>
            <input
              type="number"
              value={formData.currentLeads || ''}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  currentLeads:
                    e.target.value === '' ? 0 : parseInt(e.target.value) || 0,
                }))
              }
              min={0}
              placeholder="20"
              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm md:text-base focus:border-sky-500 focus:outline-none text-gray-900"
            />
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Total number of people who reach out (calls, forms, emails, etc.)
            </p>
          </div>
        </div>

        {/* Auto-calculated closing rate display */}
        {formData.currentLeads > 0 && formData.currentClients > 0 && (
          <div className="mx-auto max-w-md bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="text-[11px] sm:text-xs uppercase tracking-wide text-sky-700 font-semibold mb-1">
              Current Closing Rate
            </div>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 leading-none">
                ~{closingRate}%
              </span>
            </div>
            <div className="text-[11px] sm:text-xs text-gray-600">
              Based on {formData.currentClients} clients from {formData.currentLeads} leads
            </div>
          </div>
        )}
      </div>

      <button
        onClick={onNext}
        disabled={!isFormValid}
        className="w-full mt-6 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 px-5 rounded-xl text-sm md:text-base flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
      >
        Next Step <ChevronRight size={20} />
      </button>
    </div>
  );
});

export default BusinessInfo;
