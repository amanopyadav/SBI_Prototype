import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRoleComponent } from './client-role.component';

describe('ClientRoleComponent', () => {
  let component: ClientRoleComponent;
  let fixture: ComponentFixture<ClientRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientRoleComponent]
    });
    fixture = TestBed.createComponent(ClientRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
