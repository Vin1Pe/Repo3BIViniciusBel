import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventBindingComponent, PropertyBindingComponent, InterpolationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-biscoito';
}
