import React from 'react'

const WalletCard = ({ Icon, bg, bgcard }) => {
    return (
        <div style={{
            height: 270,
            background: bgcard,
            borderRadius: 25,
            display:'flex',
            // width:170,
            flexDirection:'column'


        }}>
            <div className='p-4 flex-grow-1' >
                <div className='icon-box'
                    style={{ background: '#fff', width: 40 }}>
                    <Icon size={25} />
                </div>
                <h6 className='text-white mt-3'>Bitcoin</h6>
            </div>
            <div className='px-4 '>
                <h5 className='fw-bold text-white'>$3,423.00</h5>
                <p className='text-secondary fw-bold'>3.432424  BTC</p>
            </div>
        </div>
    )
}

export default WalletCard
