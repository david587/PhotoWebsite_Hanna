import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmitterService } from '../shared/emitter.service';
import { FormService } from '../shared/form.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit{
 
  error!: any;
  responseMessage: any;
  myForm !: FormGroup;

  constructor(private emit: EmitterService,private renderer: Renderer2, private el: ElementRef,private form: FormService,private formBuilder: FormBuilder){}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'show');
        } else {
          this.renderer.removeClass(entry.target, 'show');
        }
      });
    });
  
    const hiddenElements = this.el.nativeElement.querySelectorAll('.hiden');
    hiddenElements.forEach((el: Element) => observer.observe(el));

    this.myForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      subject: [''],
      customsubject: [''],
      message: ['']
    });
  }
  

  scrollToTop()
  {
    //kiváltjuk az eseményt az emitben
    this.emit.onButton();
  }

  onSubmit()
  {
    this.storeInput();
  }
  

  storeInput() {
    let data = {
      firstName: this.myForm.value.firstName,
      lastName: this.myForm.value.lastName,
      email: this.myForm.value.email,
      subject: this.myForm.value.subject,
      customsubject: this.myForm.value.customsubject,
      message: this.myForm.value.message
    };
    this.clearField();
    this.form.storeInput(data)
    .subscribe({
      next: (data:any) => {
        this.error = "";
        this.responseMessage = data.message;
      },
      error: (err:any) => {
        this.error = err.error.errors;
      }
    });
  }
 
  clearField() {
    this.myForm.patchValue({
        firstName: '', 
        lastName: '',
        email: '',
        subject: '',
        customsubject: '',
        message:''
      });
  }
 
}
