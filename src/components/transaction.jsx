import { Col, Row, Switch } from 'antd'
import React, { Fragment } from 'react'
import { BiUpArrowAlt } from 'react-icons/bi'
import { FaAddressCard } from 'react-icons/fa'
import CardIcon from './cardIcon'

const Transaction = () => {
    return (
        <Fragment>
            <Row justify='center' gutter={24}>
                <Col md={11} xs={24} className='my-3'>
                    <Row justify='space-between' >
                        <Col>
                            <h6 className='text-secondary fw-bold'>Transaction</h6>
                        </Col>
                        <Col>
                            <h6 className='text-secondary '>More</h6>
                        </Col>
                    </Row>

                    <Row justify='space-between' >
                        <Col>
                            <CardIcon Icon={BiUpArrowAlt} price="Sent USD" bg="#fff" text="23 Feb,2022" />
                        </Col>
                        <Col>
                            <div className='prple'>
                                -$1,232.00
                            </div>
                        </Col>
                    </Row>
                    <Row justify='space-between' className='my-4'>
                        <Col>
                            <CardIcon Icon={BiUpArrowAlt} price="Sent USD" bg="#fff" text="23 Feb,2022" />
                        </Col>
                        <Col>
                            <div className='prple'>
                                -$1,232.00
                            </div>
                        </Col>
                    </Row>
                    <Row justify='space-between' >
                        <Col>
                            <CardIcon Icon={BiUpArrowAlt} price="Sent USD" bg="#fff" text="23 Feb,2022" />
                        </Col>
                        <Col>
                            <div className='prple'>
                                -$1,232.00
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={10} xs={24} className='my-3'>
                    <Row  justify='space-between' gutter={12} className='mb-5'>
                        <Col >
                            <h6 className='text-secondary fw-bold'>Security</h6>
                        </Col>
                        <Col>
                            <h6 className='text-secondary '>More</h6>
                        </Col>
                    </Row>
                    <Row gutter={[20,20]} justify='center'>
                        <Col md={12} xs={24}>

                            <div className='sec-card'>
                                <Row justify='space-between' >
                                    <Col>
                                        <CardIcon Icon={FaAddressCard} price="Identity" bg="#fff" text="Disable" />
                                    </Col>
                                    <Col>
                                        <div className='prple'>
                                        <Switch size="small" defaultChecked={false} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>


                        </Col>
                        <Col md={12} xs={24}>
                        <div className='sec-card'>
                                <Row justify='space-between' >
                                    <Col>
                                        <CardIcon Icon={FaAddressCard} price="Identity" bg="#fff" text="Disable" />
                                    </Col>
                                    <Col>
                                        <div className='prple'>
                                        <Switch size="small" defaultChecked={false} />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Transaction
