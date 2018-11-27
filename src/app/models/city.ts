interface cityResponse{
  categoryId: string;
  companyId: string;
  createDate: Date;
  description: string;
  descriptionCurrentValue: string;
  externalReferenceCode: string;
  groupId: string;
  lastPublishDate: Date;
  leftCategoryId: string;
  modifiedDate: Date;
  name: string;
  parentCategoryId: string;
  rightCategoryId: string;
  title: string;
  titleCurrentValue: string;
  userId: string;
  userName: string;
  uuid: string;
}
export class City {
  
  name: string;
  id: string;
  
  constructor(data: cityResponse) {
    this.name = data.name;
    this.id = data.categoryId
  }
  
}