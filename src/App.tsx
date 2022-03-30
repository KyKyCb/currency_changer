import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import CloseLogo from "./assets/svgComponents/CloseLogo";
import Modal from "./components/Modal/Modal";
import {
    asyncSetExchangeAction,
    setErrorAction,
} from "./redux/actions/exchangeActions";
import { useAppSelector } from "./redux/hooks";
import AppRouter from "./routes/AppRouter";
import { Tabs } from "antd";
import 'antd/dist/antd.css'; 
import { useNavigate } from "react-router-dom";
import { publicRoutes } from "./routes/Routes";

function App() {
    const dispatch = useDispatch();
    const error = useAppSelector((state) => state.exchange.error);
    const navigation = useNavigate()

    const [activeErrorModal, setActiveErrorModal] = useState<boolean>(false);
    const [activeTabKey, setActiveTabKey] = useState<number>(0);

    const closeModalHandler = () => {
        dispatch(setErrorAction(null));
        setActiveErrorModal(false);
    };

    const onTabsChangeHandler = (value:string)=>{
      setActiveTabKey(Number(value))
    }

    useEffect(() => {
        dispatch(asyncSetExchangeAction());
    }, []);

    useEffect(() => {
        if (error) {
            setActiveErrorModal(true);
        }
    }, [error]);

    useEffect(()=>{
      navigation(publicRoutes[activeTabKey].path)
    }, [activeTabKey])

    return (
        <div className="App">
            <Modal active={activeErrorModal} setActive={closeModalHandler}>
                <div className="error">
                    <div className="error__heading">
                        <div className="error__title">Error</div>

                        <CloseLogo
                            className="error__close-icon"
                            onClick={closeModalHandler}
                        />
                    </div>

                    <p className="error__info">{error}</p>
                </div>
            </Modal>
            <Tabs defaultActiveKey="0" onChange={onTabsChangeHandler}>
              <Tabs.TabPane tab='UAH-USD' key={'0'}/>
              <Tabs.TabPane tab='UAH-EUR' key={'1'}/>
              <Tabs.TabPane tab='UAH-PLN' key={'2'}/>
            </Tabs>
            <AppRouter />
        </div>
    );
}

export default App;
