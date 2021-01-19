import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalarIslePage } from './galar-isle.page';

describe('GalarIslePage', () => {
  let component: GalarIslePage;
  let fixture: ComponentFixture<GalarIslePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalarIslePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalarIslePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
