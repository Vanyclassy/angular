import {Injectable} from '@angular/core';


export interface IForm {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {
  userData: IForm;

  constructor() {
  }

  setUserData(data: IForm): void {
    this.userData = data;
    console.log(this.userData);
  }
}
