'use clientdd'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
    const pathName = usePathname();
    // console.log("pathName:", pathName)
    return (
        <header className="bg-gray-900 flex justify-center items-center h-[60px]">
            <div className="w-3/4 flex items-center justify-between">
                <div className="logo">
                    <h4 className="text-white text-xl">Next App</h4>
                </div>
                <div className="menu">
                    <ul className="flex">
                        <li className="mr-3">
                            <Link href="/"
                                className={`${pathName === "/" ? "text-red-500" : "text-white"}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/blog"
                                className={`${pathName === "/blog" ? "text-red-500" : "text-white"}`}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/about"
                                className={`${pathName === "/about" ? "text-red-500" : "text-white"}`}
                            >
                                About
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/contact"
                                className={`${pathName === "/contact" ? "text-red-500" : "text-white"}`}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="product/product"
                                className={`${pathName === "/product" ? "text-red-500" : "text-white"}`}
                            >
                                Product
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header