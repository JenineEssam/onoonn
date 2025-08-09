import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, TrendingDown, TrendingUp, Droplets, Zap, Sparkles, BarChart3, LineChart } from 'lucide-react';

export default function DrugMetabolismLoader() {
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 3000),   // Introduction
      setTimeout(() => setStage(2), 6000),   // Split screen reveal  
      setTimeout(() => setStage(3), 8000),   // Pills start falling
      setTimeout(() => setStage(4), 11000),  // Dissolution begins
      setTimeout(() => setStage(5), 16000),  // Results appear
    ];
    
    return () => timers.forEach(clearTimeout);
  }, []);

  // Professional pill component with stunning visuals
  const ProfessionalPill = ({ 
    className = "", 
    style = {}, 
    falling = false, 
    dissolving = false, 
    gender = "neutral",
    delay = 0,
    heroMode = false
  }) => {
    const colors = {
      female: {
        primary: '#fef7f0',
        secondary: '#fecaca',
        accent: '#fed7d7',
        shadow: 'rgba(251, 113, 133, 0.15)',
        glow: 'rgba(251, 113, 133, 0.4)'
      },
      male: {
        primary: '#eff6ff',
        secondary: '#bfdbfe',
        accent: '#dbeafe', 
        shadow: 'rgba(59, 130, 246, 0.15)',
        glow: 'rgba(59, 130, 246, 0.4)'
      },
      neutral: {
        primary: '#ffffff',
        secondary: '#f8f5f0',
        accent: '#f5efe6',
        shadow: 'rgba(180, 83, 9, 0.15)',
        glow: 'rgba(217, 119, 6, 0.35)'
      }
    };

    return (
      <motion.div 
        className={`relative ${className}`}
        style={style}
        initial={{ y: falling ? -200 : 0, opacity: falling ? 0 : 1, scale: falling ? 0.6 : 1 }}
        animate={falling ? {
          y: [0, 300],
          rotate: [0, 180, 360],
          scale: [0.6, 1, 1],
          opacity: [0, 1, 1]
        } : heroMode ? {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: [0, 15, -15, 0],
          rotateX: [0, 5, -5, 0]
        } : {
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition={falling ? { 
          duration: 2.5, 
          ease: [0.34, 1.56, 0.64, 1],
          delay: delay
        } : heroMode ? {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        } : { duration: 1.5, delay: delay, ease: "easeOut" }}
      >
        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background: `radial-gradient(circle, ${colors[gender].glow} 0%, transparent 70%)`,
            width: heroMode ? '120px' : '80px',
            height: heroMode ? '120px' : '80px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={heroMode ? {
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1]
          } : {
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: heroMode ? 2.5 : 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />

        <motion.div 
          className={`${heroMode ? 'w-20 h-10' : 'w-16 h-8'} rounded-full relative overflow-hidden sm:${heroMode ? 'w-16 h-8' : 'w-12 h-6'}`}
          style={{
            background: `linear-gradient(135deg, ${colors[gender].primary} 0%, ${colors[gender].secondary} 50%, ${colors[gender].accent} 100%)`,
            boxShadow: heroMode 
              ? `0 8px 32px ${colors[gender].shadow}, 0 2px 8px ${colors[gender].shadow}, inset 0 3px 6px rgba(255,255,255,0.9)`
              : `0 4px 20px ${colors[gender].shadow}, inset 0 2px 4px rgba(255,255,255,0.9)`
          }}
          animate={dissolving ? {
            opacity: [1, 0.9, 0.7, 0.4, 0.1, 0],
            scale: [1, 1.2, 1.5, 2.0, 2.8, 3.5],
            filter: [
              'blur(0px) brightness(1)',
              'blur(1px) brightness(1.1)', 
              'blur(2px) brightness(1.2)',
              'blur(4px) brightness(1.3)',
              'blur(8px) brightness(1.2)',
              'blur(12px) brightness(0.8)'
            ]
          } : heroMode ? {
            boxShadow: [
              `0 8px 32px ${colors[gender].shadow}, 0 2px 8px ${colors[gender].shadow}, inset 0 3px 6px rgba(255,255,255,0.9)`,
              `0 12px 48px ${colors[gender].glow}, 0 4px 16px ${colors[gender].shadow}, inset 0 3px 6px rgba(255,255,255,0.9)`,
              `0 8px 32px ${colors[gender].shadow}, 0 2px 8px ${colors[gender].shadow}, inset 0 3px 6px rgba(255,255,255,0.9)`
            ]
          } : {}}
          transition={dissolving ? { 
            duration: gender === 'female' ? 5 : 2, 
            ease: "easeOut",
            delay: 1
          } : heroMode ? {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          } : {}}
        >
          {/* Pill coating with enhanced gradient */}
          <motion.div 
            className="absolute inset-0 rounded-full"
            style={{ 
              background: heroMode 
                ? `linear-gradient(45deg, ${colors[gender].primary} 20%, ${colors[gender].accent} 50%, ${colors[gender].secondary} 80%)`
                : `linear-gradient(45deg, ${colors[gender].primary} 30%, ${colors[gender].accent} 70%)`,
              opacity: 0.6
            }}
            animate={heroMode ? {
              background: [
                `linear-gradient(45deg, ${colors[gender].primary} 20%, ${colors[gender].accent} 50%, ${colors[gender].secondary} 80%)`,
                `linear-gradient(90deg, ${colors[gender].secondary} 20%, ${colors[gender].primary} 50%, ${colors[gender].accent} 80%)`,
                `linear-gradient(135deg, ${colors[gender].accent} 20%, ${colors[gender].secondary} 50%, ${colors[gender].primary} 80%)`,
                `linear-gradient(45deg, ${colors[gender].primary} 20%, ${colors[gender].accent} 50%, ${colors[gender].secondary} 80%)`
              ]
            } : {}}
            transition={heroMode ? { duration: 4, repeat: Infinity, ease: "linear" } : {}}
          />
          
          {/* Enhanced highlights and reflections */}
          <div className={`absolute ${heroMode ? 'top-1.5 left-4 w-6 h-3' : 'top-1 left-3 w-4 h-2'} bg-white/90 rounded-full blur-sm`} />
          <div className={`absolute ${heroMode ? 'top-0.5 left-3 w-3 h-1.5' : 'top-0.5 left-2 w-2 h-1'} bg-white/95 rounded-full`} />
          <div className={`absolute ${heroMode ? 'top-2 right-4 w-2 h-1' : 'top-1.5 right-3 w-1.5 h-0.5'} bg-white/70 rounded-full blur-sm`} />
          
          {/* Pharmaceutical imprint */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className={`${heroMode ? 'w-4 h-0.5' : 'w-3 h-0.5'} rounded-full`}
              style={{ 
                background: gender === 'female' 
                  ? 'rgba(251, 113, 133, 0.4)'
                  : gender === 'male'
                  ? 'rgba(59, 130, 246, 0.4)'
                  : 'rgba(180, 83, 9, 0.4)'
              }}
              animate={{ 
                opacity: [0.4, 0.7, 0.4] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
          </div>

          {/* Professional inner glow effects */}
          <motion.div
            className={`absolute ${heroMode ? 'inset-1.5' : 'inset-1'} rounded-full`}
            style={{
              background: gender === 'female'
                ? 'radial-gradient(circle at 35% 35%, rgba(251, 113, 133, 0.15) 0%, transparent 60%)'
                : gender === 'male'
                ? 'radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)'
                : 'radial-gradient(circle at 35% 35%, rgba(217, 119, 6, 0.12) 0%, transparent 60%)'
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.03, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Secondary inner highlight */}
          <motion.div
            className={`absolute ${heroMode ? 'inset-2' : 'inset-1.5'} rounded-full opacity-40`}
            style={{
              background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.8) 0%, transparent 50%)'
            }}
            animate={heroMode ? {
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.02, 1]
            } : {}}
            transition={heroMode ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" } : {}}
          />
        </motion.div>

        {/* Floating sparkles for hero mode */}
        {heroMode && [...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  // Warm, soft atmospheric background
  const WarmAtmosphericBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary gradient background - warm, light colors with minimal contrast */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #fefcfb 0%, #fef9f7 20%, #fdf6f0 40%, #fcf3ea 60%, #faf0e4 80%, #f8ede3 100%)'
        }}
        animate={{
          background: [
            'linear-gradient(135deg, #fefcfb 0%, #fef9f7 20%, #fdf6f0 40%, #fcf3ea 60%, #faf0e4 80%, #f8ede3 100%)',
            'linear-gradient(225deg, #fef9f7 0%, #fdf6f0 20%, #fcf3ea 40%, #faf0e4 60%, #f8ede3 80%, #fefcfb 100%)',
            'linear-gradient(315deg, #fdf6f0 0%, #fcf3ea 20%, #faf0e4 40%, #f8ede3 60%, #fefcfb 80%, #fef9f7 100%)',
            'linear-gradient(135deg, #fefcfb 0%, #fef9f7 20%, #fdf6f0 40%, #fcf3ea 60%, #faf0e4 80%, #f8ede3 100%)'
          ]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle floating orbs with warm tones */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${40 + Math.random() * 80}px`,
            height: `${40 + Math.random() * 80}px`,
            background: i % 4 === 0 
              ? 'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 70%)'
              : i % 4 === 1
              ? 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)'
              : i % 4 === 2
              ? 'radial-gradient(circle, rgba(217, 119, 6, 0.05) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(180, 83, 9, 0.04) 0%, transparent 70%)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.4
          }}
          animate={{
            x: [0, 50 + Math.random() * 100, 0],
            y: [0, 50 + Math.random() * 100, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Gentle floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? 'rgba(251, 191, 36, 0.3)' : 'rgba(217, 119, 6, 0.25)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -30 - Math.random() * 50, 0],
            x: [(Math.random() - 0.5) * 30, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 30],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Subtle texture overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(217, 119, 6, 0.1) 1px, transparent 0)
          `,
          backgroundSize: '24px 24px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '24px 24px'],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Gentle light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 40%, rgba(251, 191, 36, 0.02) 50%, transparent 60%),
            linear-gradient(135deg, transparent 40%, rgba(245, 158, 11, 0.02) 50%, transparent 60%)
          `
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 0.5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );

  // NEW: Animated concentration chart showing drug levels over time
  const ConcentrationChart = ({ gender, delay = 0 }) => {
    const chartColors = {
      female: {
        line: '#fb7185',
        area: 'rgba(251, 113, 133, 0.1)',
        dots: '#e11d48'
      },
      male: {
        line: '#3b82f6',
        area: 'rgba(59, 130, 246, 0.1)',
        dots: '#1d4ed8'
      }
    };

    const color = chartColors[gender];
    
    // Create data points for the concentration curve
    const dataPoints = gender === 'female' 
      ? [100, 95, 88, 80, 72, 64, 57, 50, 44, 38, 33, 28, 24, 20, 17, 14, 12, 10]  // Slower decline
      : [100, 85, 72, 61, 52, 44, 37, 31, 26, 22, 19, 16, 13, 11, 9, 7, 6, 5];     // Faster decline

    return (
      <motion.div
        className="w-full max-w-sm mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay, duration: 1.5 }}
      >
        {/* Chart title */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5, duration: 1 }}
        >
          <h4 className={`text-sm ${gender === 'female' ? 'text-rose-700' : 'text-blue-700'}`}>
            Drug Concentration Over Time
          </h4>
          <p className="text-xs text-slate-600 mt-1">
            {gender === 'female' ? '8.2 hour half-life' : '4.1 hour half-life'}
          </p>
        </motion.div>

        {/* Chart container */}
        <div className="relative w-full h-40 bg-white/50 rounded-lg border border-slate-200/50 p-3">
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
            {/* Horizontal grid lines */}
            {[...Array(5)].map((_, i) => (
              <line
                key={`h-grid-${i}`}
                x1="20"
                x2="100%"
                y1={`${20 + i * 20}%`}
                y2={`${20 + i * 20}%`}
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            ))}
            {/* Vertical grid lines */}
            {[...Array(6)].map((_, i) => (
              <line
                key={`v-grid-${i}`}
                x1={`${20 + i * 16}%`}
                x2={`${20 + i * 16}%`}
                y1="10%"
                y2="90%"
                stroke="rgba(148, 163, 184, 0.3)"
                strokeWidth="0.5"
                strokeDasharray="2,2"
              />
            ))}

            {/* Animated line chart */}
            <defs>
              <linearGradient id={`area-${gender}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={color.area} />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Area under the curve */}
            <motion.path
              d={`M 20 ${90 - (dataPoints[0] * 0.7)} ${dataPoints.map((point, i) => 
                `L ${20 + (i * 4.7)} ${90 - (point * 0.7)}`
              ).join(' ')} L ${20 + (dataPoints.length - 1) * 4.7} 90 L 20 90 Z`}
              fill={`url(#area-${gender})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: delay + 1, duration: 1 }}
            />

            {/* Main line */}
            <motion.path
              d={`M 20 ${90 - (dataPoints[0] * 0.7)} ${dataPoints.map((point, i) => 
                `L ${20 + (i * 4.7)} ${90 - (point * 0.7)}`
              ).join(' ')}`}
              fill="none"
              stroke={color.line}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ 
                delay: delay + 1, 
                duration: gender === 'female' ? 4 : 2,
                ease: "easeOut" 
              }}
            />

            {/* Animated dots */}
            {dataPoints.map((point, i) => (
              <motion.circle
                key={i}
                cx={20 + (i * 4.7)}
                cy={90 - (point * 0.7)}
                r="2"
                fill={color.dots}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: delay + 1 + (i * (gender === 'female' ? 0.2 : 0.1)), 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
              />
            ))}

            {/* Y-axis labels */}
            <text x="10" y="15" fontSize="8" fill="#64748b" textAnchor="middle">100%</text>
            <text x="10" y="93" fontSize="8" fill="#64748b" textAnchor="middle">0%</text>
            
            {/* X-axis labels */}
            <text x="20" y="105" fontSize="8" fill="#64748b" textAnchor="middle">0h</text>
            <text x="85" y="105" fontSize="8" fill="#64748b" textAnchor="middle">
              {gender === 'female' ? '8h' : '4h'}
            </text>
          </svg>
        </div>

        {/* Animated statistics */}
        <motion.div
          className="mt-4 space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 3, duration: 1 }}
        >
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-600">Peak Concentration:</span>
            <motion.span 
              className={`text-xs ${gender === 'female' ? 'text-rose-600' : 'text-blue-600'}`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ delay: delay + 3.5, duration: 0.5 }}
            >
              100 ng/mL
            </motion.span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-600">Clearance Rate:</span>
            <motion.span 
              className={`text-xs ${gender === 'female' ? 'text-rose-600' : 'text-blue-600'}`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ delay: delay + 4, duration: 0.5 }}
            >
              {gender === 'female' ? '2.3 L/hr' : '4.7 L/hr'}
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // NEW: Flowing metabolic particles showing enzyme activity
  const MetabolicParticles = ({ gender, active, delay = 0 }) => {
    const particleCount = gender === 'female' ? 15 : 25;
    const speed = gender === 'female' ? 4 : 2;
    
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ delay: delay, duration: 1 }}
      >
        {active && [...Array(particleCount)].map((_, i) => (
          <motion.div
            key={`metabolic-particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: gender === 'female' 
                ? 'radial-gradient(circle, rgba(251, 113, 133, 0.8) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 0.5}px)`
            }}
            animate={{
              x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 300, (Math.random() - 0.5) * 200],
              y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 300, (Math.random() - 0.5) * 200],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: speed + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3
            }}
          />
        ))}
      </motion.div>
    );
  };

  // Enhanced sea-like stomach visualization
  const ColorfulSea = ({ active = false, gender = "female" }) => {
    const colors = {
      female: {
        primary: 'rgba(251, 113, 133, 0.12)',
        secondary: 'rgba(244, 114, 182, 0.18)',
        tertiary: 'rgba(236, 72, 153, 0.10)',
        bubble: 'rgba(251, 113, 133, 0.4)',
        glow: 'rgba(251, 113, 133, 0.12)',
        wave: 'rgba(244, 114, 182, 0.20)'
      },
      male: {
        primary: 'rgba(59, 130, 246, 0.12)',
        secondary: 'rgba(37, 99, 235, 0.18)',
        tertiary: 'rgba(29, 78, 216, 0.10)',
        bubble: 'rgba(59, 130, 246, 0.4)',
        glow: 'rgba(59, 130, 246, 0.12)',
        wave: 'rgba(37, 99, 235, 0.20)'
      }
    };

    return (
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-2/3 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: active ? 1 : 0, 
          y: active ? 0 : 50
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Multi-layered sea effect */}
        <motion.div className="absolute inset-0">
          
          {/* Base sea layer with stronger colors */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, 
                transparent 0%, 
                ${colors[gender].tertiary} 15%, 
                ${colors[gender].primary} 35%, 
                ${colors[gender].secondary} 65%, 
                ${colors[gender].primary} 85%,
                ${colors[gender].secondary} 100%)`
            }}
            animate={active ? {
              background: [
                `linear-gradient(180deg, transparent 0%, ${colors[gender].tertiary} 15%, ${colors[gender].primary} 35%, ${colors[gender].secondary} 65%, ${colors[gender].primary} 85%, ${colors[gender].secondary} 100%)`,
                `linear-gradient(180deg, transparent 0%, ${colors[gender].primary} 10%, ${colors[gender].secondary} 40%, ${colors[gender].tertiary} 70%, ${colors[gender].secondary} 90%, ${colors[gender].primary} 100%)`,
                `linear-gradient(180deg, transparent 0%, ${colors[gender].tertiary} 15%, ${colors[gender].primary} 35%, ${colors[gender].secondary} 65%, ${colors[gender].primary} 85%, ${colors[gender].secondary} 100%)`
              ]
            } : {}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Wave layers using SVG for organic shapes */}
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 400 300" 
            className="absolute inset-0"
            style={{ filter: 'blur(0.5px)' }}
          >
            <defs>
              <linearGradient id={`sea-${gender}-1`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="25%" stopColor={colors[gender].wave} />
                <stop offset="100%" stopColor={colors[gender].primary} />
              </linearGradient>
              <linearGradient id={`sea-${gender}-2`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="40%" stopColor={colors[gender].secondary} />
                <stop offset="100%" stopColor={colors[gender].tertiary} />
              </linearGradient>
            </defs>
            
            {/* Top wave layer */}
            <motion.path
              d="M 0 300 Q 100 180 200 200 Q 300 180 400 220 L 400 300 L 0 300 Z"
              fill={`url(#sea-${gender}-1)`}
              animate={active ? {
                d: [
                  "M 0 300 Q 100 180 200 200 Q 300 180 400 220 L 400 300 L 0 300 Z",
                  "M 0 300 Q 100 170 200 190 Q 300 170 400 210 L 400 300 L 0 300 Z",
                  "M 0 300 Q 100 190 200 210 Q 300 190 400 230 L 400 300 L 0 300 Z",
                  "M 0 300 Q 100 180 200 200 Q 300 180 400 220 L 400 300 L 0 300 Z"
                ]
              } : {}}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Middle wave layer */}
            <motion.path
              d="M 0 300 Q 150 220 250 230 Q 350 220 400 250 L 400 300 L 0 300 Z"
              fill={`url(#sea-${gender}-2)`}
              animate={active ? {
                d: [
                  "M 0 300 Q 150 220 250 230 Q 350 220 400 250 L 400 300 L 0 300 Z",
                  "M 0 300 Q 150 210 250 220 Q 350 210 400 240 L 400 300 L 0 300 Z",
                  "M 0 300 Q 150 230 250 240 Q 350 230 400 260 L 400 300 L 0 300 Z",
                  "M 0 300 Q 150 220 250 230 Q 350 220 400 250 L 400 300 L 0 300 Z"
                ]
              } : {}}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>

          {/* Surface glow effect */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-12"
            style={{
              background: `linear-gradient(180deg, ${colors[gender].glow} 0%, transparent 100%)`,
              filter: 'blur(6px)'
            }}
            animate={active ? {
              opacity: [0.5, 0.9, 0.5],
              scaleY: [1, 1.5, 1]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Enhanced floating bubbles */}
          {active && [...Array(25)].map((_, i) => (
            <motion.div
              key={`sea-bubble-${gender}-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 5}px`,
                height: `${2 + Math.random() * 5}px`,
                background: colors[gender].bubble,
                left: `${10 + Math.random() * 80}%`,
                bottom: `${5 + Math.random() * 85}%`,
                filter: 'blur(1px)',
                boxShadow: `0 0 ${4 + Math.random() * 6}px ${colors[gender].bubble}`
              }}
              animate={{
                y: [0, -30 - Math.random() * 25, 0],
                x: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 15],
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.4, 0.8]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Enzyme/metabolic activity indicators */}
          {active && [...Array(20)].map((_, i) => (
            <motion.div
              key={`enzyme-${gender}-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full opacity-70"
              style={{
                background: colors[gender].bubble,
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`
              }}
              animate={{
                scale: [0.5, 1.8, 0.5],
                opacity: [0.4, 0.9, 0.4],
                rotate: [0, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>

        {/* Add metabolic particles overlay */}
        <MetabolicParticles gender={gender} active={active} delay={1} />
      </motion.div>
    );
  };

  // Enhanced dissolution particles with more dramatic effects
  const FluidDissolution = ({ active = false, gender = "female", intensity = 1 }) => {
    const particleColors = {
      female: [
        'rgba(251, 113, 133, 0.9)',
        'rgba(244, 114, 182, 0.8)',
        'rgba(236, 72, 153, 0.85)',
        'rgba(249, 168, 212, 0.7)',
        'rgba(252, 165, 165, 0.75)'
      ],
      male: [
        'rgba(59, 130, 246, 0.9)',
        'rgba(37, 99, 235, 0.8)',
        'rgba(29, 78, 216, 0.85)',
        'rgba(147, 197, 253, 0.7)',
        'rgba(96, 165, 250, 0.75)'
      ]
    };

    const count = gender === 'female' ? 40 : 30;
    const duration = gender === 'female' ? 5 : 2;

    return (
      <>
        {active && [...Array(count)].map((_, i) => {
          const angle = (i / count) * Math.PI * 2;
          const radius = 50 + Math.random() * 60;
          const endX = Math.cos(angle) * radius + (Math.random() - 0.5) * 50;
          const endY = Math.sin(angle) * radius + 70 + Math.random() * 50;
          
          const color = particleColors[gender][Math.floor(Math.random() * particleColors[gender].length)];
          const size = 1 + Math.random() * 3;
          
          return (
            <motion.div
              key={`particle-${gender}-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${color} 40%, transparent 70%)`,
                left: '50%',
                top: '50%',
                filter: `blur(${Math.random() * 1}px)`,
                boxShadow: `0 0 ${size * 4}px ${color}`
              }}
              initial={{ 
                x: 0, 
                y: 0, 
                opacity: 1,
                scale: 1
              }}
              animate={{
                x: endX,
                y: endY,
                opacity: gender === 'female' 
                  ? [1, 0.8, 0.6, 0.3, 0.1, 0]
                  : [1, 0.7, 0.3, 0],
                scale: gender === 'female'
                  ? [1, 1.5, 2.2, 3.0, 4.0, 5.0]
                  : [1, 0.8, 0.4, 0.1],
                rotate: Math.random() * 720
              }}
              transition={{
                duration: duration,
                delay: 1 + i * (gender === 'female' ? 0.08 : 0.04),
                ease: "easeOut"
              }}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      
      {/* Warm atmospheric background */}
      <WarmAtmosphericBackground />

      {/* Responsive header with warm glow - OPTIMIZED */}
      <motion.div 
        className="absolute top-8 sm:top-16 left-1/2 transform -translate-x-1/2 text-center z-10 px-4 w-full max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-amber-900 text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-2 sm:mb-4 mx-auto text-center"
          style={{
            textShadow: '0 0 20px rgba(217, 119, 6, 0.3)'
          }}
        >
          Pharmacokinetic Visualization
        </motion.h1>
        <div className="flex items-center justify-center space-x-2 sm:space-x-4 mx-auto">
          <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
          <p className="text-amber-700 text-xs sm:text-sm lg:text-base tracking-wide uppercase text-center">
            Gender-Based Metabolic Pathways
          </p>
          <Droplets className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
        </div>
      </motion.div>

      {/* Stage 0-1: Enhanced Introduction with Hero Pill */}
      <AnimatePresence mode="wait">
        {stage <= 1 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            <motion.div
              className="text-center relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.div 
                className="relative mb-8 sm:mb-12 flex justify-center"
                animate={{
                  y: [0, -4, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <ProfessionalPill heroMode={true} />
                
                {/* Simplified atmospheric effect */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-30"
                  style={{
                    background: 'radial-gradient(circle, rgba(217, 119, 6, 0.2) 0%, transparent 70%)',
                    width: '120px',
                    height: '120px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="text-center w-full"
              >
                <h2 
                  className="text-amber-900 text-xl sm:text-3xl lg:text-4xl font-semibold tracking-wide mb-4 sm:mb-6 mx-auto"
                  style={{
                    textShadow: '0 0 15px rgba(217, 119, 6, 0.3)'
                  }}
                >
                  One Drug, Two Metabolic Journeys
                </h2>
                <p 
                  className="text-amber-700 text-base sm:text-lg lg:text-xl opacity-90 mx-auto max-w-2xl"
                >
                  Witness the art of personalized medicine
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage 2-4: Responsive Split Screen */}
      <AnimatePresence>
        {stage >= 2 && stage < 5 && (
          <motion.div 
            className="absolute inset-0 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
          >
            {/* Light background for split screen */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100" />
            
            {/* Responsive center divider */}
            <motion.div
              className="absolute left-1/2 top-0 w-px h-full z-31"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(148, 163, 184, 0.2) 20%, rgba(148, 163, 184, 0.3) 50%, rgba(148, 163, 184, 0.2) 80%, transparent 100%)'
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Female Side - Left - Responsive */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 h-full flex flex-col items-center justify-center"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Colorful sea background */}
              <ColorfulSea active={stage >= 3} gender="female" />
              
              <div className="relative w-full max-w-xs sm:max-w-sm px-4 sm:px-8 z-10">
                
                {/* Responsive Header */}
                <motion.div 
                  className="text-center mb-12 sm:mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.06) 0%, rgba(244, 114, 182, 0.08) 100%)',
                        borderColor: 'rgba(251, 113, 133, 0.12)'
                      }}
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(251, 113, 133, 0)',
                          '0 0 0 6px rgba(251, 113, 133, 0.04)',
                          '0 0 0 0 rgba(251, 113, 133, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600" />
                    </motion.div>
                    <h3 className="text-slate-800 text-lg sm:text-xl tracking-wide">Female Metabolism</h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm">Sustained Processing</p>
                </motion.div>

                {/* Responsive Animation area */}
                <div className="relative h-60 sm:h-80 mb-8 sm:mb-12">
                  {/* Falling pill - only falls once */}
                  {stage >= 3 && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <ProfessionalPill 
                        falling={stage === 3}
                        dissolving={stage >= 4}
                        gender="female"
                        delay={0.2}
                      />
                    </div>
                  )}
                  
                  {/* Enhanced dissolution */}
                  <FluidDissolution 
                    active={stage >= 4} 
                    gender="female" 
                    intensity={1.2}
                  />
                </div>

                {/* Responsive Indicators */}
                <motion.div 
                  className="space-y-2 sm:space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 4 ? 1 : 0 }}
                  transition={{ delay: 2.5, duration: 1 }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-700">
                    <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-rose-600" />
                    <span className="text-xs sm:text-sm">CYP450: Gentle Activity</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-700">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-rose-600" />
                    <span className="text-xs sm:text-sm">Duration: Extended</span>
                  </div>
                  
                  <div className="w-full h-2 bg-gradient-to-r from-rose-100/60 to-pink-50/40 rounded-full overflow-hidden mt-4 sm:mt-6">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(251, 113, 133, 0.6) 0%, rgba(244, 114, 182, 0.7) 50%, rgba(236, 72, 153, 0.6) 100%)'
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: stage >= 4 ? "70%" : "0%" }}
                      transition={{ duration: 4, ease: "easeOut", delay: 1.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Male Side - Right - Responsive */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 h-full flex flex-col items-center justify-center"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* Colorful sea background */}
              <ColorfulSea active={stage >= 3} gender="male" />
              
              <div className="relative w-full max-w-xs sm:max-w-sm px-4 sm:px-8 z-10">
                
                {/* Responsive Header */}
                <motion.div 
                  className="text-center mb-12 sm:mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
                    <motion.div 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.06) 0%, rgba(37, 99, 235, 0.08) 100%)',
                        borderColor: 'rgba(59, 130, 246, 0.12)'
                      }}
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(59, 130, 246, 0)',
                          '0 0 0 6px rgba(59, 130, 246, 0.04)',
                          '0 0 0 0 rgba(59, 130, 246, 0)'
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </motion.div>
                    <h3 className="text-slate-800 text-lg sm:text-xl tracking-wide">Male Metabolism</h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm">Rapid Processing</p>
                </motion.div>

                {/* Responsive Animation area */}
                <div className="relative h-60 sm:h-80 mb-8 sm:mb-12">
                  {/* Falling pill - only falls once */}
                  {stage >= 3 && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <ProfessionalPill 
                        falling={stage === 3}
                        dissolving={stage >= 4}
                        gender="male"
                        delay={0.4}
                      />
                    </div>
                  )}
                  
                  {/* Enhanced dissolution */}
                  <FluidDissolution 
                    active={stage >= 4} 
                    gender="male" 
                    intensity={1.3}
                  />
                </div>

                {/* Responsive Indicators */}
                <motion.div 
                  className="space-y-2 sm:space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: stage >= 4 ? 1 : 0 }}
                  transition={{ delay: 2, duration: 1 }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-700">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm">Hepatic: Enhanced</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 text-slate-700">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm">Duration: Accelerated</span>
                  </div>
                  
                  <div className="w-full h-2 bg-gradient-to-r from-blue-100/60 to-sky-50/40 rounded-full overflow-hidden mt-4 sm:mt-6">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.7) 50%, rgba(29, 78, 216, 0.6) 100%)'
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: stage >= 4 ? "100%" : "0%" }}
                      transition={{ duration: 1.5, ease: "easeIn", delay: 1 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stage 5: NEW Creative Charts & Visualizations Results */}
      <AnimatePresence>
        {stage >= 5 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-40 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100" />
            
            <motion.div
              initial={{ y: 100, opacity: 0, filter: "blur(20px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="w-full max-w-xs sm:max-w-6xl"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200/50 shadow-2xl">
                
                {/* Header */}
                <motion.div
                  className="text-center mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-slate-800 text-lg sm:text-xl tracking-wide mb-2">
                    Metabolic Analysis Dashboard
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Real-time pharmacokinetic comparison showing gender-based differences
                  </p>
                </motion.div>
                
                {/* Main Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
                  
                  {/* Female Chart */}
                  <motion.div 
                    className="p-4 sm:p-6 rounded-xl border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(251, 113, 133, 0.03) 0%, rgba(244, 114, 182, 0.05) 100%)',
                      borderColor: 'rgba(251, 113, 133, 0.1)'
                    }}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <LineChart className="w-4 h-4 text-rose-600" />
                      <span className="text-rose-700 text-sm tracking-wider uppercase">Female Subject</span>
                    </div>
                    <ConcentrationChart gender="female" delay={1.5} />
                  </motion.div>
                  
                  {/* Male Chart */}
                  <motion.div 
                    className="p-4 sm:p-6 rounded-xl border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(37, 99, 235, 0.05) 100%)',
                      borderColor: 'rgba(59, 130, 246, 0.1)'
                    }}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    <div className="flex items-center space-x-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-700 text-sm tracking-wider uppercase">Male Subject</span>
                    </div>
                    <ConcentrationChart gender="male" delay={1.8} />
                  </motion.div>
                </div>

                {/* Comparative Summary */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                >
                  <div className="text-center p-4 rounded-lg bg-slate-50/50 border border-slate-200/50">
                    <motion.div
                      className="text-2xl font-semibold text-amber-700 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ delay: 5, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      2.0x
                    </motion.div>
                    <div className="text-xs text-slate-600">Half-life Difference</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-slate-50/50 border border-slate-200/50">
                    <motion.div
                      className="text-2xl font-semibold text-amber-700 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ delay: 5.2, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      2.04x
                    </motion.div>
                    <div className="text-xs text-slate-600">Clearance Rate Difference</div>
                  </div>
                  
                  <div className="text-center p-4 rounded-lg bg-slate-50/50 border border-slate-200/50">
                    <motion.div
                      className="text-2xl font-semibold text-amber-700 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ delay: 5.4, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      85%
                    </motion.div>
                    <div className="text-xs text-slate-600">Dosing Accuracy Needed</div>
                  </div>
                </motion.div>

                {/* Clinical Insight */}
                <motion.div 
                  className="text-center pt-4 sm:pt-6 border-t border-slate-200/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 6 }}
                >
                  <motion.div
                    className="inline-flex items-center space-x-3 mb-3"
                    animate={{
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Activity className="w-4 h-4 text-amber-600" />
                    <span className="text-amber-700 text-sm font-medium">
                      Female metabolism requires 2x longer processing time
                    </span>
                    <Activity className="w-4 h-4 text-amber-600" />
                  </motion.div>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                    Gender-specific pharmacokinetics demonstrate significant metabolic variations requiring 
                    personalized dosing protocols to optimize therapeutic efficacy and minimize adverse effects.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive progress indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-3 sm:space-x-6">
          <div className="flex space-x-2 sm:space-x-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full border"
                animate={{ 
                  backgroundColor: i <= stage ? (stage <= 1 ? '#d97706' : '#475569') : 'transparent',
                  borderColor: i <= stage ? (stage <= 1 ? '#d97706' : '#475569') : (stage <= 1 ? '#fbbf24' : '#cbd5e1'),
                  scale: i === stage ? [1, 1.2, 1] : 1,
                  boxShadow: i === stage && stage <= 1 ? [
                    '0 0 0 0 rgba(217, 119, 6, 0)',
                    '0 0 0 4px rgba(217, 119, 6, 0.1)',
                    '0 0 0 0 rgba(217, 119, 6, 0)'
                  ] : '0 0 0 0 rgba(217, 119, 6, 0)'
                }}
                transition={{ 
                  duration: 1,
                  repeat: i === stage ? Infinity : 0,
                  repeatType: 'reverse'
                }}
              />
            ))}
          </div>
          <div 
            className={`text-xs tracking-wider uppercase ${stage <= 1 ? 'text-amber-600' : 'text-slate-600'} opacity-80`}
          >
            {stage === 0 && "Initializing"}
            {stage === 1 && "Introduction"}
            {stage === 2 && "Setup"}
            {stage === 3 && "Ingestion"}
            {stage === 4 && "Metabolism"}
            {stage === 5 && "Analytics"}
          </div>
        </div>
      </div>
    </div>
  );
}