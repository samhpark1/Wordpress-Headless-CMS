import {useRef} from 'react';
import {Link} from "react-router-dom";

const EditPage= ()=>{
    const titleInputRef = useRef();
    const contentInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        // const enteredTitle = titleInputRef.current.value;
        // const enteredContent = contentInputRef.current.value;
        // const pageStatus = "publish";

        // const postData = {
        //     title: enteredTitle,
        //     content: enteredContent,
        //     status: pageStatus,
        // }



        // fetch('http://localhost:8888/wordpress/wp-json/wp/v2/pages/',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify(postData),
        //         headers: {
        //             'Content-Type' : 'application/json; charset=UTF-8',
        //             'Authorization': 'Basic ' + btoa(`${'samhpark1@gmail.com'}:${'Whatdoesthefoxsay'}`),
        //         },
        //     }
        // ).then(pages => pages.json()).then(json => console.log(json));



        fetch('http://localhost:8888/wordpress/wp-json/wp/v2/'+'pages',).then(pages => pages.json())
            .then(json => json.map((page) => {
                console.log(page.id);
                console.log(page.title.rendered);
                return null;
            }))
    }

    return(
        <div>
            <section>
                <h1>Make Changes to Your Website</h1>
                <p1>Choose from different basic change options, for more complex changes feel free to contact us!</p1>
            </section>
            <Link to='/contact'>
                <button>Contact Us</button>
            </Link>
            <section>
                <form onSubmit={submitHandler}>
                    <h2>Add a Page or Post to your website</h2>
                    <ul>
                        <li>
                            <label htmlFor='type'>What would you like to add?</label>
                            <input type="radio" id="type" value="Post"/>
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
                            <button>Post Page</button>
                        </li>
                    </ul>




                </form>
            </section>
        </div>
    )
}

export default EditPage