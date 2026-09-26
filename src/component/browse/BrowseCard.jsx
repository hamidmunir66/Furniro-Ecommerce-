import { browsecard } from "../../data/data";

const BrowseCard = () => {
  return (
    <section className="grid grid-cols-3">
      {browsecard.map((item) => (
        <div key={item.heading}>
          <img src={item.img} alt={item.heading} className="w-20" />
          <h1>{item.heading}</h1>
        </div>
      ))}
    </section>
  );
};

export default BrowseCard;
