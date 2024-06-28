import { revalidateTag } from "next/cache";
import { getData } from "../lib/getData";
interface Product {
    id: number;
    title: string;
    price: string;
}
export default async function Shop() {
const products: Product[] = await getData(`http://localhost:8000/products`);
const addProduct = async (e: FormData)=> {
    'use server'
    const title= e.get('title');
    const price= e.get('price');
    const newProduct = { title, price}
    await fetch(`http://localhost:8000/products`,{
        method: 'POST',
        headers: {
            "Content-type" : 'application/json'
        },
        body: JSON.stringify(newProduct)
    }) 
    revalidateTag('products');
}
    return(
        <main>
            <form action={addProduct} className="form flex flex-col gap-5 rounded-md max-w-xl p-8 mx-auto bg-slate-8 bg-slate-800" >
                <input id='title' name="title" type="text" placeholder="Title" className="p-2 bg-slate-600 outline-none rounded-md"/>
                <input id="price" name="price" type="text" placeholder="price" className="p-2 bg-slate-600 outline-none rounded-md"/>
                <button type="submit" className="p-2 bg-slate-900 text-slate-100 rounded-md">Add Product</button>
            </form>
            <div className="Product mx-auto max-w-xl my-10 gap-5">
                <ul className="list__item flex flex-row gap-5 flex-wrap justify-center">
                    {products.map((product)=>
                        (
                            <li key={product.id} className="item flex justify-center flex-col flex-center gap-5 flex-wrap p-5 bg-slate-800 rounded-md text-center">
                                <p className="product__title "> {`${product.title}`}</p>
                                <p className="product__price">{`${product.price}`}</p>                                
                            </li>
                        )
                    )}
                </ul>

            </div>
        </main>
    )
}