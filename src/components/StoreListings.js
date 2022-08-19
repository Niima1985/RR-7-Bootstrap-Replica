import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function StoreListings() {
    return (
        <div style={{ margin: "auto" }}>
            <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
            <Container className="justify-content-center px-4">
            <Row  style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop: "40px"}} >
                <Col xs={6} md={4} className=" shadow-lg p-3 mb-3 bg-white rounded w-25 p-3 border bg-light align-top">
                        <h5 style={{ fontWeight: "bold", fontSize: "12px" }}> <Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" roundedCircle />
                        <h6> Sprouts Farmers Market</h6>
                        <p>Organic * Groceries</p>
                        <p>Delivery * Pickup</p></h5>
                </Col>
                <Col xs={6} md={4} className="shadow-lg p-3 mb-3 bg-white rounded w-25 p-3 border bg-light align-top">
                    <h5 style={{ fontWeight: "bold", fontSize:"12px" }}><Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB"}} src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"  roundedCircle />
                    <h6>Costco</h6>
                    <p> Groceries * Wholesale</p>
                    <p>Delivery</p></h5>
                </Col>
                <Col xs={6} md={4} className="shadow-lg p-3 mb-3 bg-white rounded w-25 p-3 border bg-light align-top">
                    <h5 style={{ fontWeight: "bold", fontSize:"12px" }}><Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/144x/www.instacart.com/assets/domains/warehouse/logo/252/9921fd46-e9b5-4a9c-8598-dea54d037e3d.png" roundedCircle />
                    <h6> Smith's</h6>
                    <p>Groceries * organic</p>        
                    <p>Delivery * Pickup</p></h5>
                </Col>
                </Row>
                <Row  style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop: "40px"}} >
                <Col xs={6} md={4} className=" shadow-lg p-3 mb-3 bg-white rounded w-25 p-3 border bg-light align-top">
                    <h5 style={{ fontWeight: "bold", fontSize:"12px"}}><Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/144x/www.instacart.com/assets/domains/warehouse/logo/352/ccc727b7-ba99-477d-8170-450fdb3307ef.jpg" roundedCircle />
                    <h6> Sam's Club</h6>
                    <p>Groceries * Organic * Bakery</p>
                    <p >Delivery</p></h5>
                </Col>
                <Col xs={6} md={4} className="shadow-lg p-3 mb-3 bg-white rounded w-25 p-3 border bg-light align-top">
                    <h5 style={{ fontWeight: "bold", fontSize:"12px" }}><Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png"  roundedCircle />
                    <h6> Albertsons</h6>
                    <p> Groceries * Bakery</p>
                    <p>Delivery * Pickup available</p></h5>
                </Col>
                <Col xs={6} md={4} className="shadow-lg p-3 mb-3 bg-white rounded w-25 p-3 border bg-light align-top">
                    <h5 style={{ fontWeight: "bold", fontSize:"12px" }}><Image style={{ height: "55px", width: "50px", border: "1px solid #E8E9EB" }} src="https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/1573/e04c8eaf-a180-4753-b651-8c4a1c81845c.png" roundedCircle />
                    <h6>Walgreens</h6> 
                    <p>Drugstore</p>        
                    <p>Delivery * Pickup </p></h5>
                </Col>
            </Row>
        </Container>
        </div >
    )
}