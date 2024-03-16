

const Recipe = ({recipe}) => {
    const{recipe_img, recipe_id, recipe_name, short_description, preparing_time, calories, ingredients} = recipe
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-52" src={recipe_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Recipe;