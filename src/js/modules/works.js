export async function getWorksData(url = '../../data.json') {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export class WorksItem {
    constructor(data, container = '.works__container') {
        this.data = data;
        this.container = document.querySelector(container);
        this.createMarkup();
    }

    createMarkup() {
        this.container.insertAdjacentHTML('beforeend',
            `<div class="work-card">
                <a href="${this.data.ahref}">
                    <img src="${this.data.imgsrc}" alt="${this.data.headline}">
                </a>
                <div class="work-card__wrapper">
                    <h3 class="work-card__headline">${this.data.headline}</h3>
                    <p class="work-card__description">${this.data.description}</p>
                </div>
            </div>`);
    }
}
