import { Component } from '@angular/core';
import { NgCrudAioComponent } from 'ng-crud-kit';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aio',
  standalone: true,
  imports: [NgCrudAioComponent, MatTabsModule, MatButtonModule],
  templateUrl: './aio.html',
  styleUrl: './aio.scss'
})
export class Aio {
  public tableData = [
    {
      "id": "1",
      "name": "Wireless Ergonomic Mouse",
      "description": "A comfortable and responsive mouse designed for long hours of work.",
      "price": 49.99,
      "created_at": 1678886400
    },
    {
      "id": "2",
      "name": "4K Ultra HD Monitor",
      "description": "Crisp and vibrant display with a 27-inch screen, perfect for creative work.",
      "price": 349.50,
      "created_at": 1678972800
    },
    {
      "id": "3",
      "name": "Bluetooth Noise-Cancelling Headphones",
      "description": "Immersive sound and active noise cancellation for a superior listening experience.",
      "price": 199.00,
      "created_at": 1679059200
    },
    {
      "id": "4",
      "name": "Portable SSD 1TB",
      "description": "High-speed solid-state drive for quick data transfer and backup.",
      "price": 125.75,
      "created_at": 1679145600
    },
    {
      "id": "5",
      "name": "Smart Coffee Maker",
      "description": "Brew your coffee from anywhere using your smartphone and the companion app.",
      "price": 75.25,
      "created_at": 1679232000
    },
    {
      "id": "6",
      "name": "LED Desk Lamp with Wireless Charger",
      "description": "A modern desk lamp with multiple brightness settings and a built-in wireless charger.",
      "price": 55.00,
      "created_at": 1679318400
    },
    {
      "id": "7",
      "name": "Mechanical Gaming Keyboard",
      "description": "Tactile and responsive keyboard with customizable RGB lighting for gamers.",
      "price": 89.99,
      "created_at": 1679404800
    },
    {
      "id": "8",
      "name": "Fitness Tracker Smartwatch",
      "description": "Monitors heart rate, steps, and sleep, and connects to your phone for notifications.",
      "price": 149.50,
      "created_at": 1679491200
    },
    {
      "id": "9",
      "name": "Robot Vacuum Cleaner",
      "description": "Automated vacuum with smart mapping and a powerful suction for effortless cleaning.",
      "price": 299.99,
      "created_at": 1679577600
    },
    {
      "id": "10",
      "name": "Compact Digital Camera",
      "description": "Capture high-quality photos and videos with this easy-to-use digital camera.",
      "price": 249.00,
      "created_at": 1679664000
    },
    {
      "id": "11",
      "name": "Stainless Steel Water Bottle",
      "description": "Keeps drinks cold for 24 hours and hot for 12, with a leak-proof lid.",
      "price": 22.50,
      "created_at": 1679750400
    },
    {
      "id": "12",
      "name": "Smart Home Speaker",
      "description": "Voice-activated speaker with high-fidelity audio and smart home control features.",
      "price": 99.99,
      "created_at": 1679836800
    },
    {
      "id": "13",
      "name": "Portable Blender",
      "description": "Blend smoothies on the go with this compact and powerful portable blender.",
      "price": 35.00,
      "created_at": 1679923200
    },
    {
      "id": "14",
      "name": "Wireless Charging Pad",
      "description": "Charge your compatible devices wirelessly with a sleek and simple charging pad.",
      "price": 19.99,
      "created_at": 1680009600
    },
    {
      "id": "15",
      "name": "Laptop Stand",
      "description": "Elevate your laptop for a more ergonomic viewing angle and better airflow.",
      "price": 28.75,
      "created_at": 1680096000
    },
    {
      "id": "16",
      "name": "Outdoor Security Camera",
      "description": "Weatherproof camera with motion detection and night vision for home security.",
      "price": 159.00,
      "created_at": 1680182400
    },
    {
      "id": "17",
      "name": "Electric Toothbrush",
      "description": "Sonic vibration technology for a deep and thorough clean.",
      "price": 65.50,
      "created_at": 1680268800
    },
    {
      "id": "18",
      "name": "Aromatherapy Diffuser",
      "description": "Adds a calming scent and moisture to the air with a built-in light.",
      "price": 45.00,
      "created_at": 1680355200
    },
    {
      "id": "19",
      "name": "Smart Light Bulb",
      "description": "Control the color and brightness of your lights from your phone.",
      "price": 15.99,
      "created_at": 1680441600
    },
    {
      "id": "20",
      "name": "Portable Projector",
      "description": "A compact projector for movie nights anywhere, with a built-in battery.",
      "price": 399.00,
      "created_at": 1680528000
    }  
  ];

  public formData = {};

  public editId: any = null;

  public edit(id: any) {
    this.formData = {"id": 54,
      "name": "Gaming Computer",
      "description": "A gaming computer for fun",
      "price": 2500,
    }
    this.editId = id;
  }

  public remove(id: any){
    alert(`Item ${id} is being removed!`)
  }

  public save(data: any){
    if (this.editId)
	alert('Updating data');
    else
    	alert('Saving data!');
  }

  public cancelEdit(){
	this.editId = null
  }

  public clearTable(){
    this.tableData = [];
  }

  public updateForm(){
	this.formData ={
      "id": "16",
      "name": "Outdoor Security Camera",
      "description": "Weatherproof camera with motion detection and night vision for home",
      "price": 159.00,
      "created_at": 1680182400
    };
  }
}
