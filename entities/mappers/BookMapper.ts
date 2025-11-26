import { Book } from "../Book";
import { Post } from "../Post";
import { ServerPost } from "./ServerPost";

export class BookMapper {
    static toBook (data: ServerPost[]): Book[] {
        return data.map((item): Book => {
            return {
                descripcion: item.body,
                titulo: item.title,
            }
        })
    }
}