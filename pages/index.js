import Link from "next/link";
import { PAINTINGS } from "../dummy-data/paintings";

const Index = () => {
  return (
    <div>
      <div className="container center">
        <div className="title">
          <div>The most</div>
          <div className="famous">famous</div>
          <div>paintings</div>
        </div>
        <div className="painting-row">
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
                  image: painting.image,
                },
              }}
            >
              <div className="card">
                <img
                  key={painting.images.imageTwo}
                  src={painting.images.imageTwo}
                  width={300}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
