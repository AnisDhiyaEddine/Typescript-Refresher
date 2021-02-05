import { User } from './User';
import { CostumMap } from './CostumMap';
import { Company } from './Company';

const map = new CostumMap('map');

map.addMarker(new User());
map.addMarker(new Company());
