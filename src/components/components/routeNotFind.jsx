import React from 'react'
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap'

const RouteNotFind = () => {
    return (
        <div>
            <Card
               
            >
                <CardBody>
                    <CardTitle tag="h5">
                      Page not found
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                       url not defined by us
                    </CardSubtitle>
                </CardBody>
                <img
                    alt="Card cap"
                    src="https://picsum.photos/318/180"
                    width="100%"
                />
                <CardBody>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <CardLink href="/home" className='text-decoration-none'>
                       Go to Home
                    </CardLink>
                    <CardLink href="#" className='text-decoration-none'>
                        Go to Previuos Link
                    </CardLink>
                </CardBody>
            </Card>
        </div>
    )
}

export default RouteNotFind
