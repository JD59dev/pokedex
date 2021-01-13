import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JohtoPage } from './johto.page';

describe('JohtoPage', () => {
  let component: JohtoPage;
  let fixture: ComponentFixture<JohtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohtoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JohtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
