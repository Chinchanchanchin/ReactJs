import Link from 'next/link'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout ({chidren}) {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse pl-3" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 pl-5">
                <li class="nav-item active">
                <Link href="/"><a class="nav-link" href="#">Home</a></Link>
                </li>
                <li class="nav-item">
                <Link href="/about"><a class="nav-link" href="#">About us</a></Link>
                </li>
                <li class="nav-item">
                <Link href="/blog"><a class="nav-link" href="#">Blog</a></Link>
                </li>
            </ul>
            </div>
        </nav>
        <div>{chidren}</div>
        </div>

    )
}