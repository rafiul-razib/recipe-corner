
import Preparing from '../Preparing/Preparing';
import WantToCook from '../WantToCook/WantToCook';

const SideBar = ({wantToCook, handlePrepare, prepare}) => {
    
    // const[time, setTime] = useState(0);

    let totalTime= 0;
    let totalCalories = 0

    const CalculateTotal = ()=>{
       
        for(const item of prepare){
            totalTime = totalTime + item.preparing_time;
            totalCalories = totalCalories + item.calories;
        }

        return(totalCalories, totalTime)
    }

    CalculateTotal();
    return (
        <div className='rounded-2xl p-4 shadow-lg'>
            <div className="want-to-cook">
            <div className="overflow-x-auto">
                <h1 className='text-center text-xl font-bold'>Want to Cook : {wantToCook.length}</h1>
                <div className="divider my-1"></div> 
                <table className="table table-xs">
                    <thead>
                    <tr>
                        <th></th> 
                        <th>Name</th> 
                        <th>Time</th> 
                        <th>Calories</th> 
                        <th></th> 
                    </tr>
                    </thead> 
                    <tbody>

                        {
                           wantToCook.map((item, idx) => <WantToCook key ={idx} index={idx} item={item} handlePrepare={handlePrepare} ></WantToCook>) 
                        }
                    
                    </tbody> 
                    
                </table>
                </div>
            </div>

            <div className="preparing mt-9">
            <div className="overflow-x-auto">
                <h1 className='text-center text-xl font-bold'>Currently cooking : {prepare.length}</h1>
                <div className="divider my-1"></div> 
                <table className="table table-xs">
                    <thead>
                    <tr>
                        <th></th> 
                        <th>Name</th> 
                        <th>Time</th> 
                        <th>Calories</th> 
                         
                    </tr>
                    </thead> 
                    <tbody>

                        {
                           prepare.map((item, idx) => <Preparing key ={idx} index={idx} item={item}></Preparing>) 
                        }
                    
                    </tbody> 

                    <tfoot>
                        <tr>
                            <th></th> 
                            <th></th> 
                            <th>Total Time = {totalTime} </th> 
                            <th>Total Calories = {totalCalories}</th> 
                           
                        </tr>
                    </tfoot>
                    
                </table>
                </div>
            </div>
        </div>
    );
};

export default SideBar;