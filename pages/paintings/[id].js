import Link from "next/link";
import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();

  return (
    <div>
      <div className="fullscreen">
        <div className="painting">
          <div className="img">
            <img key={router.query.image} src={router.query.image} />
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
    </div>
  );
};

export default Product;
