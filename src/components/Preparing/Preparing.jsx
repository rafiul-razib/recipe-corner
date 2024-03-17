

const Preparing = (props) => {
    const{recipe_name, preparing_time, calories, recipe_id,} = props.item;
    const idx = props.index;
    return (
        <tr>
            <th>{idx+1}</th> 
            <td>{recipe_name}</td> 
            <td>{preparing_time}</td> 
            <td>{calories}</td> 
        </tr>
    );
};

export default Preparing;