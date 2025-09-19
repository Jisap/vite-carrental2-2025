import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación solo se disparará una vez
    threshold: 0.1, // Se dispara cuando el 10% del elemento es visible
  });

  // Variante para el contenedor principal que orquesta la animación de sus hijos
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Anima los hijos con un desfase de 0.3s
      },
    },
  };

  // Variante para las secciones principales (columnas y copyright)
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Datos para íconos y enlaces, para un código más limpio
  const socialIcons = [
    { icon: "fa-brands fa-facebook-f", href: "#" },
    { icon: "fa-brands fa-x-twitter", href: "#" },
    { icon: "fa-brands fa-tiktok", href: "#" },
    { icon: "fa-brands fa-youtube", href: "#" },
  ];

  const quickLinks = [
    { to: "/About", text: "About" },
    { to: "/Cars", text: "Cars" },
    { to: "/Blog", text: "Blog" },
    { to: "/Contact", text: "Contact" },
  ];

  return (
    <>
      <motion.footer
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center flex-col overflow-hidden"
      >
        <motion.div
          variants={sectionVariants}
          className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0"
        >
          <motion.div
            variants={containerVariants} // Reutilizamos para staggerear las columnas
            className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0"
          >
            {/* Lado izquierdo */}
            <motion.div variants={sectionVariants} className="flex-1">
              <Link to="/" className="text-4xl font-bold logo font-bricolage">
                Ride<span className="text-primary">Lux.</span>
              </Link>

              <p className="text-[#999] mb-6 md:w-[90%] w-full mt-2">
                Rent a car for your next trip. We offer a wide range of vehicles
                to suit your needs.
              </p>

              <div className="flex gap-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Centro */}
            <motion.div variants={sectionVariants} className="flex-1">
              <h4 className="text-2xl font-semibold font-bricolage mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2 text-[#999] footer-menu relative">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="hover:text-red-600 relative transitio duration-300 font-bricolage"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Derecho */}
            <motion.div variants={sectionVariants} className="flex-1">
              <h4 className="text-2xl font-semibold font-bricolage mb-4">
                Subscribe
              </h4>

              <p className="text-[#999] mb-4 text-sm">
                Want to be notified about our services ? Just sign up and we'll
                send you a notification by email.
              </p>

              <div className="flex items-center border border-red-600 rounded-full px-4 py-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  className="bg-transparent outline-none text-white placeholder:text-[#aaa] flex-1"
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          className="text-[#999] text-center text-base relative py-6"
        >
          <p className="font-bricolage">
            © 2025 RideLux. All rights reserved.{" "}
            <a href="#" className="text-white font-bricolage">
              UIcode
            </a>
          </p>
        </motion.div>
      </motion.footer>
    </>
  );
};

export default Footer;