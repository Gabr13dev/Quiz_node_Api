import { CategoryRepository } from "../../repositories/category/category-repository";

interface SubmitCategoryUseCaseRequest{
    nameCategory: string;
}

export class SubmitCategoryUseCase {
    constructor(
        private CategorysRepository: CategoryRepository,
    ) {}

    async execute(request: SubmitCategoryUseCaseRequest) {
        const { nameCategory } = request;

        this.CategorysRepository.create({
            nameCategory,
        });
    }
}