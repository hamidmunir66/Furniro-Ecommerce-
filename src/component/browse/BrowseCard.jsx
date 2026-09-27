import { browsecard } from "../../data/data";

const BrowseCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center lg:px-28 md:px-20 px-8 ">
      {browsecard.map((item) => (
        <div key={item.heading} className=" flex flex-col items-center ">
          <img src={item.img} alt={item.heading} className={`w-max-96 cursor-pointer rounded-md `} />
          <h1 className="m-5 p-5 font-semibold cursor-pointer">{item.heading}</h1>
        </div>
      ))}
    </section>
  );
};

export default BrowseCard;
