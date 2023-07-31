const PageHeading = ({ title }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">
        {title}
      </h1>
      <hr className="" />
    </div>
  );
};

export default PageHeading;
