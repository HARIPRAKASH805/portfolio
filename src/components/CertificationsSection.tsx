import FadeIn from "./FadeIn";

const certs = [
  "CSA (Pursuing)",
  "ISC2 Security Principles",
  "PortSwigger Web Security Academy",
  "LetsDefend SOC Labs",
];

export default function CertificationsSection() {
  return (
    <section className="bg-[#0C0C0C] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-10">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-14 sm:mb-16" style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}>
            Certifications
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {certs.map((cert, index) => (
            <FadeIn key={index} delay={index * 0.12}>
              <div className="rounded-2xl p-7 sm:p-8 text-center border border-[#D7E2EA]/15 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-accent text-base sm:text-lg font-semibold">
                  {cert}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
