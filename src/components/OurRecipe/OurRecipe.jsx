import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import SideBar from "../SideBar/SideBar";
import { IoMdClose } from "react-icons/io";


const OurRecipe = () => {

    const[recipes, setRecipes] = useState([]);

    const[wantToCook, setWantToCook] = useState([]);

    const[prepare, setPrepare] = useState([]);



    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    },[])

    const handleWantToCook = (recipe)=>{
        if(wantToCook.includes(recipe)){
            document.getElementById('toast').classList.remove('hidden')
        }
        else{
            const newRecipe = [...wantToCook, recipe];
            setWantToCook(newRecipe)
        }
        
    }

    const handlePrepare = id =>{
        
        const remaining = wantToCook.filter(item => item.recipe_id !==id);
        setWantToCook(remaining);

        const sentToPreparation = recipes.find(item => item.recipe_id === id);
        const allInPreparation = [...prepare, sentToPreparation];
        
        setPrepare(allInPreparation)

        

    }

    // console.log(prepare)

    

    const hideToast = (id)=>{
        document.getElementById(id).classList.add('hidden')
    }

    // console.log(wantToCook)

    return (
        <div className="pb-9">
            <div className="my-7 mt-12 text-center max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold">Our Recipe</h1>
                <p className="my-6">Find delightful recipes for every palate on our intuitive cooking site. From appetizers to desserts, culinary inspiration is just clicks away!.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-[60%]">
                    {
                        recipes.map(recipe => <Recipe 
                            key={recipe.recipe_id} 
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}></Recipe>)
                    }
                </div>

                <div className="w-full lg:w-[40%]">
                <div id="toast" className="toast toast-end toast-top hidden">
                <div className="alert bg-[#0BE58A]">
                    <span>Recipe Already Added.</span>
                    <button onClick={()=>hideToast('toast')}><IoMdClose /></button>
                </div>
                </div>
                    <SideBar wantToCook={wantToCook} handlePrepare={handlePrepare} prepare={prepare}></SideBar>
                </div>
            </div>
        </div>
    );
};

export default OurRecipe;