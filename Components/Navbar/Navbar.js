import Link from 'next/link';
import React from 'react';

import styles from './Navbar.module.css';

function Navbar(props) {
    return (
            <nav className={styles.navbar}>
                <Link href="/">
                    <a>Accueil</a>
                </Link>

                <Link href="/listes">
                    <a>Listes</a>
                </Link>

                <Link href="/isr">
                    <a>ISR</a>
                </Link>

                <Link href="/cours">
                    <a>BTC</a>
                </Link>

                <Link href="/add">
                    <a>Add (POST)</a>
                </Link>
            </nav>
    );
}

export default Navbar;