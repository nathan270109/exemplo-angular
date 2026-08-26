import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./feats/nav/nav";
import { Exercicios } from "./feats/exercicios/exercicios";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Exercicios],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('exemplo-angular');
}
