import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'start-page', loadChildren: './start-page/start-page.module#StartPagePageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'noticeboard', loadChildren: './noticeboard/noticeboard.module#NoticeboardPageModule' },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' },
  { path: 'resources', loadChildren: './resources/resources.module#ResourcesPageModule' },
  { path: 'student', loadChildren: './login/student/student.module#StudentPageModule' },
  { path: 'staff', loadChildren: './login/staff/staff.module#StaffPageModule' },
  { path: 'parent', loadChildren: './login/parent/parent.module#ParentPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'call', loadChildren: './call/call.module#CallPageModule' },
  { path: 'chat-page', loadChildren: './chat-page/chat-page.module#ChatPagePageModule' },
  { path: 'groups', loadChildren: './groups/groups.module#GroupsPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'change-password', loadChildren: './change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'profile-picture', loadChildren: './profile-picture/profile-picture.module#ProfilePicturePageModule' },
  { path: '', loadChildren: './tebs/tebs.module#TebsPageModule' },
  { path: 'teb1', loadChildren: './teb1/teb1.module#Teb1PageModule' },
  { path: 'teb2', loadChildren: './teb2/teb2.module#Teb2PageModule' },
  { path: 'teb3', loadChildren: './teb3/teb3.module#Teb3PageModule' },
  { path: 'addnotice', loadChildren: './noticeboard/addnotice/addnotice.module#AddnoticePageModule' },
  { path: 'noticedetail', loadChildren: './noticeboard/noticedetail/noticedetail.module#NoticedetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
