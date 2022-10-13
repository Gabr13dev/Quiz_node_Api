import { randomUUID } from 'crypto';
import { prisma } from '../../prisma';
import { CategoryCreateData, CategoryRepository } from "../category/category-repository";

export class PrismaCategoryRepository implements CategoryRepository{
    async create(data: CategoryCreateData){
        await prisma.category.create({
            data:{
                NameCategory: data.nameCategory,
            }
        });
    }
}