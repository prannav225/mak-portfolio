import { motion } from 'framer-motion';

interface WorkItemProps {
  image: string;
  quote: string;
  title: string;
  description: string;
  isReversed?: boolean;
}

const WorkItem = ({ image, quote, title, description, isReversed = false }: WorkItemProps) => {
  const imageQuoteVariants = {
    hidden: { 
      opacity: 0,
      x: isReversed ? 50 : -50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      x: isReversed ? -50 : 50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-16"
    >
      {isReversed ? (
        <>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center order-2 md:order-1 mt-16 md:mt-0"
          >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-700 mb-4 text-sm">{description}</p>
          </motion.div>
          <motion.div
            variants={imageQuoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative shadow-2xl order-1 md:order-2"
          >
            <img src={image} alt={title} className="w-full h-[350px] object-cover rounded-sm" />
            <div className="absolute -bottom-20 left-0 right-0 bg-[--color-blue] p-4 md:p-8 rounded-br-3xl rounded-sm">
              <p className="text-white font-family text-base md:text-lg leading-relaxed">{quote}</p>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            variants={imageQuoteVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative shadow-2xl"
          >
            <img src={image} alt={title} className="w-full h-[350px] object-cover rounded-sm" />
            <div className="absolute -bottom-20 left-0 right-0 bg-[--color-blue] p-4 md:p-8 rounded-bl-3xl rounded-sm">
              <p className="text-white font-family text-base md:text-lg leading-relaxed">{quote}</p>
            </div>
          </motion.div>
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center mt-16 md:mt-0"
          >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-gray-700 mb-4 text-sm">{description}</p>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default WorkItem;