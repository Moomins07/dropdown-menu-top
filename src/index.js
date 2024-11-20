import './styles/main.scss';
import { setEventListeners } from './eventListeners';
import { updateImage } from "./carousel"


document.addEventListener('DOMContentLoaded', () => {
    setEventListeners();
    updateImage()

});
