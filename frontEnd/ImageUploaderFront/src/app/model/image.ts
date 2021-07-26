import { Form } from "@angular/forms";

export class Image {
    id: number;
    version: number;
    file: FormData = new FormData();

    constructor(id?: number, version?: number, file?: FormData) {
        this.id = id!;
        this.version = version!;
        this.file = file!;
    }
}