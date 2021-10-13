import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form : FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
      this.InitForm();
  }
  onSubmit(): void {
    console.log(this.form.value);
  }
  InitForm(): void{
    this.form = new FormGroup({
      cin : new FormControl(null,[Validators.required]),
      name : new FormControl(null,[Validators.required]),
      cv : new FormControl(null,[]),
      type : new FormControl(null,[Validators.required]),
    })
  }

}
