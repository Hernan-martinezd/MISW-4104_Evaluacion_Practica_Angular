import { Component, OnInit } from '@angular/core';
import { Planta } from './plantas';
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantaComponent implements OnInit {

  totalInterior: number = 0
  totalExterior: number = 0
  constructor(private plantaService: PlantasService) { }
  plantas: Array<Planta> = [];
  
  getPlantas(): void {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.totalInterior = plantas.filter(planta => planta.tipo?.toLowerCase() == "interior" ).length
      this.totalExterior = plantas.filter(planta => planta.tipo?.toLowerCase() == "exterior" ).length
      this.plantas = plantas;
    });
  }
  ngOnInit() {
    this.getPlantas();
  }
}