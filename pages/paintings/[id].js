import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Product = () => {
  const router = useRouter();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="fullscreen">
        <div className="painting">
          <div className="img">
            <motion.img
              key={router.query.imageOne}
              src={router.query.imageOne}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
          </div>
          <div className="painting-details">
            <div className="inner">
              <Link href="/">
                <div>
                  <a className="go-back">Back to all paintings</a>
                </div>
              </Link>
              <h1>{router.query.name}</h1>
              <p>{router.query.details}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
