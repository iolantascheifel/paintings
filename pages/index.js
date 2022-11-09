import Link from "next/link";
import { PAINTINGS } from "../dummy-data/paintings";
import { motion } from "framer-motion";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div className="container center">
        <motion.div
          className="title"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div>The most</div>
          <div className="famous">famous</div>
          <div>paintings</div>
        </motion.div>
        <motion.div variants={stagger} className="painting-row">
          {PAINTINGS.map((painting) => (
            <Link
              key={painting.id}
              as={`/paintings/${painting.id}`}
              href={{
                pathname: "/paintings/[id]",
                query: {
                  id: painting.id,
                  name: painting.name,
                  artist: painting.artist,
                  details: painting.details,
                  location: painting.location,
                  imageOne: painting.images.imageOne,
                  imageTwo: painting.images.imageTwo,
                },
              }}
            >
              <motion.div
                className="card"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  key={painting.images.imageTwo}
                  src={painting.images.imageTwo}
                  width={300}
                />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
