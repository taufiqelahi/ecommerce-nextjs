import Image from "next/image"
import Link from "next/link"
const LoginPage = () => {
    return (
        <div className=" flex items-center justify-center h-screen  bg-white bg-cover bg-[url('/assets/nuts.jpg')]">
            {/* <div>
                <Image src={'/assets/nuts.jpg'} alt="" width={0} height={0}

                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }} />
            </div> */}
            <div className="">
                <h1 className="mx-1 text-2xl mb-4">Login </h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500" id="username" type="text" placeholder="Username" />
                    </div>
                    <div >
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500" id="password" type="password" placeholder="******************" />

                    </div>
                    <div className="mb-8 text-right text-gray-700 ">
                        <p>Don't have an account?<Link href={"/signup"} className=" text-blue-500">Signup</Link> </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>

                </form>



            </div>
        </div>
    )
}

export default LoginPage