import React from "react";

type Props = {
  universalPrompt: string;
  setUniversalPrompt: (prompt: string) => void;
};

const Settings: React.FC<Props> = ({ universalPrompt, setUniversalPrompt }) => {
  return (
    <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 p-8 mb-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Neural Protocol Configuration</h2>
          <p className="text-slate-300 text-sm font-light">Customize AI response patterns</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-200 mb-3">
            Universal Neural Protocol
          </label>
          <textarea
            className="w-full p-5 border border-slate-600/50 rounded-2xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 bg-slate-800/50 focus:bg-slate-800/70 transition-all duration-300 resize-none text-white placeholder-slate-400 backdrop-blur-sm"
            rows={4}
            placeholder="Enter neural protocol parameters. Example: 'You are an advanced AI system that responds with technical precision and futuristic terminology.'"
            value={universalPrompt}
            onChange={(e) => setUniversalPrompt(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-sm text-slate-300">
            <p className="font-medium text-cyan-300">Protocol Function</p>
            <p className="text-slate-400">This neural protocol will be automatically integrated into all communication sequences.</p>
          </div>
        </div>
        
        {universalPrompt && (
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-sm font-medium text-green-300">Protocol Active</span>
            </div>
            <button
              onClick={() => setUniversalPrompt("")}
              className="text-sm text-green-400 hover:text-green-300 font-medium transition-colors duration-200"
            >
              Deactivate Protocol
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings; 