import { JsonPipe } from '@angular/common';

export class MutateLocalStorage{

    getLocalStorage(key){
        let deserializedValue:string = localStorage.getItem(key);;
        return JSON.parse(deserializedValue);
    }

    setLocalStorage(key,value){
        let serializedValue:string = JSON.stringify(value);
        localStorage.setItem(key,serializedValue);
    }

}