import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinnohPage } from './sinnoh.page';

describe('SinnohPage', () => {
  let component: SinnohPage;
  let fixture: ComponentFixture<SinnohPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinnohPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinnohPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
