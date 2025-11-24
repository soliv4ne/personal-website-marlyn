export default function Footer() {
return (
<footer className="w-full border-t mt-12 py-6">
<div className="container text-center text-sm opacity-70">
© {new Date().getFullYear()} Marlyn Amisola — Built with Next.js & Tailwind.
</div>
</footer>
);
}