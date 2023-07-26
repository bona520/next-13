import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-gray-900 flex justify-center items-center h-[60px]">
            <div className="w-3/4 flex items-center justify-between">
                <div className="logo">
                    <h4 className="text-white text-xl">Next App</h4>
                </div>
                <div className="menu">
                    <ul className="flex">
                        <li className="mr-3">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link href="/product/product">
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