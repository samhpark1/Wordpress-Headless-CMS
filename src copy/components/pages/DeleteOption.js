import { useEffect, useState, useRef } from "react";
import SiteInfo from '../../layout/SiteInfo'

const DeleteOption = (props) => {
    const [allPages, setPages] = useState([]);
    const choiceInputRef = useRef();

    const fetchPages = () => {
        fetch(SiteInfo.sitelink + "/wp-json/wp/v2/" + props.type)
            .then((pages) => pages.json())
            .then((json) => setPages(json));
    };

    function changeHandler(event){
        event.preventDefault()
        const enteredChoice = choiceInputRef.current.value;

        fetch(SiteInfo.sitelink + "/wp-json/wp/v2/" + props.type + "/" + enteredChoice,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json; charset=UTF-8',
                    'Authorization': 'Basic ' + btoa(`${SiteInfo.username}:${SiteInfo.password}`),
                },
            }
        )
    }


    useEffect(() => {
        fetchPages();
    });

    return (
        <div>
            <h2>Delete {props.type}</h2>
            <section>
                <form onSubmit={changeHandler}>
                    <select name='choice' ref={choiceInputRef}>
                        {allPages.map((page) => (
                            <option key={page.id} value={page.id}>{page.title.rendered}</option>
                        ))}
                    </select>
                    <button>Confirm</button>
                </form>
            </section>
        </div>
    );
};

export default DeleteOption;