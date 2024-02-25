import React from "react";

const Main = () => {
  const place = [
    {
      image:
        "https://www.thomascook.in/blog/wp-content/uploads/2018/04/Arambol_beach_2009-e1523596794811.jpg",
      text: "Goa",
    },
    {
      image:
        "https://www.thomascook.in/blog/wp-content/uploads/2018/04/rajasthan-city-guide-e1523596726967.jpg",
      text: "Rajasthan",
    },
    {
      image:
        "https://www.thomascook.in/blog/wp-content/uploads/2018/04/wonders-of-ladakh-1-e1523597251360.jpg",
      text: "Ladakh",
    },
    {
      image:
        "https://c.myholidays.com/blog/blog/content/images/2020/11/Kashmir.webp",
      text: "Kashmir",
    },
    {
      image:
        "https://c.myholidays.com/blog/blog/content/images/2020/11/Kerala.webp",
      text: "Kerala",
    },
    {
      image:
        "https://c.myholidays.com/blog/blog/content/images/2021/04/Manali.webp",
      text: "Manali",
    },
    {
      image:
        "https://c.myholidays.com/blog/blog/content/images/2021/04/Rishikesh.webp",
      text: "Rishikesh",
    },
  ];

  const carddata = [
    {
      icons: "",
      text2: "Ship Cruises",
      text3: "150 Properties",
    },
    {
      icons: "",
      text2: "Food Tours",
      text3: "150 Properties",
    },
    {
      icons: "",
      text2: "Summer Rest",
      text3: "150 Properties",
    },
    {
      icons: "",
      text2: "Mountains Tour",
      text3: "150 Properties",
    },
  ];

  return (
    <div className="h-60 bg-[#f4f4f8]">
      <div className="text-4xl  text-center mb-5 text-black  px-6 py-3">
        Popular Destinations
      </div>
      <div className="px-6 py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {place.map((data) => (
          <div className="flex-col">
            <img src={data.image} className="h-64 w-96 object-cover" />
            <div className="py-3 px-1.5 text-center">{data.text}</div>
          </div>
        ))}
      </div>

      <div className="text-4xl text-center mb-5 text-black px-6 py-3 mt-8">
        Start Your Vacation with Lots of Services!
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 py-3">
        {carddata.map((carddetail) => (
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="flex justify-center items-center my-5">
              <img src={carddetail.icons} alt="" className="h-20 w-28" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 py-2.5">
              <p className="text-xl font-semibold">{carddetail.text2}</p>
              <p>{carddetail.text3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
