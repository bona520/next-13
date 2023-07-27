import Layouts from "@/layouts/Layouts";
// import Template from "@/layouts/Template";

export default function Page() {
    return (
        <Layouts>
            <div className="w-screen flex justify-center">
                <div className="w-3/4 items-center justify-center">
                    <h1>Next App</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error perspiciatis eveniet expedita consectetur autem natus a maiores minus eaque! Dolore, fugit amet optio rerum facere quod quos nisi mollitia?
                    </p>
                </div>
            </div>
            <div>

            </div>
            {/* <Template key={routeParam}>{children}</Template> */}
        </Layouts>
    )
}