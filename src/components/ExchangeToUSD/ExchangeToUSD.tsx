import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import ExchangeComponent from '../ExchangeComponent/ExchangeComponent';

const ExchangeToUSD = () => {
    const exchangeTo = useAppSelector(state=>state.exchange.uahToUsd)
    return (
        <ExchangeComponent {...exchangeTo}/>
    );
};

export default ExchangeToUSD;