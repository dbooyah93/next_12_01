import Link from "next/link";

let product = function ({ productID = 100} ) {
    return (
        <>
            <Link href='/'>
                Home
            </Link>
            <p>
                <Link href={`/product/'${productID}`}>
                    <a>Product {productID}</a>
                </Link>
            </p>
            <p>
                <Link href="/product/2">
                    Product 2
                </Link>
            </p>
            <p>
                <Link href="/product/3">
                    Product 3
                </Link>
            </p>
        </>
    )
}

export default product;