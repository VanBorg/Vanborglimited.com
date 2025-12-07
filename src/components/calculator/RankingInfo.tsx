import { memo } from 'react';
import { ChevronRight, CheckCircle } from './icons';
import type { FormData } from '../../types/roiCalculator';

interface RankingInfoProps {
  formData: FormData;
  setFormData: (updater: (prev: FormData) => FormData) => void;
  onNext: () => void;
  onBack: () => void;
}

const RankingInfo = memo(function RankingInfo({ formData, setFormData, onNext, onBack }: RankingInfoProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-8 shadow-lg border border-gray-200/50">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 text-center">
        Where Do You Show Up on Google?
      </h2>
      
      {/* Google Search Ranking */}
      <div className="mb-6">
        <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-700 text-center">
          Google Search Results
        </h3>

        {/* 2x2 grid on desktop for main positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          {[
            { value: 'top3', label: 'Top 5', subtitle: '- This is what we gaurentee' },
            { value: 'page1-lower', label: 'Page 1 (spots 4-10)' },
            { value: 'page2', label: 'Page 2 or worse' },
            { value: 'page3', label: 'No idea / Not ranking at all' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() =>
                setFormData((prev) => ({ ...prev, currentRanking: option.value }))
              }
              className={`w-full p-3 rounded-xl border transition-all text-left ${
                formData.currentRanking === option.value
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 border-sky-400 text-white shadow-lg'
                  : 'bg-gray-50 border-gray-200 hover:border-sky-300 text-gray-900'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span className="text-sm md:text-base font-medium">{option.label}</span>
                  {option.subtitle && (
                    <span
                      className={`ml-1 text-[11px] md:text-xs whitespace-nowrap font-semibold ${
                        formData.currentRanking === option.value
                          ? 'text-cyan-100'
                          : 'text-emerald-600'
                      }`}
                    >
                      {option.subtitle}
                    </span>
                  )}
                </div>
                {formData.currentRanking === option.value && (
                  <CheckCircle className="text-white" size={16} />
                )}
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Google Maps Ranking */}
      <div>
        <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-700 text-center">
          Google Maps (Local Pack)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'top3-maps', label: 'Top 5 on Google Maps' },
            { value: 'visible-maps', label: 'Spots 4–10' },
            { value: 'visible', label: 'Spot 11 or higher' },
            { value: 'not-visible', label: 'Not showing up at all' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() =>
                setFormData((prev) => ({ ...prev, mapsRanking: option.value }))
              }
              className={`w-full p-3 rounded-xl border transition-all text-left ${
                formData.mapsRanking === option.value
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 border-sky-400 text-white shadow-lg'
                  : 'bg-gray-50 border-gray-200 hover:border-sky-300 text-gray-900'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm md:text-base font-medium">
                  {option.label}
                </span>
                {formData.mapsRanking === option.value && (
                  <CheckCircle className="text-white" size={16} />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button 
          onClick={onBack}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-5 rounded-xl text-sm md:text-base transition-all"
        >
          Back
        </button>
        <button 
          onClick={onNext}
          className="flex-1 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-semibold py-3 px-5 rounded-xl text-sm md:text-base flex items-center justify-center gap-2 transition-all shadow-md"
        >
          Next Step <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
});

export default RankingInfo;
