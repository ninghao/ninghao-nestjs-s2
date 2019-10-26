import { Injectable } from '@nestjs/common';
import { Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class UserSage {
  @Saga()
  demoSaga(events$: Observable<any>) {
    return events$.pipe(
      delay(3000),
      map(event => console.log('DemoSaga: ', event)),
    );
  }
}
