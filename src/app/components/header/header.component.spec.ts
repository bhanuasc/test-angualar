import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from '../../highlight.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement : DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent,HighlightDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement=fixture.debugElement
  });

  fit('should change background color to yellow on mouse enter',()=>{
    const debugElement = fixture.debugElement.query(By.directive(HighlightDirective))
    const div: HTMLElement = debugElement.nativeElement;

    debugElement.triggerEventHandler('mouseenter',null);
    fixture.detectChanges();

    expect(div.style.backgroundColor).toBe('yellow');
  })


  fit('should change background color to yellow on mouse leave',()=>{
    const debugElement = fixture.debugElement.query(By.directive(HighlightDirective))
    const div: HTMLElement = debugElement.nativeElement;

    debugElement.triggerEventHandler('mouseenter',null);
    fixture.detectChanges();

    debugElement.triggerEventHandler('mouseleave',null);
    fixture.detectChanges();

    expect(div.style.backgroundColor).toBe('');
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should show title',()=>{
    expect(component.title).toBe("bhanu title");

  })

  fit('check title in html',()=>{
    fixture.detectChanges()
    var myEle = fixture.nativeElement
    expect(myEle.querySelector('h2').textContent).toContain('bhanu title')
  })

  fit('Check for para tags', () => {
    var paraEle = debugElement.queryAll(By.css('p'))
    expect(paraEle[1].nativeElement.textContent).toBe('bhanu')
    });

    fit('Check for button', () => {
      var btnele = debugElement.queryAll(By.css('.mybtn'))
      expect(btnele[0].nativeElement.disabled).toBeTrue()
      });

      fit('should have the correct image URL', () => {
        const imgElement = fixture.debugElement.query(By.css('.myimg'));
        const src = imgElement.nativeElement.src;
        const expectedUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hyundai.com%2Fin%2Fen&psig=AOvVaw1FmyUt1VW0TJsOLxcsPxx9&ust=1723188238792000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjqjMnu5IcDFQAAAAAdAAAAABAJ';
        
        expect(src).toBe(expectedUrl);
      })


      fit("even or odd numbers",()=>{
        var res = component.evenodd(10);
        expect(res).toBe("even");
       
     })


     fit("even or odd numbers",()=>{
      var res = component.evenodd(11);
      expect(res).toBe("odd");
     
   })

   fit('does even odd method called on button',()=>{
    spyOn(component,'evenodd');
    const btnelee = fixture.debugElement.query(By.css(".mybtn3"));
    btnelee.triggerEventHandler('click',null);
    expect(component.evenodd).toHaveBeenCalledWith(10);
   })

   fit('does isSubscribed method called on button',()=>{
    spyOn(component,'subscription');
    const btnelee = fixture.debugElement.query(By.css(".mybtn2"));
    btnelee.triggerEventHandler('click',null);
    expect(component.subscription).toHaveBeenCalled()
   })

  //  fit("should display correct number",()=>{
  //   var inputElement = fixture.nativeElement.querySelector('input')
  //   var buttonElement = fixture.nativeElement.querySelector('.mybtn3')
  //   var headerElement = fixture.nativeElement.querySelector('h4')
   
  //   inputElement.value=22;
  //   inputElement.dispatchEvent(new Event('input'))
   
  //   buttonElement.click()
  //   fixture.detectChanges()
   
  //   expect(headerElement.textContent.trim()).toBe("number entered is 22")
  // })



});
