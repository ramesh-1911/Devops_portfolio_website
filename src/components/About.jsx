import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-20 bg-transparent">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6"
      >

        <h2 className="text-3xl font-bold mb-6 text-blue-500">
          About Me
        </h2>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          I am a DevOps and AWS Cloud Engineer with hands-on experience in
          building automated CI/CD pipelines, infrastructure as code using
          Terraform, and monitoring cloud environments using Prometheus and
          Grafana.
          <br /><br />
          I focus on improving deployment reliability, infrastructure
          scalability, and system observability using modern DevOps best
          practices and cloud-native tools.
        </p>

      </motion.div>

    </section>
  )
}

export default About
