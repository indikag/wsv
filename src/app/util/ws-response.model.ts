export class WsResponse {
    constructor(
        public statusDescription?: string,
        public statusCode?: string,
        public statusName?: string,
        public payload?: any ) {}
}
