import { useEffect, useState, useRef } from "react";
import SiteInfo from '../../layout/SiteInfo'

const PutOption = (props) => {
    const [allPages, setPages] = useState([]);
    const choiceInputRef = useRef();
    const titleInputRef = useRef();
    const contentInputRef = useRef();

    const fetchPages = () => {
        fetch(SiteInfo.sitelink + "/wp-json/wp/v2/" + props.type)
            .then((pages) => pages.json())
            .then((json) => setPages(json));
    };

    useEffect(() => {
        fetchPages();
    });

    function changeHandler(event){
        event.preventDefault()
        const enteredChoice = choiceInputRef.current.value;
        const enteredTitle = titleInputRef.current.value;
        const enteredContent = contentInputRef.current.value;

        const postData = {
            title: enteredTitle,
            content: enteredContent,
        }

        fetch(SiteInfo.sitelink + "/wp-json/wp/v2/" + props.type + "/" + enteredChoice,
            {
                method: 'PUT',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Authorization': 'Basic ' + btoa(`${SiteInfo.username}:${SiteInfo.password}`),
                },
            }
        )
    }




    return (
        <div>
            <h2>Edit {props.type}</h2>
            <section>
                <form onSubmit={changeHandler}>
                    <ul>
                        <li>
                            <select name='choice' ref={choiceInputRef}>
                            {allPages.map((page) => (
                                <option key={page.id} value={page.id}>{page.title.rendered}</option>
                            ))}
                            </select>
                        </li>
                        <li>
                            <label htmlFor='title'>Title</label>
                            <input type='text' id='title' ref={titleInputRef}/>
                        </li>
                        <li>
                            <label htmlFor='content'>Content</label>
                            <textarea id = 'content' rows='5' ref={contentInputRef}/>
                        </li>
                        <li>
                            <button>Confirm</button>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    );
};

export default PutOption;