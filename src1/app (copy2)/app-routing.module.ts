import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start-page', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'start-page', loadChildren: './start-page/start-page.module#StartPagePageModule' },
   { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
 { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
 { path: 'noticeboard', loadChildren: './noticeboard/noticeboard.module#NoticeboardPageModule' },
 { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' },
 { path: 'resources', loadChildren: './resources/resources.module#ResourcesPageModule' },
  { path: 'student', loadChildren: './login/student/student.module#StudentPageModule' },
  { path: 'staff', loadChildren: './login/staff/staff.module#StaffPageModule' },
  { path: 'parent', loadChildren: './login/parent/parent.module#ParentPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
