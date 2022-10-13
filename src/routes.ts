import express from 'express';
import { PrismaCategoryRepository } from './repositories/prisma/prisma-category-repository';
import { SubmitCategoryUseCase } from './use-cases/category/category-use-case';

export const routes = express.Router();

routes.post('/Category/Create', async (req, res) => {
    
    const primsaCategoryRepository = new PrismaCategoryRepository();
    const submitFeedbackUseCase = new SubmitCategoryUseCase(
        primsaCategoryRepository,
    );

    await submitFeedbackUseCase.execute({
        nameCategory: req.body.nameCategory,
    })
       
   return res.status(201).send();
})