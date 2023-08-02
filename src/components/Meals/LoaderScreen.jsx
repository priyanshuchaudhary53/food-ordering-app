export const LoaderScreen = () => {
  return (
    <div className="w-full">
      <div className="w-[200px] h-[55px] bg-gray-100 rounded-md"></div>
      <div className="flex mt-4 gap-4">
        <div className="bg-gray-100 rounded-md w-full h-[180px]"></div>
        <div className="bg-gray-100 rounded-md w-full h-[180px] hidden md:block"></div>
        <div className="bg-gray-100 rounded-md w-full h-[180px] hidden md:block"></div>
      </div>

      <div className="flex flex-wrap mt-[80px] md:flex-nowrap gap-4">
        <div className="w-full md:w-[80%]">
          <div className="w-[200px] h-[55px] bg-gray-100 rounded-md"></div>
          <div className="w-full h-[90px] bg-gray-100 mt-3 rounded-md"></div>
        </div>
        <div className="w-full md:w-[20%] flex flex-col items-start md:items-center md:justify-center">
          <div className="w-[125px] h-[40px] bg-gray-100 rounded-md"></div>
          <div className="w-[125px] h-[40px] mt-3 bg-gray-100 rounded-full"></div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 mt-10">
        <div className="w-full md:w-[80%]">
          <div className="w-[200px] h-[55px] bg-gray-100 rounded-md"></div>
          <div className="w-full h-[90px] bg-gray-100 mt-3 rounded-md"></div>
        </div>
        <div className="w-full md:w-[20%] flex flex-col items-start md:items-center justify-center">
          <div className="w-[125px] h-[40px] bg-gray-100 rounded-md"></div>
          <div className="w-[125px] h-[40px] mt-3 bg-gray-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
