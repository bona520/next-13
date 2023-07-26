import Layouts from "@/layouts/Layouts"
import Link from "next/link"
import { useEffect } from "react"

const E404 = () => {
    useEffect(() => {
        document.title = "Page not found"
    }, [])
    return (
        <Layouts>
            <div className="w-screen flex justify-center">
                <div className="w-3/4 items-center justify-center">
                    <div className="flex flex-col w-full">
                        <h1>Page not fount</h1>
                        <Link href="/" className="p-3 bg-purple-700 text-white text-center">
                            Back to home
                        </Link>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default E404