import React, { Component } from 'react'
import axios from 'axios';
import {withAlert} from "react-alert";

const apiUrl = 'https://free.currencyconverterapi.com/api/v6'
// let store = localStorage;
export default class Index extends Component {
    state = {
        amount: '00.00',
        fromCurr: 'NGN',
        toCurr: 'NGN',
        // fromSym: '₦',
        // toSym: '₦',
        currencies: {},
        countries: {},
        result: '00.00',
        loading: false,
        rate: null
    }
    handlesInput = (e) => {
        
        this.setState({
            [e.target.name]: e.target.value
            
        })
        this.convert()
    }

   submit =e =>{
       e.preventDefault()

       return false;
   }

    fetchCountry = () => {
        axios.get(`${apiUrl}/countries`)
            .then(data => {
                const countries = data.data.results
                this.setState({ countries })
                const selected = Object.values(countries)
               
                this.setState({
                    fromCurr: selected[0]['currencyId'],
                    toCurr: selected[0]['currencyId']
        
                })
            })
            .catch(error => {
                console.error(error)
            })

    }
    convert = () => {
        const { amount, fromCurr, toCurr } = this.state
        let query = `${fromCurr}_${toCurr}`
        axios.get(`${apiUrl}/convert?q=${query}&compact=ultra`)
            .then(data => {
                const res = data.data
                const rate = res[query]
                const convert = amount * rate
                let result = convert
                this.setState({
                    rate,result
                })
            })
        console.log('func'+amount, fromCurr, toCurr)

    }
    componentDidMount() {
        //fetch countries
        this.fetchCountry()
        
    }
    render() {
        const { amount, fromCurr, toCurr, countries, result } = this.state
       
         const year = new Date()

        return (
            <div className="uk-align-center uk-container uk-overflow-hidden">
                {/* <div className="uk-margin-xlarge-top"></div> */}
                <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-small-top uk-align-center">
                    <div className="uk-card-header" style={{ background: "#4bacb8" }}>
                        <div className="uk-grid-small uk-flex-middle">
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom uk-text-center uk-text-bold" style={{ color: 'white' }}>Kurrency Konvert</h3>
                            </div>
                        </div>
                    </div>

                    <div className="uk-card-body">
                        <div className="uk-child-width-1-2@m uk-grid-divider" uk-grid="true">
                            <div>
                                <p className="uk-text-bold uk-text-small uk-text-center">{`${fromCurr} ${amount} TO`}</p>
                                {/* {loading? <div uk-spinner="true" style={{ color:'"#4bacb8' }}></div>:null} */}
                                <h3 className="uk-text-bold uk-text-center uk-margin-remove-top">{`${toCurr} ${result}`}</h3>
                            </div>
                            <div>
                                <form onSubmit={this.submit}>
                                    <div className="uk-width-1-1 uk-margin-small-bottom">
                                        <input className="uk-input uk-text-right uk-form-large uk-form-success uk-text-bold uk-text-small" aria-describedby="amount" type="number" min="0" placeholder="Amount to Convert" name="amount" onChange={this.handlesInput}/>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <div className="uk-form-control">
                                            <select className="uk-select uk-form-large uk-form-success uk-text-small" name="fromCurr" onChange={this.handlesInput}>
                                                {
                                                    Object.values(countries).map(country => {
                                                        return <option key={country.alpha3} value={country.currencyId}>{`${country.currencySymbol} ${country.currencyName}`}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <h3 className="uk-text-center uk-margin-remove-top uk-text-bold">TO</h3>
                                    <div className="uk-width-1-1">
                                        <div className="uk-form-control">
                                            <select className="uk-select uk-form-large uk-form-success uk-text-small" name="toCurr" onChange={this.handlesInput}>
                                                {
                                                    Object.values(countries).map(country => {
                                                        return <option key={country.alpha3} value={country.currencyId}>{`${country.currencySymbol} ${country.currencyName}`}</option>
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <footer className="uk-text-center">
                    <p>&copy; copyright {year.getFullYear()} Fash Muyhee</p>
                </footer>   
            </div>
        )
    }
}

