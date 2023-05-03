import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
// Add PrimeVue
import PrimeVue from "primevue/config";
//importamos y luego inyectamos
import router from './router/router';

// Add Toast Service
import ToastService from "primevue/toastservice";

import "primevue/resources/themes/lara-light-indigo/theme.css";//theme
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons
import 'primeflex/primeflex.css'


import Button from "primevue/button";
import InputMask from "primevue/inputmask";
import Panel from 'primevue/panel';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import ConfirmPopup from 'primevue/confirmpopup';
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';
import InputText from "primevue/inputtext";
import Toolbar from 'primevue/toolbar';
import Password from 'primevue/password';
import Message from 'primevue/message';
import InlineMessage from "primevue/inlinemessage";

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(ToastService);


app.component('InputMask', InputMask);
app.component('Panel', Panel);
app.component('AutoComplete', AutoComplete);
app.component('Dropdown', Dropdown);
app.component('InputNumber', InputNumber);
app.component('Textarea', Textarea);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('ConfirmPopup', ConfirmPopup);
app.component('Button', Button);
app.component('RadioButton', RadioButton);
app.component('Calendar', Calendar);
app.component('Toolbar',Toolbar)
app.component('pv-button',Button);
app.component('pv-inputText',InputText);
app.component('pv-password', Password);
app.component('pv-input-text', InputText);
app.component('pv-message', Message);
app.component('pv-inline-message', InlineMessage);
app.component('InputText',InputText);

app.mount('#app')
