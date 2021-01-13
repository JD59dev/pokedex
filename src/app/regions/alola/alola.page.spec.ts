import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlolaPage } from './alola.page';

describe('AlolaPage', () => {
  let component: AlolaPage;
  let fixture: ComponentFixture<AlolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlolaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
