import { useEffect, useState } from "react";

import { ThreeDots } from "react-loader-spinner";
import MealSections from "./MealSections";

function AvialableMeals() {
  const [meals, setMeals] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-2aaae-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong! Please refresh or try again later."
        );
      }

      const responseData = await response.json();

      const RECOMMENDED_MEALS = [];
      const BIRYANI_MEALS = [];
      const MAIN_COURSE = [];

      const sortData = (key, arr) => {
        const main = responseData[key];
        for (const id in main) {
          arr.push({
            id: id,
            name: main[id].name,
            description: main[id].description,
            price: main[id].price,
          });
        }
      };

      for (const key in responseData) {
        if (key === "main") {
          sortData("main", MAIN_COURSE);
        }

        if (key === "biryani") {
          sortData("biryani", BIRYANI_MEALS);
        }
        if (key === "recommended") {
          sortData("recommended", RECOMMENDED_MEALS);
        }
      }

      setMeals({
        main: MAIN_COURSE,
        recommended: RECOMMENDED_MEALS,
        biryani: BIRYANI_MEALS,
      });
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading || httpError) {
    return (
      <div className="flex justify-center items-center my-10">
        {isLoading && (
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#4ADE80"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName="test-classname"
            visible={true}
          />
        )}
        {httpError && (
          <p className="text-lg md:text-xl text-center tracking-tight font-medium text-gray-500">
            {httpError}
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="mb-20">
        <MealSections title="Recommended" meals={meals.recommended} />
        <MealSections title="Main Course" meals={meals.main} />
        <MealSections title="Biryani" meals={meals.biryani} />
      </div>
    </>
  );
}

export default AvialableMeals;
