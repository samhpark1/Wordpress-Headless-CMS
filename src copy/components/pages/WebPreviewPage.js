import SiteInfo from "../layout/SiteInfo";
import React, { useEffect, useState} from "react";

const WebPreviewPage= ()=>{
    const [allPages, setPages] = useState([]);

    const fetchPages = () => {
        fetch(SiteInfo.sitelink + "/wp-json/wp/v2/pages")
            .then((pages) => pages.json())
            .then((json) => setPages(json));
    };

    useEffect(() => {
        fetchPages();
    }, []);

    return(
        <div>
            {allPages.map((page) => (
                <div key={page.id} className="page">
                    <h2 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
                    <p dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
                </div>

            ))}
        </div>
    )
}

export default WebPreviewPage
