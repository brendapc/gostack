import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AlterProviderField1604230544736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropColumn('appointments', 'provider')

			await queryRunner.addColumn(
				'appointments',
				new TableColumn({
					name: 'provider_id',
					type: 'uuid',
					isNullable: true
				})
			)
			await queryRunner.createForeignKey('appointments', new TableForeignKey({
				columnNames: ['provider_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'users',  //RELACIONAMENTO
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',

			}))
		}

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('appointments', 'AppointmentsProvider')
			await queryRunner.dropColumn('appointments', 'provider_id')
			await queryRunner.addColumn('appointments', new TableColumn({
				name: 'name',
				type: 'varchar',
			}))

    }

}
