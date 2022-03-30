import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import ExchangeComponent from '../ExchangeComponent/ExchangeComponent';

const ExchangeToEUR = () => {
    const exchangeTo = useAppSelector(state=>state.exchange.uahToEur)
    return (
        <ExchangeComponent {...exchangeTo}/>
    );
};

export default ExchangeToEUR;