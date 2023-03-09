import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
//Importamos ITask
import { ITask, LEVELS } from 'src/app/models/task.interface';


@Component({
  selector: 'app-kamban-task',
  templateUrl: './kamban-task.component.html',
  styleUrls: ['./kamban-task.component.scss'],
})
export class KambanTaskComponent {
  details:boolean=false;

  todo:ITask[]=[
    {
    title: 'Animaciones en Angular',
    desciption: 'aprender animaciones en Angular',
    completed: false,
    level: LEVELS.URGENTE
    },
    {
      title: 'Angular CLI',
      desciption: 'aprender a gestionar Angular CLI',
      completed: false,
      level: LEVELS.URGENTE
      },

   {
    title: 'Build ',
    desciption: 'aprender a gestionar una Build en Angular',
    completed: false,
    level: LEVELS.BLOCKING
    },
    {
    title: 'Deploy',
    desciption: 'Aprender a desplegar bundle en Angular',
    completed: false,
    level: LEVELS.URGENTE
    }
  ]

  done:ITask[]=[
    {
      title: 'TypeScript',
      desciption: 'Aprender TypeScript',
      completed: true,
      level: LEVELS.BLOCKING
      },
      {
        title: 'JS y ES',
        desciption: 'Aprender JS y ES',
        completed: true,
        level: LEVELS.BLOCKING
        },
        {
          title: 'Angular',
          desciption: '',
          completed: true,
          level: LEVELS.URGENTE
          },
          {
            title: 'Primer Hola Mundo',
            desciption: 'Crear Hola mundo en Angular',
            completed: true,
            level: LEVELS.INFO
            },
            {
              title: 'Componentes en Angular',
              desciption: 'Aprender a gestionar componentes en Angular',
              completed: true,
              level: LEVELS.URGENTE
              },
              {
                title: 'Servicios en Angular',
                desciption:  'Aprender a gestionar servicios en Angular',
                completed: true,
                level: LEVELS.URGENTE
                },
                {
                  title: 'Directivas, pipes, peticiones Http',
                  desciption:  'Directivas, pipes, peticiones Http',
                  completed: true,
                  level: LEVELS.URGENTE
                  },
                  {
                    title: 'Angular Material',
                    desciption:  'Gestionar Angular material',
                    completed: true,
                    level: LEVELS.INFO
                    },
  ]
  

  /*
  todo = [
    'Animaciones en Angular',
    'Aprender a gestionar Angular CLI',
    'Aprender a hacer una build en Angular',
    'Aprender a desplegar bundle en Angular'
   
  ];

  done = [
    'Aprender TypeScript',
    'Aprender JS y ES',
    'Aprender Angular',
    'Instalar Angular',
    'Crear Hola mundo en Angular',
    'Aprender a gestionar componentes en Angular',
    'Aprender a gestionar servicios en Angular',
    'Directivas, pipes, peticiones Http',
    'Gestionar Angular material'
  ];*/

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
  showDetails(){
    this.details=!this.details;
  }
}
