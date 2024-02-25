import Link from "next/link";

let product = function ({ productID = 100} ) {
    let links = []
    for ( let i = 0; i <= productID; i++ ) {
        links.push(
            <>
                <Link href={`product/${i}`}>
                    <a>
                        Product: {i}
                    </a>
                </Link>
                <br/>
            </>
        );
    }

    return (
        <>
            {links}
            <Link href='/'>
                Home
            </Link>
            <p>
                <Link href={`/product/'${productID}`}>
                    <a>Product {productID}</a>
                </Link>
            </p>
            <p>
                <Link href="/product/2" replace>
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