import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignTranslatorComponent } from './sign-translator.component';

describe('SignTranslatorComponent', () => {
  let component: SignTranslatorComponent;
  let fixture: ComponentFixture<SignTranslatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignTranslatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignTranslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
