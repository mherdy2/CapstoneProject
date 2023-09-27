import { useNavigate } from "react-router-dom"


export default function Success() {
    const navigate = useNavigate()

    return (
        <>
            <div>
                <h4 className="title">Order has been placed,  see Email for the receipt!</h4>
                <button className="btnBack" onClick={() =>{navigate('/allProducts')}}>Keep Shopping</button>

            </div>
        </>
    )
}