import { useEffect, useState, useMemo, useRef } from 'react';
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps';
import { globalPresence } from '../mock/mock';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const NAME_ALIASES = {
  'United States of America': 'USA',
  'United States': 'USA',
  'United Kingdom': 'United Kingdom',
  'India': 'India',
  'United Arab Emirates': 'UAE',
  'Nigeria': 'Nigeria',
  'Kenya': 'Kenya',
  'Australia': 'Australia',
  'Brazil': 'Brazil',
  'Malaysia': 'Malaysia',
  'South Africa': 'South Africa',
  'Saudi Arabia': 'Saudi Arabia',
  'Germany': 'Germany',
  'Canada': 'Canada',
  'France': 'France',
  'Egypt': 'Egypt',
  'Singapore': 'Singapore',
  'Ghana': 'Ghana',
  'Tanzania': 'Tanzania',
  'Vietnam': 'Vietnam',
  'Thailand': 'Thailand',
  'Philippines': 'Philippines',
  'Indonesia': 'Indonesia',
  'Bangladesh': 'Bangladesh',
  'Sri Lanka': 'Sri Lanka',
  'Nepal': 'Nepal'
};

export default function RotatingGlobe({ size = 520 }) {
  const [rotation, setRotation] = useState([0, -15, 0]);
  const rotationRef = useRef(0);
  const isVisibleRef = useRef(true);
  const containerRef = useRef(null);

  const highlightSet = useMemo(() => new Set(globalPresence.map((c) => c.country)), []);

  // Pause animation when tab hidden or component off-screen for performance
  useEffect(() => {
    const onVis = () => { isVisibleRef.current = !document.hidden; };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { isVisibleRef.current = e.isIntersecting && !document.hidden; });
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Throttled to ~12fps to avoid blocking main thread / router transitions
  useEffect(() => {
    let cancelled = false;
    const interval = setInterval(() => {
      if (cancelled || !isVisibleRef.current) return;
      rotationRef.current = (rotationRef.current + 3) % 360;
      setRotation([rotationRef.current, -15, 0]);
    }, 80);
    return () => { cancelled = true; clearInterval(interval); };
  }, []);

  return (
    <div ref={containerRef} style={{ width: size, height: size }} className="relative mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle at 30% 25%, rgba(255,140,71,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 75%, rgba(42,111,214,0.2) 0%, transparent 60%)',
        filter: 'blur(20px)'
      }} />

      <ComposableMap
        projection="geoOrthographic"
        projectionConfig={{ rotate: rotation, scale: size / 2.15 }}
        width={size}
        height={size}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Ocean sphere */}
        <defs>
          <radialGradient id="ocean-gradient" cx="30%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#2a6fd6" />
            <stop offset="55%" stopColor="#0f3d91" />
            <stop offset="100%" stopColor="#0a2a66" />
          </radialGradient>
          <radialGradient id="land-gradient" cx="30%" cy="30%" r="90%">
            <stop offset="0%" stopColor="#ffb98a" />
            <stop offset="100%" stopColor="#f26522" />
          </radialGradient>
        </defs>

        <Sphere stroke="rgba(255,255,255,0.15)" strokeWidth={0.5} fill="url(#ocean-gradient)" />
        <Graticule stroke="rgba(255,255,255,0.12)" strokeWidth={0.5} />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const aliased = NAME_ALIASES[name] || name;
              const isHighlighted = highlightSet.has(aliased);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? 'url(#land-gradient)' : 'rgba(255,255,255,0.72)'}
                  stroke={isHighlighted ? '#ffffff' : 'rgba(15, 61, 145, 0.35)'}
                  strokeWidth={isHighlighted ? 0.6 : 0.3}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: isHighlighted ? '#ff8c47' : 'rgba(255,255,255,0.9)' },
                    pressed: { outline: 'none' }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Highlight overlay for 3D effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none" style={{
        background: 'radial-gradient(circle at 28% 25%, rgba(255,255,255,0.28) 0%, transparent 40%), radial-gradient(circle at 75% 78%, rgba(0,0,0,0.35) 0%, transparent 55%)',
        mixBlendMode: 'overlay'
      }} />
    </div>
  );
}
