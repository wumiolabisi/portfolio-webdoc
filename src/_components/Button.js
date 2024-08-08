import Link from 'next/link'

export default function Button({ href, label, title }) {
    return (
        <div className="my-4">
            <Link className="btn-primary"
                href={href}
                title={title}
                alt={title}
                replace={true}>
                {label}
            </Link>
        </div>
    )
}