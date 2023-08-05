import { useParams } from "react-router-dom"
import "./style.css"

const index = () => {

    const {id} = useParams()

    return (
        <div>Contact {id}</div>
    )
}

export default index