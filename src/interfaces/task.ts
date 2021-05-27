export interface TaskItem {
    id:string,
    description:string,
    created_at:Date,
    expiration_date:Date,
}

export interface TaskList<ItemType> {
    [index:number]:ItemType,
}