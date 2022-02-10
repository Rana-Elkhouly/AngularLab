import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { DiscountComponent } from './discount/discount.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NodiscountComponent } from './nodiscount/nodiscount.component';
import { PagetofoundComponent } from './pagetofound/pagetofound.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent ,
  children:[
    {path:'discount',component:DiscountComponent},
    {path:'nodiscount',component:NodiscountComponent}
  ]
},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:id',component:CommentComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'**',component:PagetofoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
