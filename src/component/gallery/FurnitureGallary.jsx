import { galleryImages } from "../../data/data";
import './furnitureGallary.css'

const FurnitureGallery = () => {
  return (
    <section className="overflow-hidden py-16">

      
      <div className="mb-10 text-center">
        <p className="text-lg font-medium text-gray-500">
          Share your setup with
        </p>

        <h2 className="text-4xl font-bold text-gray-800">
          #FuniroFurniture
        </h2>
      </div>

      
      <div className="gallery-grid">
        {galleryImages.map((item) => (
          <div
            key={item.id}
            className={item.className}
          >
            <img
              src={item.img}
              alt="Furniture interior"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default FurnitureGallery;