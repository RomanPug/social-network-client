export class User {
  constructor(
    public email: string,
    public password: string,
    public firstname?: string,
    public lastname?: string,
    public day?: number,
    public month?: number,
    public year?: number,
    public gender?: string
  ) {}
}
