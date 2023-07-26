import Layouts from '@/layouts/Layouts'
import { useEffect } from 'react'

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Page"
    }, [])
    return (
        <Layouts>
            <div className="w-screen flex justify-center">
                <div className="w-3/4 items-center justify-center">
                    <h1>Contact Page</h1>
                </div>
            </div>
        </Layouts>
    )
}

export default Contact