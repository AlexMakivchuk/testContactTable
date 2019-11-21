export class ContactModel {
  id: number;
  name: string;
  phone: string;
  foto: string;
  constructor(id: number,
              name: string,
              phone: string,
              foto: string
              ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.foto = foto;
  }
}
