import homeHbs from 'templates/home.handlebars';

export const homePage = () => {
    document.addEventListener('DOMContentLoaded', function () {
        const div = document.createElement('div');
        div.innerHTML =  homeHbs({ name: 'Guest' });
        document.body.appendChild(div);
    });
}

