import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../services/posts.service';
interface IPost{
  id:number;
  title:string;
  body:string;
  
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: IPost[] =[];
  postId:any;
  constructor(private postService:PostsService , private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts)=>{
      this.posts=posts;
    this.activateRoute.paramMap.subscribe((params:ParamMap)=>{
      this.postId=params.get('id')
    })
  });
}
  isSelected(post:any){
    return parseInt(post.id)==(this.postId)
  }

}
