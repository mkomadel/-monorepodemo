import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {

    getTime(){
        return new Date();
    }

}
