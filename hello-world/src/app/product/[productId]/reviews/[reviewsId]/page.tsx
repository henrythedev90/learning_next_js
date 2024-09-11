import {notFound} from "next/navigation"
export default function ReviewsDetail({params}:{
    params :{
        productId: string,
        reviewsId: string
    }
}){
    if(parseInt(params.reviewsId) > 1000){
        notFound()
    }
    if(params.productId){
        console.log({params})
        return(
            <h1>
                Review {params.reviewsId} for product {params.productId}
            </h1>
        )
    }
}