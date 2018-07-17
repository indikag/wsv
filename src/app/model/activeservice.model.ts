import { ServiceUser } from './serviceuser.model'

export class Service {
   constructor(
      public serviceName?: string,
      public published?: boolean,
      public publishedDate?: Date,
      public lastModifiedDate?: Date,
      public serviceURL?: string,
      public userList?: any

   ) { }
}