import { Button, Col, Row } from 'antd';
import React, { useEffect, useState, Fragment } from 'react';
import CardIcon from '../components/cardIcon.jsx';
import { fetchData } from '../services/helper.service.js';
import { BiDownArrowAlt, BiUpArrowAlt } from 'react-icons/bi';
import CircularBar from 'react-multicolor-circular-progress-bar';
import IconCardWithPercent from '../components/IconCardWithPercent.jsx';

import {BsCurrencyBitcoin} from 'react-icons/bs';
import {SiXrp,SiDeepnote} from 'react-icons/si';
import {BsTriangleHalf} from 'react-icons/bs';
import WalletSection from '../components/walletSection.jsx';
import Transaction from '../components/transaction.jsx';




const Home = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {

        const getData = async () => {
            const res = await fetchData();
            console.log(res)
            if (res.status == '200') {
                // setProjects(res.data)
            }
        }
        // getData();


    }, [])


    return (
        <Fragment>
            <div className='page'>
                <section className='bg-white container card-page'>
                    <Row>
                        <Col md={8} xs={24} className='border-end'>
                            <div>
                                <div className='mb-5'>
                                    <h6 className='fw-bold text-secondary'>BALANCE DETAILS</h6>
                                    <div className='price'>$ 2,128,002.00</div>
                                    <div className='sub-txt'>3.302343423324 &nbsp; BTC</div>
                                </div>
                                <Row>
                                    <Col span={12}>
                                        <CardIcon Icon={BiDownArrowAlt} price="3,2345.00" bg="#dff7ff" text="INCOME" />
                                    </Col>
                                    <Col span={12}>
                                        <CardIcon Icon={BiUpArrowAlt} price="1,45.00" bg="#dae1fc" text="Expense" />
                                    </Col>
                                </Row>

                                <Row className='mt-4'>
                                    <Col span={7}>
                                        <Button block className="btn-sky">RECEIVE</Button>

                                    </Col>
                                    <Col span={7} offset={5}>
                                        <Button block className="btn-prpl ">SEND</Button>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={16} xs={24}>

                            <Row className='my-3'>
                                <Col md={14} xs={24} className='text-center'>
                                    <CircularBar
                                        scale={2}
                                        
                                        angleTransition={[90, 180, 270]}
                                        colors= {['#ff0000', '#ffa500', '#ffff00', '#008000']}
                                        semiCircular={false}    
                                       
                                        title={'37%'}
                                        percent={99}
                                        // colors={['#50dfb1', '#f7b501','#5c76f8','#37c3fc','#50dfb1']}
                                        // stroke={{ color: 'red', width: 5 }}
                                    />
                                </Col>
                                <Col md={8} xs={24} className='my-3'>
                                    <IconCardWithPercent
                                    price="1,45.00" 
                                    bg="#fff2e3" 
                                    text="Bitcoin"
                                    Icon={BsCurrencyBitcoin}
                                    percent="12%"
                                    />
                                    <IconCardWithPercent
                                    price="1,45.00" 
                                    bg="#e8ebfe" 
                                    text="Bitcoin"
                                    Icon={SiDeepnote}
                                    percent="45%"

                                    />
                                    <IconCardWithPercent
                                    price="1,45.00" 
                                    bg="#dcf5fd" 
                                    text="Bitcoin"
                                    percent="76%"

                                    Icon={SiXrp}
                                    />
                                    <IconCardWithPercent
                                    price="1,45.00" 
                                    bg="#e5fbf3" 
                                    percent="47%"

                                    text="Bitcoin"
                                    Icon={BsTriangleHalf}
                                    />
                                    
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </section>
                <section className='container my-5'>
                    <WalletSection/>
                </section>
                <section className='container my-5'>
                    <Transaction/>
                </section>
            </div>
        </Fragment>
    );
}

export default Home;