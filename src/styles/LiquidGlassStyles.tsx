import { memo } from 'react';

const LiquidGlassStylesComponent: React.FC = () => (
	<style>{`
		@keyframes shimmer { 0% { background-position: 200% center; } 100% { background-position: 0% center; } }
		@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
		@keyframes drift { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(3vw, -3vw) scale(1.05); } }
		@keyframes blobFloat { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
		@keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

		.animate-scroll-left { animation: scroll-left 40s linear infinite; }

		/* Base Liquid Borders */
		.liquid-border, .liquid-border-light { position: relative; z-index: 1; backdrop-filter: blur(10px); }
		.liquid-border { background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02)); }
		:is(.dark) .liquid-border { background: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1)); }
		
		.liquid-border-light { background: rgba(255,255,255,0.2); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 8px 24px rgba(17,24,39,0.08), inset 0 1px 2px #fff; }
		:is(.dark) .liquid-border-light { background: rgba(255,255,255,0.03); box-shadow: 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1); }

		/* Shimmer Effects */
		.liquid-border::before, .liquid-border-light::before, .hover-border-liquid::before {
			content: ""; position: absolute; inset: -1.5px; padding: 1.75px; border-radius: inherit; background-size: 200% auto; animation: shimmer 3s linear infinite; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; z-index: -1;
		}
		.liquid-border::before { background-image: linear-gradient(115deg, #737373 0%, #737373 20%, #ffdccd 28%, #fff 30%, #abf7ff 32%, #737373 40%, #737373 70%, #ffdccd 78%, #fff 80%, #abf7ff 82%, #737373 90%, #737373 100%); }
		.liquid-border-light::before, .hover-border-liquid::before { background-image: linear-gradient(115deg, #f5f5f5 0%, #eaeaea 15%, #ffd9c7 25%, #fff 30%, #bff6ff 35%, #eaeaea 45%, #f5f5f5 60%, #ffd9c7 75%, #fff 80%, #bff6ff 85%, #eaeaea 92%, #f5f5f5 100%); }
		:is(.dark) .liquid-border-light::before, :is(.dark) .hover-border-liquid::before { background-image: linear-gradient(115deg, #1f2937 0%, #374151 15%, #9d174d 25%, #fff 30%, #1e3a8a 35%, #374151 45%, #1f2937 60%, #9d174d 75%, #fff 80%, #1e3a8a 85%, #374151 92%, #1f2937 100%); }

		.hover-border-liquid { position: relative; z-index: 1; transition: background-color 0.3s; }
		.hover-border-liquid::before { opacity: 0; transition: opacity 0.4s ease-in-out; }
		.group:hover .hover-border-liquid::before, .hover-border-liquid:hover::before { opacity: 1; }

		/* Glass Panels */
		.glass-panel { background: rgba(255,255,255,0.15); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.4); box-shadow: 0 8px 32px 0 rgba(0,0,0,0.05), inset 0 1px 2px rgba(255,255,255,0.5); }
		:is(.dark) .glass-panel { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 8px 32px 0 rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05); }
		
		.glass-panel-hover:hover { background: rgba(255,255,255,0.25); border: 1px solid rgba(255,255,255,0.6); box-shadow: 0 12px 40px 0 rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.8); }
		:is(.dark) .glass-panel-hover:hover { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 12px 40px 0 rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1); }
		
		.glass-inset { background: rgba(255,255,255,0.1); box-shadow: inset 0 2px 10px rgba(0,0,0,0.02); border: 1px solid rgba(255,255,255,0.3); }
		:is(.dark) .glass-inset { background: rgba(0,0,0,0.4); box-shadow: inset 0 2px 10px rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.05); }

		/* Background Grid */
		.grid-pattern {
			background-image: linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
			background-size: 40px 40px;
			-webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
			mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
		}
		:is(.dark) .grid-pattern {
			background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
		}

		/* Text Gradients */
		.text-glass-gradient { background: linear-gradient(180deg, #111827 0%, #4b5563 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
		:is(.dark) .text-glass-gradient { background: linear-gradient(180deg, #f9fafb 0%, #9ca3af 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

		/* Core Liquid Glass Elements */
		.liquid-glass, .liquid-glass-strong, .liquid-glass-strong-nav { position: relative; overflow: hidden; border: none; }
		.liquid-glass { background: rgba(255,255,255,0.45); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 8px 24px rgba(17,24,39,0.06), inset 0 1px 1px rgba(255,255,255,0.9); }
		:is(.dark) .liquid-glass { background: rgba(255,255,255,0.05); box-shadow: 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1); }
		
		.liquid-glass-strong { background: rgba(255,255,255,0.65); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); box-shadow: 0 12px 32px rgba(17,24,39,0.08), inset 0 1px 2px #fff; }
		:is(.dark) .liquid-glass-strong { background: rgba(255,255,255,0.08); box-shadow: 0 12px 32px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1); }
		
		.liquid-glass-strong-nav { background: rgba(255,255,255,0.15); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); box-shadow: 0 12px 32px rgba(17,24,39,0.08), inset 0 1px 2px #fff; }
		:is(.dark) .liquid-glass-strong-nav { background: rgba(0,0,0,0.4); box-shadow: 0 12px 32px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.05); }

		.liquid-glass::before, .liquid-glass-strong::before, .liquid-glass-strong-nav::before { content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1.5px; -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; }
		.liquid-glass::before { background: linear-gradient(135deg, #fff 0%, rgba(0,0,0,0.03) 30%, rgba(0,0,0,0.01) 70%, rgba(0,0,0,0.08) 100%); }
		:is(.dark) .liquid-glass::before { background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 30%, transparent 70%, rgba(255,255,255,0.05) 100%); }
		
		.liquid-glass-strong::before, .liquid-glass-strong-nav::before { background: linear-gradient(135deg, #fff 0%, rgba(0,0,0,0.04) 30%, rgba(0,0,0,0.02) 70%, rgba(0,0,0,0.12) 100%); }
		:is(.dark) .liquid-glass-strong::before, :is(.dark) .liquid-glass-strong-nav::before { background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.03) 30%, transparent 70%, rgba(255,255,255,0.08) 100%); }

		::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
		:is(.dark) ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); } :is(.dark) ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.3); }
	`}</style>
);

export const LiquidGlassStyles = memo(LiquidGlassStylesComponent);
