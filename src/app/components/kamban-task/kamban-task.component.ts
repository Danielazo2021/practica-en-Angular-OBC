import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
//Importamos ITask
import { ITask, LEVELS } from 'src/app/models/task.interface';


@Component({
  selector: 'app-kamban-task',
  templateUrl: './kamban-task.component.html',
  styleUrls: ['./kamban-task.component.scss'],
})
export class KambanTaskComponent implements OnInit {
  details:boolean=false;


  todo:ITask[]=[
    {
    title: 'Animaciones en Angular',
    desciption: 'te permite animar secuencias coordinadas, como un grid completo o una lista de elementos cuando entran y salen de una página. ',
    completed: false,
    level: LEVELS.URGENTE
    },
    {
      title: 'Angular CLI',
      desciption: ' es una herramienta de línea de comandos que se utiliza para inicializar, desarrollar, estructurar y mantener aplicaciones de Angular directamente desde la terminal',
      completed: false,
      level: LEVELS.URGENTE
      },

   {
    title: 'Build ',
    desciption: 'Compila una aplicación de Angular en un directorio de salida llamado dist/ en la ruta dada.',
    completed: false,
    level: LEVELS.BLOCKING
    },
    {
    title: 'Deploy',
    desciption: 'desplegar todos los resultados de la compilación para que sean reconocidos al momento de subirlos a nuestro servidor de producción',
    completed: false,
    level: LEVELS.URGENTE
    }
  ]

  done:ITask[]=[
    {
      title: 'TypeScript',
      desciption: 'Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases',
      completed: true,
      level: LEVELS.BLOCKING
      },
      {
      title: 'JS y ES',
      desciption: 'Aprender Javascript y EcmaScript',
      completed: true,
      level: LEVELS.BLOCKING
      },
      {
      title: 'Angular',
      desciption: 'Angular es un framework de ingeniería de software de código abierto mantenido por Google, que sirve para desarrollar aplicaciones web de estilo Single Page Application (SPA) y Progressive Web App (PWA)',
      completed: true,
      level: LEVELS.URGENTE
      },
      {
        title: 'HTML',
        desciption: 'es el código que se utiliza para estructurar y desplegar una página web y sus contenidos',
        completed: true,
        level: LEVELS.BLOCKING
        },
        {
     title: 'CSS',
      desciption: ' lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita',
      completed: true,
      level: LEVELS.BLOCKING
      },
      {
      title: 'Bootstrap',
      desciption:  ' conjunto de herramientas de código abierto muy popular entre los expertos en desarrollo web, ya que está ideado para un desarrollo responsive',
      completed: true,
      level: LEVELS.URGENTE
      },
      {
      title: 'Directivas',
      desciption:  'mejoran la capacidad de los elementos HTML al adjuntar comportamientos personalizados al DOM',
      completed: true,
      level: LEVELS.INFO
      },
      {
      title: 'Angular Material',
      desciption:  'es una guía completa para el diseño visual, interactivo y de movimiento en plataformas y dispositivos',
      completed: true,
      level: LEVELS.INFO
      },
  ]  

 
constructor(){}
ngOnInit(): void {

}
  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
     
      console.log('en una misma columna',event.container.data);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
       console.log('entre columnas',event);
       
       //actualizar el estado dela taskcuando pasa de un lado al otro
       event.previousContainer.data[event.previousIndex].completed = 
       !event.previousContainer.data[event.previousIndex].completed
       
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
