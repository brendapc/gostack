import { container } from 'tsyringe';

import iAppointmentsRepository from '@modules/appointments/repositories/iAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import iUsersRepository from '@modules/users/repositories/iUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import '@modules/users/provider'

container.registerSingleton<iUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<iAppointmentsRepository>(
    'AppointmentsRepository',
    AppointmentsRepository
  );