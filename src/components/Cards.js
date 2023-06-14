import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import {FcHome} from "react-icons/fc" 
import { NumericFormat } from 'react-number-format';
import ModalBtn from './ModalBtn';




function Cards({ address, city, state, zip_code, listing_price, bedrooms, bathrooms, square_feet, listing_date, image, property_type, operation_type, likes, Property_details, amenities }) {
    return (
        <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Text>
                <FcHome />  For {operation_type} <strong>{property_type}</strong>
                </Card.Text>
                <Card.Title> ${listing_price} </Card.Title>
                <Card.Text>
                <strong>{bathrooms}</strong> bath <strong>{bedrooms}</strong> bed <strong>{square_feet}</strong> sqft
                </Card.Text>
                <Card.Text>
                    {address},{city},  {state} {zip_code}
                </Card.Text>
                <ModalBtn/>
         
              

            </Card.Body>
        </Card>
    )
}
export default Cards;
