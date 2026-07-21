import FadeIn from "./FadeIn";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] py-20 sm:py-24 md:py-28 px-5 sm:px-8 md:px-10">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase mb-8" style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}>
            Let's Connect
          </h2>

          <p className="text-[#D7E2EA]/70 mb-10 text-sm sm:text-base">
            Available for internships and full-time opportunities in
            SOC, Cybersecurity, and GRC.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:hariprakash5881@gmail.com"
              className="text-accent hover:text-[#D7E2EA] transition-colors duration-200"
            >
              hariprakash5881@gmail.com
            </a>

            <a
              href="https://github.com/HARIPRAKASH805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA] hover:text-accent transition-colors duration-200"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/hari-prakash-hp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA] hover:text-accent transition-colors duration-200"
            >
              LinkedIn
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Hariprakash_P_Resume.pdf`}
              download
              className="inline-block mt-6 px-8 py-4 bg-accent rounded-xl text-black font-semibold hover:bg-accent/80 transition-colors duration-200"
            >
              Download Resume
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
