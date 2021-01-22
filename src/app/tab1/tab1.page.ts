import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild('wallet', {read: ElementRef, static: true}) wallet: ElementRef;
  showHeaderBorder = true;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit(){
    const animation: Animation = this.animationCtrl.create()
    .addElement(this.wallet.nativeElement)
    .duration(1500)
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'scale(.2)', 'scale(1)');

    animation.play();
  }

  didScroll(ev){
    const top = ev.detail.scrollTop;
    if (top > 10){
      this.showHeaderBorder = false;
    }else{
      this.showHeaderBorder = true;
    }
  }

}
