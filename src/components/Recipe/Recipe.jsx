import { GoClock } from "react-icons/go";
import { SlFire } from "react-icons/sl";


const Recipe = (props) => {
    const{recipe_img, recipe_id, recipe_name, short_description, preparing_time, calories, ingredients} = props.recipe;
    const slicedIngredients = ingredients.slice(0,3);
    const handleWantToCook = props.handleWantToCook;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-auto lg:h-52" src={recipe_img} alt="Shoes" /></figure>
            <div className="card-body p-5">
                <h2 className="card-title">{recipe_name}</h2>
                <p title={short_description} className="text-sm text-gray-500">{short_description.slice(0,50)}...</p>
                <div className="divider my-0"></div> 
                <div>
                    <h1>Ingredients : {ingredients.length}</h1>
                    <div className="divider my-1"></div> 
                    {
                        slicedIngredients.map((ingredient, idx) => <li key={idx} className="text-gray-500 text-sm">{ingredient}</li>)
                    }
                </div>
                <div className="divider my-0"></div> 
                <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                    <GoClock /> <span>{preparing_time} minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <SlFire /> <span>{calories}</span>
                    </div>
                    
                </div>
                <div className="card-actions justify-start mt-4">
                <button onClick={()=>handleWantToCook(props.recipe)} className="btn bg-[#0BE58A] border-0 rounded-full shadow-md">Want to cook</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipe;

