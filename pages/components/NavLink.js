import Link from 'next/link';

export default function NavLink({ name, className, ...props }) {
    return (
        <>
            <a
                {...props}
                className={`${className} text-slate-200 hover:text-white underline underline-offset-4 decoration-1 decoration-fuchsia-500 hover:decoration-2`}>
                {name}
            </a>
        </>
    );
}
