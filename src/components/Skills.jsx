import { motion } from "framer-motion"

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

function Skills() {
  return (
    <section id="skills" className="py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-blue-500">
          Technical Skills
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >

          {[
            { title: "☁ Cloud", items: ["AWS EC2", "S3", "VPC", "IAM", "Load Balancer"] },
            { title: "⚙ DevOps", items: ["Jenkins", "Docker", "Terraform", "Ansible", "GitHub Actions"] },
            { title: "📊 Monitoring", items: ["Prometheus", "Grafana", "Node Exporter"] },
            { title: "🖥 Tools", items: ["Linux", "Bash", "Git", "Networking Basics"] },
          ].map((block, index) => (

            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md dark:shadow-none"
            >

              <h3 className="font-semibold mb-3">
                {block.title}
              </h3>

              <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  )
}

export default Skills
