import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion"; // For smooth animations
import NavbarNew from "../components/NavbarNew";

function About() {
  const content = {
    title: "About Us",
    description: `
      Supporting men to face mental health challenges with strength and resilience.
      Our mission is to create safe spaces, provide resources, and foster connections.
    `,
    mission: `
      Our charity exists to make it easier for men to access mental health support. Through digital tools and real-life events, we aim to inspire confidence and growth.
    `,
    image: "/path-to-hero-image.jpg", // Replace with your actual image
    highlights: [
      {
        title: "Digital Resources",
        description: "Access a library of curated tools and guides.",
        image: "/highlight-digital.jpg"
      },
      {
        title: "Community Events",
        description: "Join safe spaces to connect and share.",
        image: "/highlight-events.jpg"
      },
      {
        title: "Expert Advice",
        description: "Learn from qualified professionals in mental health.",
        image: "/highlight-advice.jpg"
      }
    ]
  };

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      <Head>
        <title>MMH | About Us</title>
        <meta
          name="description"
          content="Learn more about our mental health charity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-mainbg">
        <NavbarNew />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative bg-mainbg text-white py-48"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Image
          src={content.image}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-40 z-0"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center px-8">
          <motion.h1 className="text-5xl font-bold mb-6 leading-tight">
            {content.title}
          </motion.h1>
          <motion.p className="text-lg max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-32 px-8 bg-gray-50 text-gray-800 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">{content.mission}</p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 px-8 bg-mainbg text-white relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {content.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-blue-700 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Join Us on the Journey</h3>
          <p className="mb-8">
            Take the first step towards supporting your mental health journey.
          </p>
          <a
            href="/resources"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200"
          >
            Explore Resources
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
