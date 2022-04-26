import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(80, { cors: true })
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  handleConnection() {
    console.log('connection made');
  }

  handleDisconnect() {
    console.log('disconnected');
  }

  @SubscribeMessage('event')
  handleMessage(socket: Socket, event: string) {
    console.log(event);
    this.server.emit('newEvent', event);
  }
}
