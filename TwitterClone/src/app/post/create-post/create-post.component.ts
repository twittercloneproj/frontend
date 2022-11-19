import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;

  constructor(private router: Router) {
    this.postPayload = {
      text: '',
      user: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      text: new FormControl('', Validators.required),
      user: new FormControl('', Validators.required)
    });
  }

  createPost() {
    this.postPayload.text = this.createPostForm.get('text')?.value;
    this.postPayload.user = this.createPostForm.get('user')?.value;
  }

  discardPost() {
    this.router.navigateByUrl('/');
  }

}
