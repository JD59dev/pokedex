import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoennPage } from './hoenn.page';

describe('HoennPage', () => {
  let component: HoennPage;
  let fixture: ComponentFixture<HoennPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoennPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoennPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
