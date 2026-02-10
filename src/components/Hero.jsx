import { motion } from "framer-motion"

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-10"
    >

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 gap-10 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            DevOps & AWS Cloud Engineer
          </h1>

          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            Building scalable cloud infrastructure, automated CI/CD
            pipelines, and production-ready DevOps systems using AWS,
            Terraform, Docker, Jenkins, and Monitoring tools.
          </p>

          <div className="flex gap-4">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="border border-blue-500 px-6 py-3 rounded-lg"
            >
              Download Resume
            </motion.a>

          </div>

        </motion.div>

        {/* RIGHT PHOTO */}
        <div className="flex justify-center md:justify-end">

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="relative"
  >

    {/* Glow Ring */}
    <div className="absolute inset-0 rounded-full 
      bg-gradient-to-r from-blue-500 to-cyan-400 
      blur-xl opacity-40">
    </div>

    {/* Profile Image */}
    <img
      src="/profile.jpg"
      alt="Profile"
      className="relative w-64 h-64 md:w-80 md:h-80
      object-cover rounded-full
      border-4 border-white dark:border-slate-900
      shadow-2xl"
    />

      </motion.div>
      </div>
      </div>

    </section>
  )
}

export default Hero
