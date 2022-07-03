import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const TableArea = ({list}: Props) => {

    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumm width={100}>Data</C.TableHeadColumm>
                    <C.TableHeadColumm width={130}>Categoria</C.TableHeadColumm>
                    <C.TableHeadColumm>Título</C.TableHeadColumm>
                    <C.TableHeadColumm width={150}>Valor</C.TableHeadColumm>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    );
}