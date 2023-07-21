import MealSections from "./MealSections";

const RECOMMENDED_MEALS = [
  {
    id: "b1",
    name: "Chicken Biryani",
    description:
      "Medium Spicy | With Bone | Chicken biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Served with Gravy and onions",
    price: 199.0,
  },
  {
    id: "r1",
    name: "Chicken Shawarma Roll",
    description:
      "Medium Spicy | Scrumptious chicken shawarma with a generous stuffing of juicy chicken pieces and onion. Served with mayonniese and mint sauce. item can't be provide extra sauce and dips)",
    price: 149.0,
  },
];

const BIRYANI_MEALS = [
  {
    id: "b1",
    name: "Chicken Biryani",
    description:
      "Medium Spicy | With Bone | Chicken biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Served with Gravy and onions",
    price: 199.0,
  },
  {
    id: "b2",
    name: "Mutton Biryani",
    description:
      "Chicken Richly flavored aromatic rice layered with marinated mutton pieces in a delicate blend of whole spices. Served with Gravy and onions.",
    price: 249.0,
  },
];

const MAIN_COURSE = [
  {
    id: "m1",
    name: "Chicken Masala",
    description:
      "A delightfully flavor-packed dish of mouthwatering chicken masala - perfect to satisfy your cravings",
    price: 230.0,
  },
  {
    id: "m2",
    name: "Mutton Handi",
    description:
      "Comes with SALAD | Marinated mutton pieces sauteed with Indian style masala paste and finished inside a handi",
    price: 600.0,
  },
  {
    id: "m3",
    name: "Butter Chicken",
    description:
      "AThe all time favorite delicious butter chicken with juicy chicken chunks in a creamy gravy",
    price: 199.0,
  },
];

function AvialableMeals() {
  return (
    <>
      <MealSections title="Recommended" meals={RECOMMENDED_MEALS} />
      <MealSections title="Main Course" meals={MAIN_COURSE} />
      <MealSections title="Biryani" meals={BIRYANI_MEALS} />
    </>
  );
}

export default AvialableMeals;
