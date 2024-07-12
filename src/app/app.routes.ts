import { Routes } from '@angular/router';
import { HelloworldComponent } from './component/helloworld/helloworld.component';
import { OntapComponent } from './ontap/ontap.component';

export const routes: Routes = [
    {path: 'hello', component: HelloworldComponent},
    {path: 'ontap', component: OntapComponent},
];
