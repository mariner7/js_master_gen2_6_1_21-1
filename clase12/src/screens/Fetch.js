import React, { Component } from 'react';
import Dropdown from '../components/Dropdown';
import Line from '../components/Line';
import { Api } from '../lib/Api';
import Countries from './Countries';

export default class Fetch extends Component {
    constructor(props){
        super(props)

        this.state = {
            countries: this.sortCountries(this.fetchFromStorage()),
            selectedCountry: '',
            selectedCountryData: undefined,
        }
    }

    sortCountries = (countries = []) => {
        const sortedCountries = countries.slice().sort((a,b) => a.Country.localeCompare(b.Country))
        return sortedCountries
    }

    fetchFromStorage = () => JSON.parse(localStorage.getItem('countries'))

    onCountriesFetch = (countries) => {
        if(countries.length !== 0){
            localStorage.setItem('countries', JSON.stringify(countries))
        }
        const savedCountriesFetch = JSON.parse(localStorage.getItem('countries'))
        this.setState({ countries: savedCountriesFetch });
    }

    
    onChangeCountry = ({ target: { value: selectedCountry }}) => {
        this.setState({ selectedCountry })
        this.fetchDataByCountry(selectedCountry)
    }
    
    fetchDataByCountry = async (countrySlug) => {
        const { data } = await Api.getDataByCountry(countrySlug)
        this.setState({ selectedCountryData: data })
    }

    render(){
        const { countries, selectedCountry, selectedCountryData } = this.state;

        return(
            <>
                <Countries onCall={this.onCountriesFetch} />
                <Dropdown countries={countries} onChange={this.onChangeCountry} selected={selectedCountry} />
                <Line data={selectedCountryData} />
            </>
        )
    }
}