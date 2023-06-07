import React from 'react'

export default function Join() {
    const jCardFunc = (img, title, text) => {
        return {img, title, text}
    }
    const jArr = [
        jCardFunc('king.png', "Trade With Royalty", "Easy and clssy Ui, trade with ease"),
        jCardFunc('trade.png', "Trade With Royalty", "Easy and clssy Ui, trade with ease"),
        jCardFunc('light.png', "Trade With Royalty", "Easy and clssy Ui, trade with ease"),
    ]
  return (
    <div className="join">
        <div className="container">
            <div className="j-head">
                <h2>Join Bybit Exchange</h2>
            </div>
            <div className="j-body">
                <div className="container">
                    <div className="row">
                        {jArr.map((i, index) => (
                            <div className="col-lg-4 col-6 p-2" key={index}>
                            <div className="j-card">
                                <div className="j-card-img">
                                    <img src={i.img} alt="Trade" className='img-fluid' />
                                    <div className="j-card-cap">
                                        <h4>{i.title}</h4>
                                        <span>{i.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
