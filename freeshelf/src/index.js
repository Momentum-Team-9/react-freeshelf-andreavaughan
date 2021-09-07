import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import ReactDom from 'react-dom';
import { App } from './components/app.js';

ReactDom.render(
    <App />, 
    document.getElementById('root'),
)