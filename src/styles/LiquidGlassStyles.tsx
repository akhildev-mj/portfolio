import React, { memo } from 'react';

const LiquidGlassStylesComponent: React.FC = () => (
	<style>{`
    @keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: 0% center; } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
    @keyframes drift { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(3vw, -3vw) scale(1.05); } }
    @keyframes blobFloat { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }

    pre.shiki { background: transparent !important; margin: 0; overflow-x: hidden; max-width: 100%; }
    
    .liquid-border { position: relative; background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.02)); z-index: 1; backdrop-filter: blur(10px); }
    .liquid-border::before { content: ""; position: absolute; inset: -1.5px; padding: 1.75px; border-radius: inherit; background: linear-gradient(115deg, #737373 0%, #737373 20%, #ffdccd 28%, #ffffff 30%, #abf7ff 32%, #737373 40%, #737373 70%, #ffdccd 78%, #ffffff 80%, #abf7ff 82%, #737373 90%, #737373 100%); background-size: 200% auto; animation: shimmer 3s linear infinite; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: -1; }

    .liquid-border-light { position: relative; background: rgba(255, 255, 255, 0.7); z-index: 1; backdrop-filter: blur(10px); }
    .liquid-border-light::before { content: ""; position: absolute; inset: -1.5px; padding: 1.75px; border-radius: inherit; background: linear-gradient(115deg, #f5f5f5 0%, #eaeaea 15%, #ffd9c7 25%, #ffffff 30%, #bff6ff 35%, #eaeaea 45%, #f5f5f5 60%, #ffd9c7 75%, #ffffff 80%, #bff6ff 85%, #eaeaea 92%, #f5f5f5 100%); background-size: 200% auto; animation: shimmer 3s linear infinite; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: -1; }

    .hover-border-liquid { position: relative; z-index: 1; transition: background-color 0.3s; }
    .hover-border-liquid::before { content: ""; position: absolute; inset: -1.5px; padding: 1.75px; border-radius: inherit; background: linear-gradient(115deg, #f5f5f5 0%, #eaeaea 15%, #ffd9c7 25%, #ffffff 30%, #bff6ff 35%, #eaeaea 45%, #f5f5f5 60%, #ffd9c7 75%, #ffffff 80%, #bff6ff 85%, #eaeaea 92%, #f5f5f5 100%); background-size: 200% auto; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: -1; opacity: 0; transition: opacity 0.4s ease-in-out; }
    .group:hover .hover-border-liquid::before, .hover-border-liquid:hover::before { opacity: 1; animation: shimmer 3s linear infinite; }
    
    .glass-panel { background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.4); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255,255,255,0.5); }
    .glass-panel-hover:hover { background: rgba(255, 255, 255, 0.25); border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255,255,255,0.8); }
    .glass-inset { background: rgba(255, 255, 255, 0.1); box-shadow: inset 0 2px 10px rgba(0,0,0,0.02); border: 1px solid rgba(255,255,255,0.3); }
    
    .grid-pattern { background-image: linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px); background-size: 40px 40px; -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%); mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%); }
    .text-glass-gradient { background: linear-gradient(180deg, #111827 0%, #4b5563 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

    ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
  `}</style>
);

export const LiquidGlassStyles = memo(LiquidGlassStylesComponent);
