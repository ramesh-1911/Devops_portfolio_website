import { motion } from "framer-motion"

const projects = [
  {
    title: "AWS CI/CD Pipeline",
    desc: "Automated CI/CD pipeline using Jenkins, Docker, and AWS EC2 with monitoring integration.",
    tech: ["AWS", "Jenkins", "Docker", "Ansible", "CI/CD", "Monitoring", "Maven", "GitHub", "Linux", "Tomcat"],
    image: "/projects/Apache Tomcat Home page.png",
    github: "https://github.com/ramesh-1911/aws-ci-cd-pipeline-jenkins-ansible.git",
  },
  {
    title: "Terraform AWS Infrastructure",
    desc: "Provisioned AWS VPC, EC2, IAM using Terraform with remote state locking.",
    tech: ["Terraform", "AWS", "IaC",  "Cloud", "RDS", "S3", "VPC", "EC2", "IAM", "Bastion Host"],
    image: "/projects/01-terraform-apply-success + terraform-outputs.png.png",
    github: "https://github.com/ramesh-1911/terraform-aws-ha-3tier-architecture.git",
  },
  {
    title: "Monitoring Stack",
    desc: "Prometheus + Grafana monitoring setup with alerting and dashboards.",
    tech: ["Prometheus", "Grafana", "Linux", "Monitoring", "Alerting", "Node Exporter", "Cloud"],
    image: "/projects/Grafana Dashboard.png",
    github: "https://github.com/ramesh-1911/aws-ci-cd-pipeline-jenkins-ansible.git",
  }
]

function Projects() {
  return (
    <motion.section
  id="projects"
  className="py-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>


      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-blue-500">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-slate-900
                rounded-xl shadow-xl hover:shadow-blue-500/20 transition duration-300 overflow-hidden"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1
                        bg-blue-100 dark:bg-blue-900
                        rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View GitHub →
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.section>
  )
}

export default Projects
