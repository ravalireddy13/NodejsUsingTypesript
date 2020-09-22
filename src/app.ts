import express from 'express';
import Router from './router'

import * as bodyParser from 'body-parser'

class App {
  static listen(port: number, arg1: () => void) {
    throw new Error('Method not implemented.')
  }
  private httpServer: any

  constructor() {
    this.httpServer = express()

    this.httpServer.use(bodyParser.urlencoded({ extended: true }));
    this.httpServer.use(bodyParser.json());

    new Router(this.httpServer);

  }

  public Start = (port: number) => {
    return new Promise((resolve, reject) => {

      this.httpServer.listen(
        port,
        () => {
          resolve(port)
        })
        .on('error', (err: object) => reject(err));
    })
  }
}

export default App;