import FadeIn from "./FadeIn";

const certs = [
  "CSA (Pursuing)",
  "ISC2 Security Principles",
  "PortSwigger Web Security Academy",
  "LetsDefend SOC Labs",
];

export default function CertificationsSection() {
  return (
    <section className="bg-[#111827] py-24">

      <div className="max-w-6xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Certifications
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">

          {certs.map((cert, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="rounded-xl border border-cyan-500/30 p-8 bg-[#181F2F] hover:scale-105 transition">

                <h3 className="text-xl font-semibold text-cyan-400">
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
