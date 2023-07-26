import { useEffect } from "react"
import Layouts from "@/layouts/Layouts"

const About = () => {
    useEffect(() => {
        document.title = "About Page"
    }, [])
    return (
        <Layouts>
            <div className="w-screen flex justify-center">
                <div className="w-3/4 items-center justify-center">
                    <h1>About Page</h1>
                </div>
            </div>
        </Layouts>
    )
}

export default About