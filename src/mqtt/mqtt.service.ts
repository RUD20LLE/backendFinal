import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttService {
  private client: mqtt.MqttClient;
  messageCallbacks: { [key: string]: (message: string) => void } = {};

  constructor(private configService: ConfigService) {
    const brokerUrl = this.configService.get<string>('MQTT_BROKER_URL');
    const username = this.configService.get<string>('MQTT_USERNAME');
    const password = this.configService.get<string>('MQTT_PASSWORD');
    const caCert = this.configService.get<string>('MQTT_CA_CERT');

    this.client = mqtt.connect(brokerUrl, {
      username,
      password,
      ca: caCert,
    });

    this.client.on('connect', () => {
      console.log('Connected to MQTT broker');
    });

    this.client.on('error', (error) => {
      console.error('MQTT Client Error:', error);
    });

    this.client.on('message', (topic, message) => {
      const callback = this.messageCallbacks[topic];
      if (callback) {
        callback(message.toString());
      }
    });
  }

  publish(topic: string, message: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.client.publish(topic, message, (error) => {
        if (error) {
          reject('Failed to publish');
        } else {
          resolve('Published successfully');
        }
      });
    });
  }

  subscribe(topic: string): void {
    this.client.subscribe(topic, (error) => {
      if (error) {
        console.error('Error al suscribirse:', error);
      } else {
        console.log('Suscripción exitosa:', topic);
      }
    });
  }

  onMessage(topic: string, callback: (message: string) => void): void {
    this.messageCallbacks[topic] = callback;
  }

  unsubscribe(topic: string): void {
    delete this.messageCallbacks[topic];
    this.client.unsubscribe(topic);
  }
}
