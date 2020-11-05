import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post = {
    title: '',
    content:'',
    created_at:'',
    updated_at:'',
    

  };
  submitted = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  savePost(): void {
    const data = {
      title: this.post.title,
      content: this.post.content,
      created: this.post.created_at,
      updated: this.post.updated_at
    };

    this.postService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      title: '',
      content:'',
      created_at:'',
      updated_at:'',
    
    };
  }

}
