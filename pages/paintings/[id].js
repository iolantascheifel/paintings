import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  stagger,
} from "../../styles/frame-motion";

const Product = () => {
  const router = useRouter();

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div className="fullscreen">
        <div className="painting">
          <motion.div
            className="img-background"
            variants={fadeInLeft}
            transition={{ delay: 0.2 }}
          >
            <img key={router.query.imageOne} src={router.query.imageOne} />
          </motion.div>
          <motion.div className="painting-details" variants={fadeInRight}>
            <motion.div className="inner" variants={stagger}>
              <Link href="/">
                <motion.div variants={fadeInUp}>
                  <a className="go-back">Back to all paintings</a>
                </motion.div>
              </Link>
              <motion.div className="name" variants={fadeInUp}>
                {router.query.name}
              </motion.div>
              <motion.div className="artist" variants={fadeInUp}>
                {router.query.artist}
              </motion.div>
              <motion.div className="location" variants={fadeInUp}>
                {router.query.location}
              </motion.div>
              <motion.div className="description" variants={fadeInUp}>
                {router.query.details}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
