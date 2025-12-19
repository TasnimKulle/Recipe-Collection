import React, { useState } from "react";

export const RecipeCollection = () => {
  const categories = ["all", "breakfast", "lunch", "dinner", "dessert"];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const recipes = [
    {
      id: 1,
      title: "Pancakes",
      category: "breakfast",
      time: "20 min",
      difficulty: "easy",
      image: "🥞",
      ingredients: ["flour", "eggs", "milk", "butter"],
    },
    {
      id: 2,
      title: "Pasta Carbonara",
     category: "lunch",
      time: "30 min",
      difficulty: "medium",
      image: "🍝",
      ingredients: ["pasta", "eggs", "cheese", "bacon"],
    },
    {
      id: 3,
      title: "Caesar Salad",
      category: "dinner",
      time: "15 min",
      difficulty: "easy",
      image: "🥗",
      ingredients: ["lettuce", "croutons", "parmesan", "chicken"],
    },
    {
      id: 4,
      title: "Chocolate Cake",
      category: "dessert",
      time: "45 min",
      difficulty: "medium",
      image: "🍰",
      ingredients: ["flour", "cocoa", "sugar", "eggs"],
    },
  ];
  const filteredRecipe=selectedCategory==='all'?recipes:recipes.filter(recipe=>recipe.category===selectedCategory)
  const getDifficulty = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-rose-50 py-8 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* header recipe */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 p-1">
            Recipe Collection
          </h1>
          <p className="text-gray-600">
            Find your favorite recipes and start cooking!
          </p>
        </header>
        {/* recipe categorys */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize cursor-pointer 
                            ${
                              selectedCategory === category
                                ? "bg-orange-500 text-white"
                                : "bg-white text-gray-600 hover:bg-orange-200"
                            }
                            `}
            >
              {category}
            </button>
          ))}
        </div>
        {/* recepe detial grid */}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecipe.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md overflow-hidden "
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl text-gray-700 font-semibold">
                    {recipe.title}
                  </h2>
                  <p className="text-5xl">{recipe.image}</p>
                </div>
                {/* recipe time  */}
                <div className="flex gap-4 mb-4 ">
                  <span className="text-gray-500 text-sm  flex items-center ">
                    ⏱️{recipe.time}
                  </span>
                  <span
                    className={`text-sm px-2 py-1 rounded-full 
                    ${getDifficulty(recipe.difficulty)}`}
                  >
                    {recipe.difficulty}
                  </span>
                </div>
                {/* ingredients */}
                <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-1">Ingredient</h3>
                    <div className="flex flex-wrap gap-2 ">
                        {
                            recipe.ingredients.map((ingredient,index)=>(
                                <span key={index}
                                className="px-4 py-1 text-sm bg-gray-100 text-gray-600 rounded-md "
                                >{ingredient}</span>
                            ))
                        }
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* empty recipe */}
        {
            filteredRecipe.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-600">No Recipes found catogory</p>
                </div>
            )
        }
      </div>
    </div>
  );
};
