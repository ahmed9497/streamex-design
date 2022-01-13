import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'
import CardIcon from './cardIcon'

const IconCardWithPercent = ({Icon,bg,text,price,percent}) => {
    return (
        <Fragment>
            <Row justify='space-between'>
                <Col>
                <CardIcon Icon={Icon} price={price} bg={bg} text={text} />
                
                </Col>
                <Col>
                    <h6 className='mb-0 fw-bold'>{percent}</h6>
                    <p className='text-secondary fw-bold'><small>+2.5%</small></p>
                </Col>
            </Row>
        </Fragment>
    )
}

export default IconCardWithPercent
