import { useRouter } from "next/router"
let ProductDetail = function () {
    const router = useRouter();
    const id = router.query.id;

    return <h1>Product detail about {id}</h1>
}

export default ProductDetail;
