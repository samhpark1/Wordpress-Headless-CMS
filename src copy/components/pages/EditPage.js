import PostOption from "./edits/PostOption";
import {Link} from "react-router-dom";
import DeleteOption from "./edits/DeleteOption";
import PutOption from "./edits/PutOption";
import Backdrop from "./Backdrop";
import {useState} from 'react';

const EditPage= ()=>{

    const [addOption, setAddOption] = useState(false);
    const [deletePageOption, setDeletePage] = useState(false);
    const [deletePostOption, setDeletePost] = useState(false);
    const [editPageOption, setEditPage] = useState(false);
    const [editPostOption, setEditPost] = useState(false);

    function addOpenHandler(){
        setAddOption(true);
    }
    function addCloseHandler(){
        setAddOption(false);
    }
    function deletePageOpenHandler(){
        setDeletePage(true);
    }
    function deletePageCloseHandler(){
        setDeletePage(false);
    }
    function deletePostOpenHandler(){
        setDeletePost(true);
    }
    function deletePostCloseHandler(){
        setDeletePost(false);
    }
    function editPageOpenHandler(){
        setEditPage(true);
    }
    function editPageCloseHandler(){
        setEditPage(false);
    }
    function editPostOpenHandler(){
        setEditPost(true);
    }
    function editPostCloseHandler(){
        setEditPost(false);
    }

    return(
        <div>
            <section>
                <h1>Make Changes to Your Website</h1>
                <p>Choose from different basic change options, for more complex changes feel free to contact us!</p>
            </section>
            <Link to='/contact'>Contact Us</Link>
            <section>
                <h3 onClick={addOpenHandler}>Add a New Page or Post</h3>
                {addOption && <PostOption onFinish={addCloseHandler}/>}
                {addOption && <Backdrop onFinish={addCloseHandler}/>}

                <h3 onClick={deletePageOpenHandler}>Delete a Page</h3>
                {deletePageOption && <DeleteOption onFinish={deletePageCloseHandler} type='pages'/>}
                {deletePageOption && <Backdrop onFinish={deletePageCloseHandler}/>}

                <h3 onClick={deletePostOpenHandler}>Delete a Post</h3>
                {deletePostOption && <DeleteOption onFinish={deletePostCloseHandler} type='posts'/>}
                {deletePostOption && <Backdrop onFinish={deletePostCloseHandler}/>}

                <h3 onClick={editPageOpenHandler}>Edit a Page</h3>
                {editPageOption && <PutOption onFinish={editPageCloseHandler} type='pages'/>}
                {editPageOption && <Backdrop  onFinish={editPageCloseHandler}/>}

                <h3 onClick={editPostOpenHandler}>Edit a Post</h3>
                {editPostOption && <PutOption onFinish={editPostCloseHandler} type='posts'/>}
                {editPostOption && <Backdrop  onFinish={editPostCloseHandler}/>}
            </section>
        </div>
    )
}

export default EditPage
