@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body,
#root {
  background: #0c0c0c;
  font-family: 'Kanit', sans-serif;
}

html {
  scroll-behavior: smooth;
}

.hero-heading {
  background: linear-gradient(180deg, #646973 0%, #bbccd7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glow-card {
  transition: box-shadow 0.35s ease, transform 0.35s ease, border-color 0.35s ease;
}

.glow-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.12);
}

.blinking-cursor {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.cyber-grid {
  background-image:
    linear-gradient(rgba(215, 226, 234, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(215, 226, 234, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 85%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 40%, transparent 85%);
}

.scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.5), transparent);
  animation: scan 6s linear infinite;
}

@keyframes scan {
  0% {
    top: 0%;
  }
  100% {
    top: 100%;
  }
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #0c0c0c;
}
::-webkit-scrollbar-thumb {
  background: #22222a;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 211, 238, 0.4);
}
