import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {FaRupeeSign} from 'react-icons/fa'

class FeesCalculator extends Component {

    constructor(){
        super();
        this.state = {
            isa_amount: 0,
            duration: 12,
            monthly_tenure: 0
        }
    }

    changeEventHandler = async (e) => {
        e.preventDefault();
        
        const {name, value} = e.target;

        if(name === 'isa_amount'){
            const num_regX = new RegExp(/^[1-9]\d*(\.\d+)?$/);
                
            if(num_regX.test(value)){
                await this.setState({ isa_amount: value, amountValid: true });
            }
            else{
                await this.setState({ amountValid: false });
            }
        }
        else {
           await this.setState({
               duration: value
           })
        }

        if(this.state.amountValid)
            await this.setState({      
                monthly_tenure: (this.state.isa_amount / this.state.duration).toFixed(2)
            });
    }

    render() {
        return (
            <div className="calc_container">
                <h2 style={{marginBottom: '1.5rem'}} className="pinkText center">Fees Calculator</h2>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <input type="number" className="form-control" name="isa_amount" placeholder="ISA Amount" onChange={this.changeEventHandler}/>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={4}>
                            <select name="duration" className="form-control" onChange={this.changeEventHandler}>
                                <option value={0} disabled>Duration</option> 
                                <option value={12} selected>12 months</option>
                                <option value={24}>24 months</option>
                                <option value={30}>30 months</option>
                                <option value={36}>36 months</option>
                            </select>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <h4 className="MonthlyTenure">Monthly tenure: {this.state.amountValid ? <><FaRupeeSign/> {this.state.monthly_tenure}</> : 'N/A'}</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        )
    }

}

export default FeesCalculator
