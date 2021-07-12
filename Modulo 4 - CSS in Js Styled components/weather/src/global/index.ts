import {atom} from 'jotai';
import { CityEntity } from '../api/Entities/EntityesDefinition';

export const citiesAtom = atom<CityEntity[]>([]);