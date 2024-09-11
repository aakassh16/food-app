const Contact = () => {
    return (
        <div>
            <h1 className="text-center mt-8 text-3xl font-bold">Contact Us</h1>
            <div className="mt-8 flex items-center justify-center">
                <form className="flex flex-col space-y-4">
                    <input
                        className="p-2 border border-black w-64"
                        placeholder="Name"
                    />
                    <input
                        className="p-2 h-40 border border-black w-64"
                        placeholder="Message"
                    />
                    <button className="border border-black bg-slate-950 rounded-xl text-white p-2 m-14">
                        Submit
                    </button>
                </form>
            </div>


            <h3 className="text-center mt-8 text-lg"> Email - kunduakash423@gmail.com</h3>
            <h3 className="text-center mt-2 text-lg"> Mobile - 6295879889</h3>
        </div>

    );
}

export default Contact;