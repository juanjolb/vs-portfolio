import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  sidePanelSubject: BehaviorSubject <boolean> = new BehaviorSubject<boolean>(false);
  sidePanelOpen = this.sidePanelSubject.asObservable();

  toggleSidePanel(active: boolean): void {
    const app = document.getElementById('app');
    active ? app?.classList.add('panel-open') : app?.classList.remove('panel-open');
    this.sidePanelSubject.next(active);
  }
}
