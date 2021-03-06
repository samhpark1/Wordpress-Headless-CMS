import {useRef} from 'react';
import SiteInfo from "../../layout/SiteInfo";

const PostOption=(props)=>{
    const titleInputRef = useRef();
    const contentInputRef = useRef();
    const typeInputRef = useRef();

    function addNewHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;
        const enteredType = typeInputRef.current.value;
        const pageStatus = "publish";

        const postData = {
            title: enteredTitle,
            content: enteredContent,
            status: pageStatus,
        }

        fetch(SiteInfo.sitelink + "/wp-json/wp/v2/" + enteredType,
            {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Authorization': 'Basic ' + btoa(`${SiteInfo.username}:${SiteInfo.password}`),
                },
            }
        ).then(pages => pages.json())

        props.onFinish();
    }

    return(
        <div className='modal'>
            <section>
                <form onSubmit={addNewHandler}>
                    <ul>
                        <li>
                            <select name="type" ref={typeInputRef}>
                                <option value="posts">Post</option>
                                <option value="pages">Page</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor='title'>Title</label>
                            <input type='text' required id='title' ref={titleInputRef}/>
                        </li>
                        <li>
                            <label htmlFor='content'>Content</label>
                            <textarea id = 'content' required rows='5' ref={contentInputRef}/>
                        </li>
                        <li>
                            <button>Publish</button>
                        </li>
                    </ul>
                </form>
            </section>
        </div>

    )
}

export default PostOption;
