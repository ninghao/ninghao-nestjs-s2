import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(3001, { namespace: 'app' })
export class AppGateway {}
