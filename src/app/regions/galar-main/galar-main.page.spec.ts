import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalarMainPage } from './galar-main.page';

describe('GalarMainPage', () => {
  let component: GalarMainPage;
  let fixture: ComponentFixture<GalarMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalarMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalarMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
