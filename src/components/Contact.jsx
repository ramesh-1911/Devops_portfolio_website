function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-6 text-blue-500">
          Contact Me
        </h2>

        <p className="text-slate-400 mb-8">
          I am actively looking for DevOps Engineer and AWS Cloud Engineer
          opportunities. Feel free to connect with me.
        </p>

        <div className="space-y-3">

          <p>
            📧 Email:
            <span className="text-blue-400 ml-2">
              rameshofficial1911@gmail.com
            </span>
          </p>

          <p>
            💼 LinkedIn:
            <a
              href="https://linkedin.com/in/ramesh-k-a8207b3a5"
              target="_blank"
              className="text-blue-400 ml-2 hover:underline"
            >
              View Profile
            </a>
          </p>

          <p>
            🐙 GitHub:
            <a
              href="https://github.com/ramesh-1911"
              target="_blank"
              className="text-blue-400 ml-2 hover:underline"
            >
              View Repositories
            </a>
          </p>

        </div>

      </div>
    </section>
  )
}

export default Contact
