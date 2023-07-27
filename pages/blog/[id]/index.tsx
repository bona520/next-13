import React from 'react'
import data from '../../api/blog.json'
import Layouts from '@/layouts/Layouts'
import { useRouter } from 'next/router'
import { Suspense } from 'react'


const BlogDetail = () => {
    const router = useRouter()
    const { id } = router.query

    console.log("id:", id)

    return (
        <Layouts>
            <Suspense fallback={<p>Loading feed...</p>}>
                <div className="w-screen flex justify-center">
                    <div className="w-3/4 items-center justify-center my-3">
                        <div className="flex flex-col w-full">
                            <h1>{data.name}</h1>
                        </div>
                        <div className="">
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                </div>
            </Suspense>
        </Layouts>
    )
}

export default BlogDetail