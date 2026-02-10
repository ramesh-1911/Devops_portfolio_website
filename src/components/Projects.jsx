import { motion } from "framer-motion"

function Projects() {

  const projects = [
    {
      title: "AWS DevOps CI/CD Automation Platform",
      desc: "Built Jenkins multibranch pipeline integrated with GitHub webhooks. Automated deployments using Ansible and implemented monitoring using Prometheus and Grafana.",
      stack: "AWS EC2, Jenkins, Docker, Ansible, Maven, Tomcat, Prometheus, Grafana"
    },
    {
      title: "Terraform AWS Infrastructure Automation",
      desc: "Automated AWS infrastructure provisioning using Terraform. Implemented remote backend with S3 and DynamoDB state locking.",
      stack: "Terraform, AWS VPC, EC2, S3, DynamoDB"
    },
    {
      title: "Monitoring Stack Deployment",
      desc: "Deployed Prometheus and Grafana on Linux servers and created custom dashboards for infrastructure monitoring.",
      stack: "Prometheus, Grafana, Linux, Node Exporter"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-transparent">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-blue-500">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md dark:shadow-none"
            >

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {project.desc}
              </p>

              <p className="text-sm text-slate-500">
                Tech Stack: {project.stack}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects
