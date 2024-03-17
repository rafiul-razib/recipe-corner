
import Preparing from '../Preparing/Preparing';
import WantToCook from '../WantToCook/WantToCook';

const SideBar = ({wantToCook, handlePrepare, prepare}) => {
    // console.log(wantToCook)
    return (
        <div>
            <div className="preparing">
            <div className="overflow-x-auto">
                <h1>Want to Cook:{wantToCook.length}</h1>
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

            <div className="preparing">
            <div className="overflow-x-auto">
                <h1>Currently cooking:{prepare.length}</h1>
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
                    
                </table>
                </div>
            </div>
        </div>
    );
};

export default SideBar;