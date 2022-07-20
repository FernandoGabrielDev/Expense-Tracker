import * as C from './style'
import { Item } from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = () => {
    return(
        <C.Container>
            <button>Adicionar</button>
        </C.Container>
    );
}