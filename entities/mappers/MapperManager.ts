import { BookMapper } from "./BookMapper";
import { PostMapper } from "./PostMapper";
import { ServerPost } from "./ServerPost";

export class MapperManager {
    
    static convertFromServerPost(serverObjects: ServerPost[], typeTarget: string): any[] {

        if(typeTarget == 'post') {return PostMapper.toPost(serverObjects);}
        if(typeTarget == 'book') {return BookMapper.toBook(serverObjects)}
        
        else return [];
    }
}