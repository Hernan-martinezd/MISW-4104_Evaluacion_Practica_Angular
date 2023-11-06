/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { PlantaComponent } from './plantas.component';
import { PlantasService } from './plantas.service';
import { Planta } from './plantas';


describe('BookListComponent', () => {
 let component: PlantaComponent;
 let fixture: ComponentFixture<PlantaComponent>;
 let debug: DebugElement;

 beforeEach(waitForAsync(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PlantaComponent ],
     providers: [ PlantasService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PlantaComponent);
   component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
    const planta = new Planta(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
     
    );
    component.plantas.push(planta);
  }
  fixture.detectChanges();
  debug = fixture.debugElement;
   
 });

 it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have 3 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

});