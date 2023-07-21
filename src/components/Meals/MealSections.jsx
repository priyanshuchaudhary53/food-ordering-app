import MealItem from "./MealItem/MealItem";

const MealSections = (props) => {
  const { title, meals } = props;
  const mealList = meals.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <div className="mt-14 first:mt-8 md:mt-20 md:first:mt-12">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">
        {title}
      </h2>
      <ul>{mealList}</ul>
    </div>
  );
};

export default MealSections;
