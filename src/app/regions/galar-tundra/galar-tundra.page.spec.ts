import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GalarTundraPage } from './galar-tundra.page';

describe('GalarTundraPage', () => {
  let component: GalarTundraPage;
  let fixture: ComponentFixture<GalarTundraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalarTundraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GalarTundraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
