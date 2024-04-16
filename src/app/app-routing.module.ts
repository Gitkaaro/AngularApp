import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageFourComponent } from './page-four/page-four.component';
import { PageFiveComponent } from './page-five/page-five.component';
import { PageSixComponent } from './page-six/page-six.component';
import { PageSevenComponent } from './page-seven/page-seven.component';
import { PageEightComponent } from './page-eight/page-eight.component';
import { PageNineComponent } from './page-nine/page-nine.component';
import { PageTenComponent } from './page-ten/page-ten.component';

const routes: Routes = [
  {
    component: PageOneComponent,
    path: 'page-One',
  },
  {
    component: PageTwoComponent,
    path: 'page-Two',
  },
  {
    component: PageThreeComponent,
    path: 'page-Three',
  },
  {
    component: PageFourComponent,
    path: 'page-Four',
  },
  {
    component: PageFiveComponent,
    path: 'page-Five',
  },
  {
    component: PageSixComponent,
    path: 'page-Six',
  },
  {
    component: PageSevenComponent,
    path: 'page-Seven',
  },
  {
    component: PageEightComponent,
    path: 'page-Eight',
  },
  {
    component: PageNineComponent,
    path: 'page-Nine',
  },
  {
    component: PageTenComponent,
    path: 'page-Ten',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
