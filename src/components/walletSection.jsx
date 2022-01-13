import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import { BiDownArrowAlt } from 'react-icons/bi'
import WalletCard from './walletCard'
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { SiXrp, SiDeepnote } from 'react-icons/si';
import { BsTriangleHalf } from 'react-icons/bs';
import TradingFee from './tradingFee';
const WalletSection = () => {
    return (
        <Fragment>
            <Row justify='center'>
                <Col md={17} xs={24} className='my-3'>
                    <Row justify='space-between' style={{padding:'0 5rem'}}>
                        <Col>
                            <h6 className='text-secondary fw-bold'>WALLET</h6>
                        </Col>
                        <Col>
                            <h6 className='text-secondary '>More</h6>
                        </Col>
                    </Row>
                    <Row gutter={[20,20]} justify='center'>
                        <Col md={5} xs={12}>
                            <WalletCard bgcard={"#f8b61d"}
                                Icon={BsCurrencyBitcoin} bg="#dff7ff" />
                        </Col>
                        <Col md={5} xs={12}>
                            <WalletCard bgcard={"#4cacfd"}
                                Icon={SiXrp} bg="#dff7ff" />
                        </Col>
                        <Col md={5} xs={12}>
                            <WalletCard bgcard={"#4bd7f9"}
                                Icon={SiDeepnote} bg="#dff7ff" />
                        </Col>
                        <Col md={5} xs={12}>
                            <WalletCard bgcard={"#58e18a"}
                                Icon={BsTriangleHalf} bg="#dff7ff" />
                        </Col>
                    </Row>

                </Col>
                <Col md={7} xs={24} className='my-3'>

                    <Row >
                        <Col span={16} xs={24}>
                            <Row justify='space-between '>
                                <Col>
                                    <h6 className='text-secondary fw-bold'>
                                        TRADING FEE
                                    </h6>
                                </Col>
                                <Col>
                                    <h6 className='text-secondary '>More</h6>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={16}  xs={24}>
                            <TradingFee
                                price="0.069%"
                                bg="#dff7ff"
                                text="Maker" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={16}  xs={24}>
                            <TradingFee
                                price="0.069%"
                                bg="#dae1fc"
                                text="Maker" />
                        </Col>
                    </Row>
                </Col>
            </Row>


        </Fragment >
    )
}

export default WalletSection
