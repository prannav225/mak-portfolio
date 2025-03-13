import { motion } from 'framer-motion';
import WorkItem from './WorkItem';

const Works = () => {
  const workItems = [
    {
      image: "/mak-works2.jpg",
      title: "Public Service & Political Leadership",
      description: "Strategizing progressive governance, addressing key concerns in Karnataka with a specific focus on Bengaluru Central and beyond, and strengthening Congress' grassroots presence in every state that the Indian National Congress has assigned him to.",
      quote: "I try my best to make sure that the local constituents have a real say in government decisions. By listening to everyday people, we can create policies that truly benefit all Indians."
    },
    {
      image: "mak-works1.jpg",
      title: "Education & Youth Empowerment",
      description: "Championing education reform in Karnataka, supporting CBSE and independent schools, and providing scholarships for underprivileged students.",
      quote: "Quality education is the key to a better future for our country. I support our schools and work to give every student the chance to succeed.",
      isReversed: true
    },
    {
      image: "mak-works3.jpg",
      title: "Civic Development & Infrastructure",
      description: "Pushing for better roads, traffic management, suburban rail, and public services in Bengaluru Central. Advocating for Outer Ring Road completion and a more efficient urban transit system.",
      quote: "Better roads, efficient transport, and improved public services are essential for Bengaluru and all our cities. I push for practical solutions that make daily life easier for everyone."
    },
    {
      image: "mak-works4.png",
      title: "Economic Growth & Employment Opportunities",
      description: "Promoting job creation and startup support in Bengaluru's growing tech and business hubs while ensuring economic policies favor young professionals and small businesses.",
      quote: "Growing our economy means creating jobs and supporting small businesses. I am committed to nudging the administration to foster an environment where new ideas can flourish and work opportunities are available to all.",
      isReversed: true
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-4 md:px-20 lg:px-60 py-10 md:py-12 my-12 md:my-24"
    >
      <div className="space-y-20 md:space-y-40">
        {workItems.map((item, index) => (
          <WorkItem key={index} {...item} />
        ))}
      </div>
    </motion.section>
  );
};

export default Works;