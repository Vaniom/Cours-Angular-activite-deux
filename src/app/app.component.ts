import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // titre h1 de la page
  title = 'Le blog de Superman';
  // tableau contenant les posts
  postArray = [
    {
      title: 'Mon premier article.',
      content: 'Suspendisse suscipit a mi in faucibus. Fusce convallis odio nec sem mollis semper. Integer suscipit. Maecenas sed tellus lacus. Mauris facilisis suscipit neque, ac dapibus justo mattis condimentum.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième article.',
      content: 'Maecenas sed tellus lacus. Mauris facilisis suscipit neque, ac dapibus justo mattis condimentum. Sed egestas nibh sed lacus posuere maximus. Etiam gravida vitae metus vitae varius. Phasellus mi lacus, tempus eu mattis.',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon troisième article.',
      content: 'Sed egestas nibh sed lacus posuere maximus. Etiam gravida vitae metus vitae varius. Phasellus mi lacus, tempus eu mattis. Suspendisse suscipit a mi in faucibus. Fusce convallis odio nec sem mollis semper. Integer suscipit.',
      loveIts: -5,
      created_at: new Date()
    }
  ];
}
