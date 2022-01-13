import { Col, Row,Progress } from 'antd'
import React from 'react'
import { SiXrp, SiDeepnote } from 'react-icons/si';

const TradingFee = ({ price, text, bg }) => {
    return (
        <div className='trading-card'>
            <Row align="middle" className='mb-3'>
                <Col>
                    <div className='icon-box'
                        style={{ background: bg }}>
                        <SiXrp size={25} />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h6 className='mb-0 fw-bold' style={{fontSize:30}}>
                            ${price}
                        </h6>
                        <p className='mb-0 small-txt fw-bold text-secondary'>{text}</p>
                    </div>
                </Col>
            </Row>
            <Progress percent={30} showInfo={false} size="small" />
        </div>
    )
}

export default TradingFee
