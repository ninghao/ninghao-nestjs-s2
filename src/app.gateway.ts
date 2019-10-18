import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';

@WebSocketGateway(3001, { namespace: 'app' })
export class AppGateway {
  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string) {
    console.log(data);
    return 'Server: got it!';
  }
}
