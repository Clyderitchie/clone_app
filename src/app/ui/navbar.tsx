export default function NavBar() {
    return (
        <div className="mt-3 pl-2 min-w-full min-h-full flex items-center justify-between shadow-lg">
            <h1 className="text-3xl">
                Clone Site
            </h1>
            <div className="text-xl pr-3">
            <button className="mx-3">
                Home
            </button>
            <button className="mx-3">
                Profile
            </button>
            <button className="mx-3">
                Settings
            </button>
            </div>
        </div>
    )
}