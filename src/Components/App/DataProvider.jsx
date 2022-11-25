import { createContext } from 'react';
import datas from './data';

export const dataContext = createContext(datas);

export default function DataProvider({ children }) {
    return (
        <dataContext.Provider value={datas}>{children}</dataContext.Provider>
    );
}
