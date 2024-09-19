import Link from "next/link"

export default function ProductList(){
    const secondHalf = [1,2,3,4,5,6]

       
    return(
        <>
        <Link href={'/'}>Home</Link>
        <h1>Product List</h1>
        {secondHalf.map((el) =>{
            return(
                <h2 key={el}><Link href={`/product/${el}`}>Product {el}</Link></h2>
            )
        })}
        </>
    )
}