import { Injectable} from '@nestjs/common';
import "reflect-metadata"
import {Container} from "inversify"

let arr=[]

@Injectable()
export abstract class BooksRepository{
createBook(abc:Object){
    arr.push(abc);
    return arr[-1]
        }
    Hi() {
        return 'hi!'
    }
    getBook(id:number) {
        return arr[id];
    }
    getBooks(){
        return arr;
    }
    updateBook(id:number,book1234:Object) {
        arr[id]=book1234;
        return arr[id];
    }
    deleteBook(id:number) {
        arr.splice(id,1,);
        return 'ok';
    }
}
const IoC=new Container();
IoC.bind<any>(BooksRepository).toSelf();

