import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState('USD');
    const [lang, setLang] = useState('en-us');

    useEffect(() => {
        if (currency === 'USD') setLang('en-us');
        else if (currency === 'JPY') setLang('ja-JP');
        else if (currency === 'EUR') setLang('en-us');
        else if (currency === 'CNY') setLang('en-us');
        else setLang('en-us');
    }, [currency]);

    return (
        <Crypto.Provider value={{ currency, setCurrency, lang }}>
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
};
