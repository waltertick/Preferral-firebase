import { HomeService } from './home.service';
import { Skill } from './../models/Skill.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database'; 

@Injectable({
  providedIn: 'root'
})
export class SettingService {

skills: Skill[] = [];
  skillsSubject = new Subject<Skill[]>();

  constructor(private homesService : HomeService) { }

  createNewSkill(newSkill: Skill) {
    this.skills.push(newSkill);
    this.homesService.saveSkills();
    this.homesService.emitSkills();
  }

  removeSkill(skill: Skill) {
    const skillIndexToRemove = this.skills.findIndex(
        (skillEl) => {
          if(skillEl=== skill) {
            return true ;
          }
        }
    );
    this.skills.splice(skillIndexToRemove,1);
    this.homesService.saveSkills();
    this.homesService.emitSkills();
  }

  uploadFile(file: File) {
    return new Promise (
      (resolve,reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload= firebase.storage().ref()
        .child('images/' + almostUniqueFileName + file.name)
        .put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          ()=>{
            console.log('Chargement ...');
          },
            (error) => {
              console.log('Erreur de chargement : ' + error);
              reject();
            },
            ()=> {
              resolve(upload.snapshot.downloadURL);

            }
          );
      }
    );
  }

}
