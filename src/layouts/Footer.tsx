const Footer = () => {
    return (
        <footer className="bg-gray-800 p-3 w-screen flex justify-center items-center">
            <p className="mr-1">Next App</p>
            <span>
                &copy; {new Date().getFullYear()}
            </span>
        </footer>
    )
}

export default Footer