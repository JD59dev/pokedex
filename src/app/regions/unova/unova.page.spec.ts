import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnovaPage } from './unova.page';

describe('UnovaPage', () => {
  let component: UnovaPage;
  let fixture: ComponentFixture<UnovaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnovaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
