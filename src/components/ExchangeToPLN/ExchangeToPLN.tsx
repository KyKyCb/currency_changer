import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import ExchangeComponent from '../ExchangeComponent/ExchangeComponent';

const ExchangeToPLN = () => { 
    const exchangeTo = useAppSelector(state=>state.exchange.uahToPln)
    return (
        <ExchangeComponent {...exchangeTo}/>
    );
};

export default ExchangeToPLN;