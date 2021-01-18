import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MqttService } from './mqtt.service';

@Controller('mqtt')
export class MqttController {
  constructor(private readonly mqttService: MqttService) {}

  @Post('publish')
  publish(@Body() message: { topic: string; payload: string }): void {
    this.mqttService.publish(message.topic, message.payload);
  }

  @Get('subscribe/:topic')
  subscribe(@Param('topic') topic: string): void {
    this.mqttService.subscribe(topic);
  }
}
