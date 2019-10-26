import { Injectable } from '@nestjs/common';
import { Saga, ofType } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { UserCreatedEvent } from '../events/user-created.event';
import { SendWelcomeMessageCommand } from '../commands/send-welcome-message.command';

@Injectable()
export class UserSage {
  @Saga()
  demoSaga(events$: Observable<any>) {
    return events$.pipe(
      delay(3000),
      map(event => console.log('DemoSaga: ', event)),
    );
  }

  @Saga()
  sendWelcomeMessage(events$: Observable<any>) {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map(event => new SendWelcomeMessageCommand(event.user)),
    );
  }
}
