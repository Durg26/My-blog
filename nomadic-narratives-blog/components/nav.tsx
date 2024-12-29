import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-mint text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-cream transition-colors">
          Nomadic Narratives
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-cream transition-colors">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-cream transition-colors">About</Link></li>
          <li><Link href="/portfolio" className="text-white hover:text-cream transition-colors">Portfolio</Link></li>
        </ul>
      </div>
    </nav>
  )
}

