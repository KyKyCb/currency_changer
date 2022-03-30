import React, { ChangeEvent, FC, FormEvent, FormEventHandler, useEffect, useState } from "react";
import { Input, Button } from "antd";
import { IExchangeCurrencyState } from "../../redux/reducers/exchangeReducer";

const ExchangeComponent: FC<IExchangeCurrencyState> = (props) => {
    const [inputValue, setInputValue] = useState<number>(0);
    const [resultValue, setResultValue] = useState<number>(0);

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();
        if (value) {
            if (Number(value) >= 0) {
                setInputValue(Number(value));
            }
        } else {
            setInputValue(Number(0));
        }
    };
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (props.result) {
            const exchangeResult = inputValue * props.result;
            setResultValue(exchangeResult);
        }
    };
    // useEffect(() => {
    //     if (props.result) {
    //         const exchangeResult = inputValue * props.result;
    //         setResultValue(exchangeResult);
    //     }
    // }, [inputValue, props.result]);

    useEffect(() => {
        console.log(props);
    });
    return (
        <form onSubmit={onSubmitHandler}>
            <Input
                placeholder={"Enter value"}
                value={inputValue}
                onChange={onInputChangeHandler}
                type={"number"}
            />
            <p>
                {resultValue} {props.to}
            </p>
            <button type={'submit'}>Рассчитать</button>
        </form>
    );
};

export default ExchangeComponent;
