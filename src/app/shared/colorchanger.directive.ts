import {Directive,Renderer,ElementRef,HostListener,HostBinding} from '@angular/core';
@Directive({
    selector: '[cc]'
})
export class ColorChanger{
    private defaultColor = 'white';
    @HostListener('mouseenter')
    addColor(){
        this.defaultColor = 'pink';
    }
    @HostListener('mouseleave')
    removeColor(){
        this.defaultColor = 'white';
    }
    @HostBinding('style.backgroundColor')
    get applyStyle(){
        return this.defaultColor;
    }
}