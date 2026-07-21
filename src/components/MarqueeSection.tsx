import { useEffect, useRef, useState } from 'react';
import network from "../assets/marquee/network.webp";
import splunk from "../assets/marquee/splunk.webp";
import wazuh from "../assets/marquee/wazuh.webp";
import pipeline from "../assets/marquee/pipeline.webp";
import mitre from "../assets/marquee/mitre.webp";
import windowslab from "../assets/marquee/windowslab.webp";
import soclab from "../assets/marquee/soclab.webp";
import architecture from "../assets/marquee/architecture.webp";
import kali from "../assets/marquee/kali.webp";
import sysmon from "../assets/marquee/sysmon.webp";

const ALL_GIFS = [
  network,
  splunk,
  wazuh,
  pipeline,
  mitre,
  windowslab,
  soclab,
  architecture,
  kali,
  sysmon,
];

const ROW_1 = ALL_GIFS.slice(0, 5);
const ROW_2 = ALL_GIFS.slice(5);

function tripled(arr: string[]) {
  return [...arr, ...arr, ...arr];
}

const ROW_1_TILES = tripled(ROW_1);
const ROW_2_TILES = tripled(ROW_2);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(raw);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 -- moves right on scroll */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_1_TILES.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: '420px', height: '270px' }}
            />
          ))}
        </div>
        {/* Row 2 -- moves left on scroll */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_2_TILES.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="rounded-2xl object-cover flex-shrink-0"
              style={{ width: '420px', height: '270px' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
