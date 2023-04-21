import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  @Input()
  selectedCategory: Category = {
    id: 0,
    name: 'All',
  };

  @Output()
  selectCategoryEmitter = new EventEmitter<Category>();

  @Input()
  categories: Category[];

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.emitSelectCategory();
  }

  resetCategory(): void {
    this.selectedCategory = null;
    this.emitSelectCategory();
  }

  emitSelectCategory(): void {
    this.selectCategoryEmitter.emit(this.selectedCategory);
  }
}
