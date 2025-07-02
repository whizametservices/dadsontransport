'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    label: 'On-Time Rate',
    value: 98.7,
    suffix: '%',
    width: '35%',
    gradientFrom: '#eaeaea',
  },
  {
    label: 'Live Support',
    value: 24,
    suffix: '/7',
    width: '70%',
    gradientFrom: '#e05b00',
  },
  {
    label: 'Miles Tracked Monthly',
    value: 5,
    suffix: 'M+',
    width: '35%',
    gradientFrom: '#eaeaea',
  },
];

export default function ProgressStats() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
          setCounts(stats.map(() => 0));
          requestAnimationFrame(() => {
            setVisible(true);
          });
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    const intervals = stats.map((stat, index) => {
      let current = 0;
      const target = stat.value;
      const increment = target / 40;

      const intervalId = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervalId);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = parseFloat(current.toFixed(1));
          return updated;
        });
      }, 40);

      return intervalId;
    });

    return () => intervals.forEach(clearInterval);
  }, [visible]);

  return (
    <section className="w-full bg-white overflow-hidden last-main-sec" ref={containerRef}>
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-['Clash_Display'] uppercase text-black mb-40 md:mb-24 max-w-2xl text-center">
            WHY DISPATCH TEAMS <br />
            <span className="block md:mt-2">CHOOSE DADSON</span>
          </h2>

          {stats.map((stat, i) => (
            <div key={i} className="w-full">
              <div className="flex items-start py-8 md:py-10 relative progressbar-new">
                <div className="min-w-[160px] mr-16">
                  <div
                    className={`flex flex-col items-start gap-1 transition-all duration-700 ${
                      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="bar-text text-black text-5xl font-medium font-['Satoshi'] uppercase leading-tight">
                      <span>
                        {counts[i]}
                        {stat.suffix}
                      </span>
                    </div>
                    <div className="short-txt text-[#707C83] text-xl font-medium font-['Satoshi']">{stat.label}</div>
                  </div>
                </div>

                <div className="h-24 relative overflow-hidden mt-2" style={{ width: stat.width }}>
                  <div
                    className="bar-new h-full absolute top-0 right-0 rounded-l-[200px] bg-gradient-to-r to-white/0 flex items-center"
                    style={{
                      width: '100%',
                      backgroundImage: `linear-gradient(to right, ${stat.gradientFrom}, transparent)`,
                      transform: visible ? 'translateX(0%)' : 'translateX(100%)',
                      transition: 'transform 1.5s ease',
                    }}
                  >
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 116 116"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{
                        transform: visible ? 'translateX(0)' : 'translateX(100%)',
                        transition: 'transform 1.2s ease',
                        transitionDelay: '0.4s', // circle comes in with delay
                      }}
                    >
                      {[...Array(6)].map((_, j) => (
                        <rect
                          key={j}
                          x={50.7949}
                          y={0}
                          width={14.4099}
                          height={116}
                          fill="white"
                          transform={`rotate(${j * 30} 58 58)`}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full h-[0.5px] bg-[#e3e3e3]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
