
// import './App.css';
import {Link} from "react-router-dom";


const AddNewStudent =()=>{
    return(
        <div>
      
       <div className="box">
           <div className="boxitems">
           
            {/* <Link id="new" to ="/New">Edit</Link> */}
            <form>
           <label for="fname">Name :</label>
               <input type="text"  placeholder="Updated Name" />
               </form>
           </div>
           <div className="boxitems">Age: <input type="text"  placeholder=" updated age"/>
           
          </div>
           <div className="boxitems">Course : <input type="text" placeholder="Updated Course" />
           </div>
           <div className="boxitems">Batch : <input type="text" placeholder="Updated Batch"/>
            </div>
            
       </div>
       <button id="cancel">Cancel</button>
        <button  id="update">Update</button> 
   </div>
    )
}

export default AddNewStudent;