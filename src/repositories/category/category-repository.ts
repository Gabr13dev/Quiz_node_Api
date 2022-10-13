export interface CategoryCreateData {
    nameCategory: string;
}

export interface CategoryRepository{
    create:(data: CategoryCreateData) => Promise<void>;
}