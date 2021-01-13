import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalosPage } from './kalos.page';

describe('KalosPage', () => {
  let component: KalosPage;
  let fixture: ComponentFixture<KalosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
