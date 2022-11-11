import Link from "next/link";
import { PAINTINGS } from "../dummy-data/paintings";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../styles/frame-motion";

const Index = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div className="coded-by">
        Designed and coded by <br /> Iolanta Scheifel
      </div>
      <div className="container">
        <motion.div
          className="title"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div className="the-most">The most</div>
          <div className="famous">famous</div>
          <div className="paintings-text">paintings</div>
        </motion.div>
        <motion.div className="main-page-desc" variants={fadeInUp}>
          Enhance your knowledge of the most famous paintings. Click on each
          painting and get to know it better. You will find interesting facts
          and stories that you can tell on your next meeting with friends.
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
                  fact: painting.fact,
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
                  className={`size-${painting.width * 16}`}
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
