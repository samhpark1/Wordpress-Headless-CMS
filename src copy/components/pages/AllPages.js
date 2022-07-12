import SiteInfo from "../layout/SiteInfo";
import { useEffect, useState } from "react";
import classes from "./AllPages.modules.css"
const AllPages = () => {
  const [allPages, setPages] = useState([]);

  const fetchPages = () => {
    fetch(SiteInfo.sitelink + "/wp-json/wp/v2/pages")
      .then((pages) => pages.json())
      .then((json) => setPages(json));
  };

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <div>
      <section>
        <h1>All Pages</h1>
        <p1>All the pages from your website.</p1>
      </section>
      <hr />
      <section>
        <table class="center">
          <thead>
            <tr>
              <th>Page Name</th>
              <th>Page ID</th>
            </tr>
          </thead>
          <tbody>
            {allPages.map((page) => (
              <tr key={page.id}>
                <td>{page.title.rendered}</td>
                <td>{page.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AllPages;
