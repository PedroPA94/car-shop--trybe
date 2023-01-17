import {
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
  isValidObjectId,
} from 'mongoose';

const INVALID_ID_MSG = 'Invalid mongo id';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(INVALID_ID_MSG);

    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(_id: string): Promise<number> {
    if (!isValidObjectId(_id)) throw new Error(INVALID_ID_MSG);

    const deleted = await this.model.deleteOne({ _id });

    return deleted.deletedCount;
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error(INVALID_ID_MSG);

    return this.model.findById(id);
  }
}

export default AbstractODM;