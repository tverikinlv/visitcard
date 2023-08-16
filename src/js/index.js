import mobileNav from './modules/mobile-nav.js';
import { getWorksData, WorksItem } from './modules/works.js';



document.addEventListener('DOMContentLoaded', () => {
    getWorksData()
        .then(data => {data.map((el) => new WorksItem(el))});

    mobileNav(); 
})