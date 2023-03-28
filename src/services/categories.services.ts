import { ICategoriesRepository } from "../interfaces/categories.repository.interface";
import { Category } from "../models/category.model";

interface ICreateService {
  name: string;
  description: string;
}

class CategoriesServices {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  findAll(): Category[] {
    return this.categoriesRepository.findAll();
  }

  create({ name, description }: ICreateService): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CategoriesServices };
