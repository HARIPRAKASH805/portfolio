import FadeIn from "./FadeIn";

export default function ContactSection() {
  return (
    <section className="bg-[#0B0F19] py-24">

      <div className="max-w-4xl mx-auto text-center">

        <FadeIn>

          <h2 className="text-5xl font-bold text-white mb-8">
            Let's Connect
          </h2>

          <p className="text-gray-300 mb-10">
            Available for internships and full-time opportunities in
            SOC, Cybersecurity, and GRC.
          </p>

          <div className="space-y-5">

            <p className="text-cyan-400">
              📧 hariprakash5881@gmail.com
            </p>

            <p>
              <a
                href="https://github.com/HARIPRAKASH805"
                className="text-white hover:text-cyan-400"
              >
                GitHub
              </a>
            </p>

            <p>
              <a
                href="https://linkedin.com/in/hari-prakash-hp"
                className="text-white hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </p>

            <a
              href="/resume.pdf"
              className="inline-block mt-6 px-8 py-4 bg-cyan-500 rounded-xl text-black font-semibold hover:bg-cyan-400"
            >
              Download Resume
            </a>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}
