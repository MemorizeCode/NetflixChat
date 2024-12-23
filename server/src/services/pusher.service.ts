import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class SessionGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  constructor() {}

  onModuleInit() {
    console.log('SessionGateway initialized');
  }

  // Обработчик для подключения клиента
  @SubscribeMessage('connect')
  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  // Обработчик события sessionDeleted
  @SubscribeMessage('sessionDeleted')
  async handleSessionDeleted(
    @MessageBody() body: any, 
    @ConnectedSocket() client?: Socket
  ) {
    console.log(`Session deleted: ${body.id}`);

    // Отправка сообщения всем клиентам, которые подключены к этому событию
    const data = {
      id:body.id,
      token:body.token,
    }
    this.server.emit(`sessionDeleted_${data.id}`, data); 
  }

  async getRoomMessage(
    @MessageBody() body: any,
    @ConnectedSocket() client?: Socket
  ){
    console.log(body)
    console.log(client)
    this.server.emit(`${client}`, body); 
  }
}