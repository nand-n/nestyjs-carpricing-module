import { Column, Entity, PrimaryGeneratedColumn , AfterInsert  , AfterRemove , AfterUpdate} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    email:string;
    @Column()
    password:string;
    @AfterInsert()
    //only works if the user entity instance is created => Hooks will not work if we use 
    logInsert(){
        console.log("Inserted User with id" , this.id);
    }
    @AfterUpdate()
    logUpdate(){
        console.log('Updated user with id', this.id);
    }
    @AfterRemove()
    logRemove(){
        console.log("Removed user with id ",this.id);

    }
}