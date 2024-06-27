export default function Shop() {
    return(
        <form className="form flex flex-col gap-5 rounded-md max-w-xl p-8 mx-auto bg-slate-8 bg-slate-800" >
            <input id='title' type="text" placeholder="Title" className="p-2 bg-slate-600 outline-none rounded-md"/>
            <input id="price" type="text" placeholder="price" className="p-2 bg-slate-600 outline-none rounded-md"/>
            <button type="submit" className="p-2 bg-slate-900 text-slate-100 rounded-md">Add Product</button>
        </form>
    )
}