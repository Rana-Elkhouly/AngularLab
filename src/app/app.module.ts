import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ArrayPipe } from './pipes/array.pipe';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PagetofoundComponent } from './pagetofound/pagetofound.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DiscountComponent } from './discount/discount.component';
import { NodiscountComponent } from './nodiscount/nodiscount.component';
import { LoginuserComponent } from './loginuser/loginuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ArrayPipe,
    PostsComponent,
    UsersComponent,
    HomeComponent,
    PagetofoundComponent,
    CommentComponent,
    RegisterComponent,
    LoginComponent,
    DiscountComponent,
    NodiscountComponent,
    LoginuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
