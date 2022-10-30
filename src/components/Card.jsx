import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src, title, url}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/${url}`)
    }
  return (
    <>
        <Card style={{ width: '25rem' }} onClick={handleClick}>
            <Card.Img variant="top" src={src} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab molestias atque, eos, dolorum id facere, odit animi ex ullam ratione odio consectetur qui ipsa molestiae magnam praesentium et vero.
                </Card.Text>
            </Card.Body>
        </Card>
    </>
  )
}

export default Card