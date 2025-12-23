"use client";
import Link from "next/link";
import Footer from "./header";

export default function Header() {
  const navbar = [
    {
      name:"Home",
      path:"/"
    },
    {
      name:"Menu",
      path:"/menu"
    },
    {
      name:"About",
      path:"/about"
    },
    {
      name:"Contact",
      path:"/contact"
    }
  ]
  return (
    <>
    <header className="w-full bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍕</span>
          <h1 className="text-2xl font-bold text-red-600">
            Feasto
          </h1>
        </Link>

        {/* Navigation */}
        
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            {
              navbar.map(
                (item,index)=>{
                  return (
                    <Link key={index} href={item.path} className="hover:text-red-600">{item.name}</Link>
                  )
                }
              )
            }
          </nav>
        
        {/* <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <Link href="/menu" className="hover:text-red-600">Menu</Link>
          <Link href="/about" className="hover:text-red-600">About</Link>
          <Link href="/contact" className="hover:text-red-600">Contact</Link>
        </nav> */}

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition">
            Search
          </button>

          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Cart
          </button>
        </div>
      </div>
    </header>
    </>

  );
}
