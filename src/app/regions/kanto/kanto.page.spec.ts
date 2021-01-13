import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KantoPage } from './kanto.page';

describe('KantoPage', () => {
  let component: KantoPage;
  let fixture: ComponentFixture<KantoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KantoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KantoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
