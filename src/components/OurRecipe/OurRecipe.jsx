import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import SideBar from "../SideBar/SideBar";


const OurRecipe = () => {

    const[recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[])

    // console.log(recipes)

    return (
        <div>
            <div className="my-7 mt-12 text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold">Our Recipe</h1>
                <p className="my-6">Find delightful recipes for every palate on our intuitive cooking site. From appetizers to desserts, culinary inspiration is just clicks away!.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-[60%]">
                    {
                        recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>)
                    }
                </div>

                <div className="w-full lg:w-[40%]">
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default OurRecipe;