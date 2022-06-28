import PostOption from "./edits/PostOption";
import {Link} from "react-router-dom";
import DeleteOption from "./edits/DeleteOption";
import PutOption from "./edits/PutOption";

const EditPage= ()=>{
    return(
        <div>
            <section>
                <h1>Make Changes to Your Website</h1>
                <p>Choose from different basic change options, for more complex changes feel free to contact us!</p>
            </section>
            <Link to='/contact'>Contact Us</Link>
            <section>
                <PostOption />
                <DeleteOption type='pages'/>
                <DeleteOption type='posts'/>
                <PutOption type='pages'/>
                <PutOption type='posts'/>
            </section>
        </div>
    )
}

export default EditPage
