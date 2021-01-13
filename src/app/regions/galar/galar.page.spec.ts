import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalarPage } from './galar.page';

describe('GalarPage', () => {
  let component: GalarPage;
  let fixture: ComponentFixture<GalarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
