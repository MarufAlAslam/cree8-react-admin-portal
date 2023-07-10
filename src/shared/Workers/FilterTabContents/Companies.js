const Companies = () => {
  const data = [
    {
      id: 1,
      name: "Cree8 Construction and Infrastructure ",
    },
    {
      id: 2,
      name: "Cree8 Construction and Infrastructure ",
    },
    {
      id: 3,
      name: "Cree8 Construction and Infrastructure ",
    },
    {
      id: 4,
      name: "Cree8 Construction and Infrastructure ",
    },
  ];

  return (
    <>
      <div className="mt-3">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-between items-center border-b border-[#E8E8E8] py-2 fs-12"
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Companies;
