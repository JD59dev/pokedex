import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalosCoastalPage } from './kalos-coastal.page';

describe('KalosCoastalPage', () => {
  let component: KalosCoastalPage;
  let fixture: ComponentFixture<KalosCoastalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalosCoastalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalosCoastalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
