"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBottom(){
const path = usePathname() || "/";
const links = [
{href: "/", label: "About"},
{href: "/about", label: "Education"},
{href: "/education", label: "Hobbies"},
{href: "/hobbies", label: "Contact"},
];


// Note: labels intentionally match persistent nav. Active detection uses startsWith.
return (
<div className="nav-bottom">
<nav className="nav-inner" aria-label="Primary">
{links.map(l => (
<Link key={l.href} href={l.href} className={`nav-link ${path === l.href ? 'nav-active' : ''}`}>
{l.label}
</Link>
))}
</nav>
</div>
);
}