import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  comments:any[]=[];
  post:any={};
  postId:any;
  constructor(private postService:PostsService, private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.postId=params.get('id')
    })
    this.getPost();
    this.getComment();
    
  }
  getPost(){
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getSinPost(id).subscribe((post)=>{
    this.post=post;
    });
  }
  getComment(){
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getComments(id).subscribe((comments)=>{
    this.comments=comments;
    });
  }
  goPrev()
  {
    // let prevId=parseInt(this.postId)-1;
    this.router.navigate(["/posts",{id:this.postId}]);
  }


}
