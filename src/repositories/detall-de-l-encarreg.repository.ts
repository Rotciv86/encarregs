import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DetallDeLEncarreg, DetallDeLEncarregRelations} from '../models/detall-de-l-encarreg.model';

export class DetallDeLEncarregRepository extends DefaultCrudRepository<
  DetallDeLEncarreg,
  typeof DetallDeLEncarreg.prototype.id,
  DetallDeLEncarregRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(DetallDeLEncarreg, dataSource);
  }
}
