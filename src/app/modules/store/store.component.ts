import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakeStoreService } from '../../services/fake-store/fake-store.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  products: Product[] = [];

  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
    this.fakeStoreService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
