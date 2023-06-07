import React from 'react'

export default function Footer() {
    const dum = [1,2,3,4]
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-12">
                    <h1>Logo Here</h1>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="row">
                        {dum.map((i, index) => (
                            <div className="col-6 col-lg-3">
                                <div className="box">
                                    <div className="box-head text-pr text-bold">
                                        <span>About</span>
                                    </div>
                                    <div className="box-body">
                                        <ul>
                                            <li><a href="#"> Menu</a></li>
                                            <li><a href="#"> Menu</a></li>
                                            <li><a href="#"> Menu</a></li>
                                            <li><a href="#"> Menu</a></li>
                                            <li><a href="#"> Menu</a></li>
                                            <li><a href="#"> Menu</a></li>
                                            <li><a href="#"> Menu</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-12 text-center p-3">
                    <small>© 2018-2023 Bybit.com. All rights reserved.</small>
                </div>
            </div>
        </div>
    </div>
  )
}
