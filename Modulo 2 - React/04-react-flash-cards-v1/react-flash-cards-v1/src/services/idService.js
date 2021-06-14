// Modulo externo trabalha com IDs únicos

import {v4 as uuid} from 'uuid';

export function getNewId() {
    return uuid();
}