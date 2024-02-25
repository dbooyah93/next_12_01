import { useRouter } from "next/router"
let ReviewHome = function () {
    const router = useRouter();
    const { id, reviewID } = router.query;
    return <h1> Review { reviewID } of product: { id }</h1>
}

export default ReviewHome;
