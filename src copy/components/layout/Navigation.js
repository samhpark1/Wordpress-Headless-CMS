import {Link} from 'react-router-dom'

const Navigation = ()=>{
    return(
        <header>
                <nav>
                    <ul>
                        <div>
                            <Link to='/'>Zyprr Logo</Link>
                        </div>
                        <li>
                            <Link to='/'>Home Button</Link>
                        </li>
                        <li>
                            <Link to='/edit'>Edit Page</Link>
                        </li>
                        <li>
                            <Link to='/web-preview'>Website Preview Page</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Navigation;