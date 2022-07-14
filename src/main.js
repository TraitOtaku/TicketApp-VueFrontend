import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import PrimeVue from 'primevue/config';

// import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
// import 'primevue/resources/themes/nova-vue/theme.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
// import 'primevue/resources/themes/md-light-indigo/theme.css'
import '/node_modules/primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Button from 'primevue/button';
import TieredMenu from 'primevue/tieredmenu';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row'; 
import Card from 'primevue/card';    
import Menu from 'primevue/menu';
// FORM
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';



const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component('Button', Button);
app.component('TieredMenu', TieredMenu);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Card', Card);
app.component('Menu', Menu);
// FORM
app.component('AutoComplete', AutoComplete);
app.component('InputText', InputText);
app.component('Password', Password);

app.mount("#app");


