import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuItem } from 'primeng/api';

import {Routes} from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, FormsModule, MegaMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  text = '';
  title = '';
  msg = '';
  items = [];
  onClick() {
    this.msg = 'Welcome ' + this.text +" this is gunturi" + this.sumNumbers(10, 25);

  }
  sumNumbers(a:number, b:number){
    let sum= a+b;
    console.log('sum = ' + sum);
    return sum;
  }
}

