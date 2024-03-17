

const WantToCook = (props) => {
    const{recipe_name, preparing_time, calories, recipe_id,} = props.item;
    const idx = props.index;
    const handlePrepare = props.handlePrepare;
    
    return (
        <tr>
            <th>{idx+1}</th> 
            <td>{recipe_name}</td> 
            <td>{preparing_time}</td> 
            <td>{calories}</td> 
            <td><button onClick={()=>handlePrepare(recipe_id)} className="btn btn-success rounded-full">Preparing</button></td> 
        </tr>
    );
};

export default WantToCook;