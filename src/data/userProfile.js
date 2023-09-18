import { faker } from "@faker-js/faker";

const userData ={
    key:0,
    avatar:faker.image.url(),
    username:faker.person.middleName(),
    nickName:faker.person.fullName(),
   

}


export {userData};