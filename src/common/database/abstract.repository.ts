import {
  EntityManager,
  FindOneOptions,
  FindOptionsOrder,
  FindOptionsRelationByString,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class AbstractRepository<T extends BaseEntity<T>> {
  protected constructor(
    public readonly itemsRepository: Repository<T>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(entity: T): Promise<T> {
    return this.entityManager.save(entity);
  }

  async findOne(
    where: FindOneOptions<T>,
    relations?: FindOptionsRelations<T>,
  ): Promise<T | null> {
    const entity = await this.itemsRepository.findOne({
      ...where,
      ...(relations ? { relations } : {}),
    });

    if (!entity) {
      return null;
    }

    return entity;
  }

  async find(where: FindOptionsWhere<T>) {
    return this.itemsRepository.findBy(where);
  }

  async findAndCount(
    where: FindOptionsWhere<T>,
    page: number,
    pageSize: number,
    order?: FindOptionsOrder<T>,
    relations?: FindOptionsRelations<T> | FindOptionsRelationByString,
  ): Promise<[T[], number]> {
    return this.itemsRepository.findAndCount({
      where,
      ...(relations ? { relations } : {}),
      skip: pageSize * (page - 1),
      take: pageSize,
      ...(order ? { order } : {}),
    });
  }

  async count(): Promise<number> {
    return this.itemsRepository.count();
  }
}
