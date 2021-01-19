import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalosMountainPage } from './kalos-mountain.page';

describe('KalosMountainPage', () => {
  let component: KalosMountainPage;
  let fixture: ComponentFixture<KalosMountainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalosMountainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalosMountainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
