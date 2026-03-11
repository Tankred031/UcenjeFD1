// 2. način dodavanja nove funkcije
import pozdrav, {PI,zbroji,prva,/*druga - ne mogu*/} from './matematika'  // .js može, a i ne mora

// 1. način dodavanja nove funkcije 
// import {zbroji} from './matematika'

console.log(PI)
console.log(zbroji(2,5))
console.log(pozdrav('Edunova'))
console.log(prva());
//console.log(druga()); Ne mogu je pozvati jer nije napravljen export druga
