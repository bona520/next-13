import Layouts from '@/layouts/Layouts'
import React from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/components/loading'

const Product = () => {
    const router = useRouter()
    // console.log("router:", router)
    return (
        <Layouts>
            <div className="w-screen flex justify-center">
                <div className="w-3/4 items-center justify-center">
                    <h1>Product Page</h1>
                    <div className="mt-4">
                        <button className="bg-red-600 p-3 text-white" onClick={() => router.push('/about')}>
                            Go to About
                        </button>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default Product