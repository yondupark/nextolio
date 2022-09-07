import Link from 'next/link';

function Header() {
    return (
        <div className="header">
            <Link href="/">
                <a>
                    LOGO
                </a>
            </Link>
            <ul className='header__wrap'>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/test">
                        <a>Menu1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/test2">
                        <a>Menu2</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;