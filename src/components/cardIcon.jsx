import React, { Fragment } from 'react'
import { Col, Row } from 'antd';



const CardIcon = ({Icon,bg,text,price}) => {
    return (
        <Fragment>
            <Row align="middle">
                <Col>
                    <div className='icon-box'
                    style={{background:bg}}>
                        <Icon size={25} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h6 className='mb-0 fw-bold'>
                            ${price}
                        </h6>
                        <p className='mb-0 small-txt fw-bold text-secondary'>{text}</p>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}

export default CardIcon
