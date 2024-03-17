

const WantToCook = (props) => {
    const{recipe_name, preparing_time, calories, recipe_id,} = props.item;
    const idx = props.index;
    const handlePrepare = props.handlePrepare;
    
    return (
        <tr>
            <th>{idx+1}</th> 
            <td>{recipe_name}</td> 
            <td>{preparing_time} minutes</td> 
            <td>{calories} calories</td> 
            <td><button onClick={()=>handlePrepare(recipe_id)} className="btn bg-[#0BE58A] border-0 rounded-full shadow-md">Preparing</button></td> 
        </tr>
    );
};

export default WantToCook;