import Window from './Window';
import Onglet from './Onglet';
import Line from '../App/Line';
import { useContext } from 'react';
import { dataContext } from '../App/DataProvider';

export default function Parcours() {
    const { Parcours } = useContext(dataContext);

    const onglets = Parcours.map(({ id, label, datas }) => ({
        key: id,
        title: label,
        content: (
            <Onglet>
                <div>{datas && `Parcours ${label}`}</div>
            </Onglet>
        ),
    }));

    return (
        <div id="parcours">
            <div className="row justify-content-center">
                <Window onglets={onglets} />
            </div>
            <Line />
        </div>
    );
}
