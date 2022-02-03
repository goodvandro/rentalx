import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import { User } from '../../../../modules/accounts/infra/typeorm/entities/User';
import createConnection from '../index';

async function create() {
  const connection = await createConnection('localhost');

  const id = uuidV4();
  const password = await hash('admin', 8);

  await connection
    .createQueryBuilder()
    .insert()
    .into(User)
    .values({
      id,
      name: 'admin',
      email: 'admin@rentx.com',
      password,
      isAdmin: true,
      driver_license: 'AAAAAA',
      created_at: new Date(),
    })
    .execute();

  await connection.close();
}

create()
  .then(() => console.log('User admin created!'))
  .catch((error) => console.log('Error creating user admin', error));
