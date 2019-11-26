export class ContactModel {
  id: number;
  name: string;
  phone: string;
  photo: string;

  constructor(id: number,
              name: string,
              phone: string,
              photo: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.photo = photo;
  }
}
