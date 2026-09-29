const Footer = () => {
  return (
    <>
    <div className="w-11/12  overflow-hidden bg-gray-300 h-1 m-auto mb-3">

    </div>
      <footer className="grid grid-cols-4 gap-3 m-4 p-2 lg:p-8 md:p-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Furniro</h1>
          <p className="text-[#DCDCDC]">H66 St3 Icchra </p>
        </div>
        <div>
            <ul className="flex flex-col gap-7">
                <li className="text-[#DCDCDC]">Links</li>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
            </ul>
        </div>
        <div>
            <ul className="flex flex-col gap-7">
                <li className="text-[#DCDCDC]">Help</li>
                <li>Payment Options</li>
                <li>Return</li>
                <li>Privacy Policies</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3">
            <h4 className="text-[#DCDCDC]">NewsLetter</h4>
            <div >
                <input type="text" placeholder="Enter your email address" className=" border-b-2 focus:border-b-2  border-b-black"/>
                <button className="ml-2">Subscribe</button>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
