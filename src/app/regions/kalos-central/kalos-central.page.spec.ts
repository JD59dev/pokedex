import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalosCentralPage } from './kalos-central.page';

describe('KalosPage', () => {
  let component: KalosCentralPage;
  let fixture: ComponentFixture<KalosCentralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalosCentralPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalosCentralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
