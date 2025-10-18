import "./styleN.css";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="navBar">
            <ul className="listaLinks">
                <li>
                    <Link href={""} className="links">teste</Link>
                </li>
                <li>
                    <Link href={""} className="links">teste</Link>
                </li>
                <li>
                    <Link href={""} className="links">teste</Link>
                </li>
            </ul>
        </nav>
    );
}
