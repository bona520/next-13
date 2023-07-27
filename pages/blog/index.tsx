import Layouts from "@/layouts/Layouts"
import Link from "next/link"

const Page = () => {
    return (
        <Layouts>
            <div className="w-screen flex justify-center">
                <div className="w-3/4 items-center justify-center">
                    <div className="flex flex-col w-full">
                        <h1>This page blog</h1>
                    </div>
                    <div className="view mt-4 mb-5">
                        <Link href="/blog/1" className="bg-purple-700 p-3">
                            View Next App
                        </Link>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Page