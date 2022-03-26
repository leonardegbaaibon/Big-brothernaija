import { Component } from 'react'
import React, { useState ,useEffect } from 'react'


import './Middle.css'



class Middle extends Component {
    state = {
        countOdds: 0 ,
        odds:false
    }

    pickedOdds = () =>{
        this.setState({
            countOdds: this.state.countOdds + 1,
            odds:true
        })
    }
    pickedOdds = () =>{
        this.setState({
            countOdds: this.state.countOdds - 1,
            odds:false
        })
    }
    
    render() {
        const odds = this.state.odds
       if(odds){
        
    }else{
        pickedOdds = () => {
            this.setState({countOdds: this.state.countOdds - 1})
        }
    }
        return(
            <div className='housemate-div'>
                <h1>Housemates up for eviction</h1>
                <div className="arrange-div">
                    <div className="picture-div1">
                        <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay" onClick={this.pickedOdds} onDoubleClick={this.unpickedOdds}>2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                    <div className="picture-div2">
                    <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                    <div className="picture-div3"> 
                    <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                </div>
                <div className="arrange-div">
                    <div className="picture-div1">
                        <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                    <div className="picture-div2">
                    <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                    <div className="picture-div3"> 
                    <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                </div>
                <div className="arrange-div">
                    <div className="picture-div1">
                        <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                    <div className="picture-div2">
                    <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                    <div className="picture-div3"> 
                    <div className="part-img">
                        <img src="https://placekitten.com/g/210/100 " alt="Cat1" sizes="" srcset="" />
                        </div>
                        <div className="odds-div">
                            <div className="odds-name">
                                <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                            </div>
                            <div className="odds-figure">
                                <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                            </div>
                    </div>
                </div>
                <div className="odd-div">
            <h1 className="count">
                {this.state.countOdds}
            </h1>
            {/* <svg  height="100" width="500" >
    <circle cx="160" cy="55" rx="75" ry="40" fill="yellow" />
    <ellipse cx="120" cy="55" rx="65" ry="40" style="fill:purple" />
    <ellipse cx="152" cy="55" rx="36" ry="32.5" style="fill:red" />
    <ellipse cx="152" cy="55" rx="5" ry="5" style="fill:black" />
    </svg> */}
    </div>        



            </div>
    )
}
}


export default Middle;
