import useReviews from "../../../hooks/useReviews"

export default function Testimonials() {

    const {data = []} = useReviews()

    return (
        <div>
            {data.length}
        </div>
    )
}